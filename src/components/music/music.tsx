import React from "react";
import { Icon } from '@nutui/nutui-react-taro';
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './music.scss';
const Music: React.FC<{dataList:any,isNum?:boolean}> = ({ dataList, isNum = false }) => {
    const toSongIndex = (id:number) =>{
        Taro.navigateTo({
            url:'/pages/song/index?id='+id
        })
    }
    return (
        <View className="wrap">
            <View className="wrap-content-music">
                {
                    dataList.map((item: any, index: number) => {
                        return (
                            <View className="wrap-content-music-body" hoverClass="wrap-content-music-body-hover" key={item.id} onClick={()=>toSongIndex(item.id)}>
                                {isNum && <View className="wcmb-num">{index + 1}</View>}
                                <View className="wrap-content-music-item">
                                    <View className="wcmi-left">
                                        <View className="wcmi-left-name">{item.name}</View>
                                        <View className="wcmi-left-singer">
                                            <Text className="wcmi-left-singer-tag">
                                                SQ
                                            </Text>
                                            {item.song.artists.length >= 2 && item.song.artists ? (item.song.artists[0].name + ' / ' + item.song.artists[1].name) : (item.song.artists[0].name)}
                                        </View>
                                    </View>
                                    <View className="wcmi-right">
                                        <Icon name="play-start" size={28} color={'RGBA(102, 102, 102, 1)'}></Icon>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default Music;