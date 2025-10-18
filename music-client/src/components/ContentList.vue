<template>
    <div class="content-list">
        <ul class="section-content">
            <li class="content-item" v-for="(item,index) in contentList" :key="index">
                <div class="kuo" @click="goAlbum(item)">
                    <img class="item-img" :src="attachImageUrl(item.pic)">
                    <div class="mask">
                        <svg class="icon">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                    </div>
                </div> 
                <p class="item-name">{{item.name||item.title}}</p>               
            </li>
        </ul>
    </div>
</template>
<script>
import {mixin} from '../mixins';
export default {
    name: 'content-list',
    mixins: [mixin],
    props: {
        contentList: {
            type: Array,
            required: true
        },
        type: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goAlbum(item){
            console.log('点击的项目信息:', item);
            // 确保 item 包含必要的字段
            if (!item || !item.id) {
                console.error('项目信息不完整:', item);
                return;
            }
            // 存储到 Vuex 和 sessionStorage
            this.$store.commit("setTempList", item);
            // 根据类型跳转到不同页面
            if(this.type){                   //歌手
                console.log('跳转到歌手详情页:', item.id);
                this.$router.push({path:`/singer-album/${item.id}`});
            }else{                      //歌单
                console.log('跳转到歌单详情页:', item.id);
                this.$router.push({path:`/song-list-album/${item.id}`});
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/content-list.scss';
</style>
