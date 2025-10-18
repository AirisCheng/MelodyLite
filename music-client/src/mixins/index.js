import {mapGetters} from 'vuex';
import {likeSongOfName,getCollectOfUserId,likeSongOfLyric} from '../api/index';

export const mixin = {
    computed: {
        ...mapGetters([
            'loginIn',              //用户是否已登录
            'userId',               //当前登录用户的id
        ])
    },
    methods: {
        //提示信息
        notify(title,type) {
            this.$notify({
                title: title,
                type: type
            })
        },

        //获取图片地址
        attachImageUrl (srcUrl) {
            return srcUrl? this.$store.state.configure.HOST+srcUrl : this.$store.state.configure.HOST+'/img/user.jpg';
        },

      // 根据歌手名字模糊查询歌曲
        getSong() {
            if (!this.$route.query.keywords) {
                this.$store.commit('setListOfSongs', []);
                this.notify('您输入的内容为空', 'warning');
                return;
        }
        const keywords = this.$route.query.keywords;

        // 先并行三个请求：歌曲名、歌手名、歌词
        Promise.all([
            likeSongOfName(keywords),   // 根据歌曲名和歌手名模糊查询（假设接口能兼容）
            likeSongOfLyric(keywords)   // 根据歌词模糊查询
        ]).then(([nameResults, lyricResults]) => {

        // 合并两个结果，去重（假设歌曲对象有唯一 id 字段）
        const map = new Map();
        if (Array.isArray(nameResults)) {
            nameResults.forEach(item => map.set(item.id, item));
        }
        if (Array.isArray(lyricResults)) {
            lyricResults.forEach(item => {
                if (!map.has(item.id)) {
                    map.set(item.id, item);
                }
            });
        }
        const mergedResults = Array.from(map.values());
        if (!mergedResults.length) {
            this.$store.commit('setListOfSongs', []);
            this.notify('系统暂无符合条件的歌曲', 'warning');
        } else {
            this.$store.commit('setListOfSongs', mergedResults);
        }
        }).catch(err => {
          console.error(err);
          this.notify('搜索出现错误，请稍后重试', 'error');
        });
      },
        //获取名字前半部分--歌手名
        replaceLName(str){
            let arr = str.split('-');
            return arr[0];
        },
        //获取名字后半部分--歌名
        replaceFName(str){
            let arr = str.split('-');
            return arr[1];
        },
        //播放
        toplay: function(id,url,pic,index,name,lyric){
            this.$store.commit('setId',id);
            this.$store.commit('setUrl',this.$store.state.configure.HOST+url);
            this.$store.commit('setPicUrl',this.$store.state.configure.HOST+pic);
            this.$store.commit('setListIndex',index);
            this.$store.commit('setTitle',this.replaceFName(name));
            this.$store.commit('setArtist',this.replaceLName(name));
            this.$store.commit('setLyric',this.parseLyric(lyric));
            this.$store.commit('setIsActive',false);
            if(this.loginIn){
                getCollectOfUserId(this.userId)
                    .then(res =>{
                        for(let item of res){
                            if(item.songId == id){
                                this.$store.commit('setIsActive',true);
                                break;
                            }
                        }
                    })
            }
        },
        //解析歌词
        parseLyric(text){
            let lines = text.split("\n");                   //将歌词按行分解成数组
            let pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g; //时间格式的正则表达式
            let result = [];                                //返回值
            //对于歌词格式不对的直接返回
            if(!(/\[.+\]/.test(text))){
                return [[0,text]]
            }
            //去掉前面格式不正确的行
            while(!pattern.test(lines[0])){
                lines = lines.slice(1);
            }
            //遍历每一行，形成一个每行带着俩元素的数组，第一个元素是以秒为计算单位的时间，第二个元素是歌词
            for(let item of lines){
                let time = item.match(pattern);  //存前面的时间段
                let value = item.replace(pattern,'');//存后面的歌词
                for(let item1 of time){
                    let t = item1.slice(1,-1).split(":");   //取出时间，换算成数组
                    if(value!=''){
                        result.push([parseInt(t[0],10)*60 + parseFloat(t[1]),value]);
                    }
                }
            }
            //按照第一个元素--时间--排序
            result.sort(function(a,b){
                return a[0] - b[0];
            });
            return result;
        },
        //获取生日
        attachBirth(val){
            return val.substr(0,10);
        }
    }
}
