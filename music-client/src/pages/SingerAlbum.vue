<template>
    <div class="singer-album">
        <div class="album-slide">
            <div class="singer-img">
                <img :src="attachImageUrl(singer.pic)">
            </div>
            <ul class="info">
                <li v-if="singer.sex==0||singer.sex==1">{{attachSex(singer.sex)}}</li>
                <li>生日：{{singer.birth ? attachBirth(singer.birth) : '暂无'}}</li>
                <li>故乡：{{singer.location || '暂无'}}</li>
            </ul>
        </div>
        <div class="album-content">
            <div class="intro">
                <h2>{{singer.name || '未知歌手'}}</h2>
                <span>{{singer.introduction || '暂无介绍'}}</span>
            </div>
            <div class="content">
                <album-content :songList="listOfSongs">
                    <template slot="title">歌单</template>
                </album-content>
            </div>
        </div>
    </div>
</template>
<script>
import {mixin} from '../mixins';
import {mapGetters} from 'vuex';
import {songOfSingerId} from '../api/index';
import AlbumContent from "../components/AlbumContent";
export default {
    name: 'singer-album',
    mixins: [mixin],
    components:{
        AlbumContent
    },
    data(){
        return {
            singerId: '',       //前面传来的歌手id
            singer: {},         //当前歌手信息
        }
    },
    computed:{
        ...mapGetters([
            'listOfSongs',      //当前播放列表
            'tempList',         //当前歌手对象
            'loginIn',          //用户是否已登录
            'userId',           //当前登录用户id
        ])
    },
    created(){
        this.singerId = this.$route.params.id;
        console.log('路由参数 singerId:', this.singerId);
        
        // 从 sessionStorage 获取歌手信息
        const tempList = JSON.parse(window.sessionStorage.getItem('tempList'));
        console.log('从 sessionStorage 获取的歌手信息:', tempList);
        
        if (tempList) {
            this.singer = tempList;
            // 确保 singerId 和 tempList 中的 id 一致
            if (this.singer.id) {
                this.singerId = this.singer.id;
            }
        }
        this.getSongOfSingerId();
    },
    methods:{
        //根据歌手id查询歌曲
        getSongOfSingerId(){
            if (!this.singerId) {
                console.error('歌手ID不存在');
                return;
            }
            songOfSingerId(this.singerId)
                .then(res => {
                    console.log('获取到的歌手歌曲:', res);
                    if (res && res.length > 0) {
                        this.$store.commit('setListOfSongs', res);
                    } else {
                        console.log('该歌手暂无歌曲');
                    }
                })
                .catch(err => {
                    console.error('获取歌手歌曲失败:', err);
                });
        },
        //获取性别
        attachSex(value){
            if(value==0){
                return '女'
            }else if(value==1){
                return '男'
            }
            return ''
        },
        // 处理生日显示
        attachBirth(val) {
            if (!val) return '暂无';
            if (typeof val !== 'string') {
                console.warn('生日格式不正确:', val);
                return '暂无';
            }
            return val.substr(0, 10);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/singer-album.scss';
</style>
