import React, { useState } from "react";
import { useLoad } from '@tarojs/taro';
import { View } from "@tarojs/components";
import dayjs from "dayjs";
import TopHeader from "../../components/header/header";
import Music from "../../components/music/music";
import { getHotPlaylistDetailApi } from '../../api/api'
import './index.scss';
const HotSong: React.FC = () => {
    useLoad(() => {
        getMusicListFunc()
    })
    const [musicList, setMusicList]:any = useState([]);
    const [time] = useState(dayjs().format('MM月DD日'))
    const getMusicListFunc = async () => {
        const [err, res]: any = await getHotPlaylistDetailApi({
            limit: 20
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        const list: any = res.data.playlists.map((item) => {
            const artists: [{ name: string }] = item.tags.map((item) => {
                return {
                    name: item
                }
            });
            return {
                name: item.name,
                id: item.id,
                song: {
                    artists
                }
            }
        })
        setMusicList(list);
    };
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader selcetIndex={1}></TopHeader>
            <View className="wrap-top">
                <View className="wrap-top-body">
                    <View className="wrap-top-body-bgImg"></View>
                    <View className="wrap-top-body-time">{'更新日期：' + time }</View>
                </View>
            </View>
            <Music dataList={musicList} isNum={true}></Music>
        </View>
    )
}
export default HotSong;