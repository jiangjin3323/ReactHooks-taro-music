import React, { useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Icon } from '@nutui/nutui-react-taro';
import Music from "../../components/music/music";
import { getRecommendedPlaylistDetailApi } from '../../api/api';
// import '../../common/music/music.scss';
import './list.scss';
import '../index/index.scss';
type detailType = {
    name: string, playCount: number, coverImgUrl: string, nickName: string, avatarUrl: string,
}
const SongList: React.FC = () => {
    //state
    let [musicList, setMusicList]: any = useState([]);
    let [detail, setDetail]: [detail: detailType, setDetail: any] = useState({
        name: '',
        playCount: 0,
        coverImgUrl: '',
        nickName: '',
        avatarUrl: '',
    });
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
        const data: detailType = {
            name: res.data.playlist.name,
            playCount: res.data.playlist.playCount,
            coverImgUrl: res.data.playlist.coverImgUrl,
            nickName: res.data.playlist.creator.nickname,
            avatarUrl: res.data.playlist.creator.avatarUrl,
        };
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
                        <Image className="wtrn-img" src={detail.avatarUrl}></Image>
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