<!--<template>-->
<!--    <div class="song-list-album">-->
<!--        <div class="album-slide">-->
<!--            <div class="album-img">-->
<!--                <img :src="attachImageUrl(tempList.pic)">-->
<!--            </div>-->
<!--            <div class="album-info">-->
<!--                <h2>简介：</h2>-->
<!--                <span>-->
<!--                    {{tempList.introduction}}-->
<!--                </span>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="album-content">-->
<!--            <div class="album-title">-->
<!--                <p>{{tempList.title}}</p>-->
<!--            </div>-->
<!--            <div class="album-score">-->
<!--                <div>-->
<!--                    <h3>歌单评分：</h3>-->
<!--                    <div>-->
<!--                        <el-rate v-model="average" disabled></el-rate>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <span>{{average*2}}</span>-->
<!--                <div>-->
<!--                    <h3>评价：</h3>-->
<!--                    <div @click="setRank">-->
<!--                        <el-rate v-model="rank" allow-half show-text></el-rate>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="songs-body">-->
<!--                <album-content :songList="listOfSongs">-->
<!--                    <template slot="title">歌单</template>-->
<!--                </album-content>-->
<!--                <comment :playId="songListId" :type="1"></comment>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--import {mixin} from '../mixins';-->
<!--import {mapGetters} from 'vuex';-->
<!--// import {listSongDetail,songOfSongId,setRank,getRankOfSongListId} from '../api/index';-->
<!--import {listSongDetail, songOfSongId, setRank, getRankOfSongListId, getSongListOfId} from '../api/index';-->
<!--import AlbumContent from "../components/AlbumContent";-->
<!--import Comment from "../components/Comment";-->

<!--export default {-->
<!--    name: 'song-list-album',-->
<!--    mixins: [mixin],-->
<!--    components:{-->
<!--        AlbumContent,-->
<!--        Comment-->
<!--    },-->
<!--    data(){-->
<!--        return {-->
<!--            songLists: [],      //当前页面需要展示的歌曲列表-->
<!--            songListId: '',    //前面传来的歌单id-->
<!--            average: 0,         //平均分-->
<!--            rank:  0            //提交评价的分数-->
<!--        }-->
<!--    },-->
<!--    computed:{-->
<!--        ...mapGetters([-->
<!--            'listOfSongs',      //当前播放列表-->
<!--            'tempList',         //当前歌单对象-->
<!--            'loginIn',          //用户是否已登录-->
<!--            'userId',           //当前登录用户id-->
<!--        ])-->
<!--    },-->
<!--    created(){-->
<!--        this.songListId = this.$route.params.id;-->
<!--        this.getSongId();-->
<!--        this.getRank(this.songListId);-->
<!--        if (!this.tempList || Object.keys(this.tempList).length === 0) {-->
<!--            const cached = window.sessionStorage.getItem('tempList');-->
<!--            if (cached) {-->
<!--                this.$store.commit('setTempList', JSON.parse(cached));-->
<!--            }-->
<!--        }-->
<!--    },-->
<!--    methods:{-->
<!--        //获取当前歌单的歌曲列表-->
<!--        getSongId(){-->
<!--            listSongDetail(this.songListId)-->
<!--                .then(res => {-->
<!--                    for(let item of res){-->
<!--                        this.getSongList(item.songId);-->
<!--                    }-->
<!--                    this.$store.commit('setListOfSongs',this.songLists);-->
<!--                })-->
<!--                .catch(err =>{-->
<!--                    console.log(err)-->
<!--                })-->
<!--        },-->
<!--        //根据歌曲id获取歌曲信息-->
<!--        getSongList(id){-->
<!--            songOfSongId(id)-->
<!--                .then(res => {-->
<!--                    this.songLists.push(res);-->
<!--                })-->
<!--                .catch(err =>{-->
<!--                    console.log(err)-->
<!--                })-->
<!--        },-->
<!--        //获取歌单评分-->
<!--        getRank(id){-->
<!--            getRankOfSongListId(id)-->
<!--                .then(res => {-->
<!--                    this.average = res/2;-->
<!--                })-->
<!--                .catch(err =>{-->
<!--                    console.log(err)-->
<!--                })-->
<!--        },-->
<!--        //提交评分-->
<!--        setRank(){-->
<!--            if(this.loginIn){-->
<!--                let params = new URLSearchParams();-->
<!--                params.append('songListId',this.songListId);-->
<!--                params.append('consumerId',this.userId);-->
<!--                params.append('score',this.rank *2);-->
<!--                setRank(params)-->
<!--                    .then(res => {-->
<!--                        if(res.code == 1){-->
<!--                            this.notify('评分成功','success');-->
<!--                            this.getRank(this.songListId);-->
<!--                        }else{-->
<!--                            this.notify('评分失败','error');-->
<!--                        }-->
<!--                    })-->
<!--                    .catch(err =>{-->
<!--                        this.notify('您已经评价过啦','error');-->
<!--                    })-->
<!--            }else{-->
<!--                this.rank = null;-->
<!--                 this.notify('请先登录','warning');-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--@import '../assets/css/song-list-album.scss';-->
<!--</style>-->




<template>
  <div class="song-list-album">
    <div class="album-slide">
      <div class="album-img">
        <img :src="attachImageUrl(tempList.pic)">
      </div>
      <div class="album-info">
        <h2>简介：</h2>
        <span>
                    {{tempList.introduction}}
                </span>
      </div>
    </div>
    <div class="album-content">
      <div class="album-title">
        <p>{{tempList.title}}</p>
      </div>
      <div class="album-score">
        <div>
          <h3>歌单评分：</h3>
          <div>
            <el-rate v-model="average" disabled></el-rate>
          </div>
        </div>
        <span>{{average*2}}</span>
        <div>
          <h3>评价：</h3>
          <div @click="setRank">
            <el-rate v-model="rank" allow-half show-text></el-rate>
          </div>
        </div>
      </div>
      <div class="songs-body">
        <album-content :songList="listOfSongs">
          <template slot="title">歌单</template>
        </album-content>
        <comment :playId="songListId"></comment>
      </div>
    </div>
  </div>
</template>
<script>
import {mixin} from '../mixins';
import {mapGetters} from 'vuex';
import {listSongDetail, songOfSongId, setRank, getRankOfSongListId, getSongListById} from '../api/index';
import AlbumContent from "../components/AlbumContent";
import Comment from "../components/Comment";

export default {
  name: 'song-list-album',
  mixins: [mixin],
  components:{
    AlbumContent,
    Comment
  },
  data(){
    return {
      songLists: [],      //当前页面需要展示的歌曲列表
      songListId: '',    //前面传来的歌单id
      average: 0,         //平均分
      rank:  0            //提交评价的分数
    }
  },
  computed:{
    ...mapGetters([
      'listOfSongs',      //当前播放列表
      'tempList',         //当前歌单对象
      'loginIn',          //用户是否已登录
      'userId',           //当前登录用户id
    ])
  },
  created(){
    this.songListId = this.$route.params.id;
    this.getSongId();
    this.getRank(this.songListId);
    this.getSongListInfo();
    if (!this.tempList || Object.keys(this.tempList).length === 0) {
      const cached = window.sessionStorage.getItem('tempList');
      if (cached) {
        this.$store.commit('setTempList', JSON.parse(cached));
      }
    }
  },
  methods:{
    //获取当前歌单的歌曲列表
    async getSongId(){
      try {
        const res = await listSongDetail(this.songListId);
        this.songLists = [];
        // 按顺序获取歌曲信息
        for (const item of res) {
          const song = await songOfSongId(item.songId);
          song.listSongId = item.id;
          this.songLists.push(song);
        }
        // 直接使用后端返回的顺序，不进行排序
        this.$store.commit('setListOfSongs', this.songLists);
      } catch (err) {
        console.log(err);
      }
    },
    //根据歌曲id获取歌曲信息
    getSongList(id){
      return songOfSongId(id);
    },
    //获取歌单评分
    getRank(id){
      getRankOfSongListId(id)
        .then(res => {
          this.average = res/2;
        })
        .catch(err =>{
          console.log(err)
        })
    },
    //获取歌单信息
    getSongListInfo(){
      getSongListById(this.songListId)
        .then(res => {
          this.$store.commit('setTempList', res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //提交评分
    setRank(){
      if(this.loginIn){
        let params = new URLSearchParams();
        params.append('songListId',this.songListId);
        params.append('consumerId',this.userId);
        params.append('score',this.rank*2);
        setRank(params)
          .then(res => {
            if(res.code == 1){
              this.notify("评分成功","success");
              this.getRank(this.songListId);
            }else{
              this.notify("评分失败","error");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }else{
        this.notify("请先登录","warning");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/song-list-album.scss';
</style>
