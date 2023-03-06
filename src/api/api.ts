import http from "../utils/request";


/************ 首页 start ***************/

//推荐歌单
export const getRecommendedPlaylistApi = (data:any = {}) => http.get(`/personalized`, { data });
//推荐音乐
export const getRecommendedMusicListApi = (data:any = {}) => http.get(`/personalized/newsong`, { data });
//歌单详情
export const getRecommendedPlaylistDetailApi = (data:any = {}) => http.get(`/playlist/detail`, { data });
//获取热门歌单
export const getHotPlaylistDetailApi = (data:any = {}) => http.get(`/top/playlist`, { data });
//获取热门搜索
export const getHotSearchListApi = (data:any = {}) => http.get(`/search/hot`, { data });
//搜索建议
export const getSearchSuggestListApi = (data:any = {}) => http.get(`/search/suggest`, { data });
//关键词搜索
export const getKeywordSearchListApi = (data:any = {}) => http.get(`/search`, { data });
//关键词多重搜索
export const getKeywordSearchSuggestListApi = (data:any = {}) => http.get(`/search/suggest`, { data });
//获取音乐url
export const getMusicUrlApi = (data:any = {}) => http.get(`/song/url/v1`, { data });
//获取音乐详情
export const getMusicDetailApi = (data:any = {}) => http.get(`/song/detail`, { data });
/************ 首页 end ***************/

