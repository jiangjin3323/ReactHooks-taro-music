import React, { useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Icon } from '@nutui/nutui-react-taro';
import Music from "../../common/music/music";
import { getRecommendedPlaylistDetailApi } from '../../api/api';
import './list.scss';
import '../index/index.scss';
const SongList: React.FC = () => {
    //state
    let [musicList, setMusicList]:any = useState([]);
    let [detail,setDetail]:any = useState(null);
    useLoad((e: any) => {
        console.log(e)
        getRecommendedPlaylistDetailFunc(e?.id)
    })
    const getRecommendedPlaylistDetailFunc = async (id: number) => {
        const [err, res]: any = await getRecommendedPlaylistDetailApi({ id });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        const list: any = res.data.playlist.tracks.map((item) => {
            const artists: [{ name: string }] = item.ar.map((item1) => {
                return {
                    name: item1.name
                }
            })
            return {
                name: item.name,
                id: item.id,
                song: {
                    artists
                }
            }
        })
        const data:{name:string,playCount:number,coverImgUrl:string,nickName:string} = {
            name:res.data.playlist.name,
            playCount:res.data.playlist.playCount,
            coverImgUrl:res.data.playlist.coverImgUrl,
            nickName:res.data.playlist.creator.nickname,
        };
        console.log(data);
        setDetail(data);
        setMusicList(list);
    }
    return (
        <View className="wrap">
            <View className="wrap-top">
                <View className="wrap-top-left">
                    <Image className="wrap-top-left-img" src={detail.coverImgUrl}></Image>
                    <View className="wrap-top-left-tag">
                        <Icon name="service" color="#FFFFFF" size={12}></Icon>
                        <Text className="wtlt-num">
                        {parseInt(String(detail.playCount / 10000))}万
                        </Text>
                    </View>
                </View>
                <View className="wrap-top-right">
                    <View className="wrap-top-right-title">
                        {detail.name}
                    </View>
                    <View className="wrap-top-right-name">
                        <Image className="wtrn-img" src="https://p1.music.126.net/JKiCDG-xfj203gcui2z6aA==/109951163139073602.jpg?imageView=1&type=webp&thumbnail=252x0"></Image>
                        {detail.nickName}
                    </View>
                </View>
            </View>
            <View className="wrap-title">
                歌曲列表
            </View>
            <Music dataList={musicList} isNum={true}></Music>
        </View>
    )
}
export default SongList;