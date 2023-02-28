import http from "../utils/request";


/************ 社区 start ***************/

//首页bannar
export const getRecommendedPlaylistApi = (data:any = {}) => http.get(`/personalized`, { data });


/************ 社区 end ***************/

