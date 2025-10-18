<template>
  <div class="search-song-Lists">
    <content-list :contentList="albumDatas"></content-list>
  </div>
</template>
<script>
import ContentList from '../ContentList';
import {getSongListOfLikeTitle, getSongListOfLikeStyle} from '../../api/index';
import {mixin} from "../../mixins";

export default {
  name: 'search-song-lists',
  mixins: [mixin],
  components:{
    ContentList
  },
  data(){
    return{
      albumDatas: []
    }
  },
  watch: {
    '$route.query.keywords': {
      handler() {
        this.getSearchList();
      },
      immediate: true
    }
  },
  mounted(){
    // 移除这里的 getSearchList() 调用，因为 watch 中已经设置了 immediate: true
  },
  methods:{
    getSearchList(){
      if(!this.$route.query.keywords){
        this.notify('您输入的内容为空','warning');
        this.albumDatas = [];
        return;
      }

      // 同时搜索标题和风格
      Promise.all([
        getSongListOfLikeTitle(this.$route.query.keywords),
        getSongListOfLikeStyle(this.$route.query.keywords)
      ]).then(([titleRes, styleRes]) => {
        const titleResults = titleRes || [];
        const styleResults = styleRes || [];

        // 合并结果，去重
        const mergedResults = [...titleResults];
        styleResults.forEach(styleItem => {
          if (!mergedResults.some(titleItem => titleItem.id === styleItem.id)) {
            mergedResults.push(styleItem);
          }
        });

        this.albumDatas = mergedResults;
        if(mergedResults.length === 0){
          this.notify('暂无符合条件的歌单','warning');
        }
      }).catch(err => {
        console.log(err);
        this.notify('搜索出错','error');
        this.albumDatas = [];
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/search-song-lists.scss';
</style>
