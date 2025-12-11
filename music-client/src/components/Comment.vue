<template>
  <div>
    <div class="comment">
      <h2>评论</h2>
      <div class="comment-msg">
        <div class="comment-img">
          <img :src="attachImageUrl(avator)">
        </div>
        <el-input class="comment-input" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </div>
      <el-button type="primary" class="sub-btn" @click="postComment">评论</el-button>
    </div>
    <p>精彩评论：共{{commentList.length}}条评论</p>
    <ul class="popular" v-for="(item,index) in commentList" :key="index">
      <li>
        <div class="popular-img">
          <img :src="attachImageUrl((userMap[item.userId] && userMap[item.userId].avator) || '')">
        </div>
        <div class="popular-msg">
          <ul>
            <li class="name">{{ (userMap[item.userId] && userMap[item.userId].username) || '未知用户' }}</li>
            <li class="time">{{ formatDate(item.createTime) }}</li>
            <li class="content">{{ item.content }}</li>
          </ul>
        </div>
        <div class="up" ref="up" @click="postUp(item.id,item.up,index)">
          <svg class="icon">
            <use xlink:href="#icon-zan"></use>
          </svg>
          {{ item.up }}
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import {mixin} from '../mixins';
import {mapGetters} from 'vuex';
import {setComment,setLike,getAllComment,getUserOfId} from '../api/index';

export default {
    name: 'comment',
    mixins: [mixin],
    props: [
        'playId',       //歌曲或歌单id
        'type'          //0歌曲、1歌单
    ],
    computed:{
        ...mapGetters([
            'id',               //歌曲或歌单id
            'loginIn',          //用户是否已登录
            'userId',           //当前登录用户id
            'avator',           //当前登录用户头像
        ])
    },
    data(){
      return {
        textarea: '',
        commentList: [],
        userMap: {}  // 用 userId 映射头像和名字
      }
    },
    mounted(){
        this.getComment();
    },
    methods: {
      // 提交评论
      postComment() {
        if (this.loginIn) {
          let params = new URLSearchParams();
          params.append('songListId', this.playId);
          params.append('userId', this.userId);
          params.append('content', this.textarea);

          setComment(params)
            .then(res => {
              if (res.code == 1) {
                this.notify(res.msg, 'success');
                this.textarea = '';
                this.getComment();
              } else {
                this.notify(res.msg, 'error');
              }
            })
            .catch(err => {
              this.notify('评论失败', 'error');
            })
        } else {
          this.rank = null;
          this.notify('请先登录', 'warning');
        }
      },
      //评论列表
      getComment(){
        getAllComment(this.playId)
          .then(res => {
            this.commentList = res;
            for(let item of res){
              this.getUsers(item.userId);
            }
          })
          .catch(err =>{
            this.notify('评论加载失败','error');
          })
      },
        //获取用户的头像和昵称
        getUsers(id){
            getUserOfId(id)
                .then(res => {
                    this.$set(this.userMap, id, {
                        avator: res.avator,
                        username: res.username
                    });
                })
                .catch(err => {
                    this.notify('出错了','error');
                })
        },
        //给某一个评论点赞
        postUp(id,up,index){
            if(this.loginIn){
                let params = new URLSearchParams();

                params.append('id',id);
                params.append('up',up+1);
                setLike(params)
                    .then(res => {
                        if(res.code == 1){
                            this.$refs.up[index].children[0].style.color = '#2796cd';
                            this.getComment();
                        }else{
                            this.notify('点赞失败','error');
                        }
                    })
                    .catch(err =>{
                        this.notify('点赞失败','error');
                    })
            }else{
                this.rank = null;
                 this.notify('请先登录','warning');
            }
        },
        formatDate(timestamp) {
            const date = new Date(Number(timestamp));
            const Y = date.getFullYear();
            const M = (date.getMonth() + 1).toString().padStart(2, '0');
            const D = date.getDate().toString().padStart(2, '0');
            const h = date.getHours().toString().padStart(2, '0');
            const m = date.getMinutes().toString().padStart(2, '0');
            return `${Y}-${M}-${D} ${h}:${m}`;
      }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/comment.scss';
</style>
