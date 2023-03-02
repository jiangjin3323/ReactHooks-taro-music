import http from "../utils/request";


/************ 首页 start ***************/

//推荐歌单
export const getRecommendedPlaylistApi = (data:any = {}) => http.get(`/personalized`, { data });
//推荐音乐
export const getRecommendedMusicListApi = (data:any = {}) => http.get(`/personalized/newsong`, { data });
//歌单详情
export const getRecommendedPlaylistDetailApi = (data:any = {}) => http.get(`/playlist/detail`, { data });

/************ 首页 end ***************/
