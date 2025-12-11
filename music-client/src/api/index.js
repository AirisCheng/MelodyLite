import Axios from "axios";
import {get,post} from "./http";

//============歌手相关================
//查询歌手
export const getAllSinger =() => get(`singer/allSinger`);
//根据性别查询歌手
export const getSingerOfSex = (sex) => get(`singer/singerOfSex?sex=${sex}`);

//============歌曲相关================
//根据歌手id查询歌曲
export const songOfSingerId =(id) => get(`song/singer/detail?singerId=${id}`);
//根据歌曲id查询歌曲对象
export const songOfSongId =(id) => get(`song/detail?songId=${id}`);
//根据歌手名字模糊查询歌曲
export const likeSongOfName =(keywords) => get(`song/likeSongOfName?songName=${keywords}`);
//根据歌词模糊查询歌曲
export const likeSongOfLyric = (keywords) => get(`song/likeSongOfLyric?lyric=${keywords}`);

//============歌单相关================
//查询歌单
export const getAllSongList =() => get(`songList/allSongList`);
//返回标题包含文字的歌单列表
export const getSongListOfLikeTitle = (keywords) => get(`songList/likeTitle?title=${keywords}`);
//根据风格模糊查询歌单列表
export const getSongListOfLikeStyle = (style) => get(`songList/likeStyle?style=${style}`);
// 获取指定 ID 的歌单详情
// export const getSongListById = (id) => get(`/songList/detail?id=${id}`);
export const getSongListById = (id) => get(`songList/selectByPrimaryKey?id=${id}`);
//============歌单的歌曲相关============
//根据歌单id查询歌曲列表
export const listSongDetail = (songListId) => get(`listSong/detail?songListId=${songListId}`);

//============用户相关================
//查询用户
export const getAllConsumer =() => get(`consumer/allConsumer`);
//添加用户
export const setConsumer = (params) => post(`consumer/add`,params);
//删除用户
export const delConsumer = (id) => get(`consumer/delete?id=${id}`);
//修改用户
export const updateConsumer = (params) => post(`consumer/update`,params);
//验证保密问题答案
export const verifySecurityAnswer = (params) => post(`consumer/verifySecurityAnswer`,params);
//重置密码
export const resetPassword = (params) => post(`consumer/resetPassword`,params);
//注册
export const SignUp =(params) => post(`/consumer/add`,params);
//登录
export const loginIn =(params) => post(`/consumer/login`,params);
//根据用户id查询该用户的详细信息
export const getUserOfId =(id) => get(`/consumer/selectByPrimaryKey?id=${id}`);
//更新用户信息
export const updateUserMsg =(params) => post(`/consumer/update`,params);

//下载音乐
export const download = (url)  => Axios({
    method: 'get',
    url: url,
    responseType: 'blob'
});

//===========评价======================
//提交评分
export const setRank =(params) => post(`/rank/add`,params);
//获取指定歌单的平均分
export const getRankOfSongListId = (songListId) => get(`/rank?songListId=${songListId}`);

//===========评论======================
//提交评论
export const setComment =(params) => post(`/comment/add`,params);
//点赞
export const setLike =(params) => post(`/comment/like`,params);
//返回当前歌单或歌曲的评论列表
// export const getAllComment = (type,id) => {
//     if(type == 0){              //歌曲
//         return get(`/comment/commentOfSongId?songId=${id}`);
//     }else{                      //歌单
//         return get(`/comment/commentOfSongListId?songListId=${id}`);
//     }
// }
export const getAllComment = (id) => get(`/comment/commentOfSongListId?songListId=${id}`);

//===============收藏===================
//新增收藏
export const setCollect =(params) => post(`/collect/add`,params);
//指定用户的收藏列表
export const getCollectOfUserId = (userId) => get(`/collect/collectOfUserId?userId=${userId}`);
//根据用户id和歌曲id删除收藏  -- 新增
export const deleteCollect = (userId, songId) => get(`/collect/delete?userId=${userId}&songId=${songId}`);
