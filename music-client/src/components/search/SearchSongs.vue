<template>
  <div class="search-songs">
    <album-content :songList="listOfSongs"></album-content>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import {mixin} from "../../mixins";
import AlbumContent from "../AlbumContent";

export default {
  name: 'search-songs',
  components:{
    AlbumContent
  },
  mixins: [mixin],
  computed:{
    ...mapGetters([
      'listOfSongs'
    ])
  },
  watch: {
    '$route.query.keywords': {
      handler() {
        this.getSong();
      },
      immediate: true
    }
  },
  mounted() {
    // 移除这里的 getSong() 调用，因为 watch 中已经设置了 immediate: true
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/search-songs.scss';
</style>
