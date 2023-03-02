import React, { useState } from "react";
import { Icon } from '@nutui/nutui-react-taro';
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './header.scss';
const TopHeader: React.FC<{ selcetIndex?: number }> = ({ selcetIndex = 0 }) => {
    let [tabsList]: [tabsList: string[], setTabsList: any] = useState(['推荐音乐', '热歌榜', '搜索']);
    const toPage = (index: number) => {
        if (selcetIndex === index) return
        switch (index) {
            case 0:
                Taro.redirectTo({
                    url: '/pages/index/index'
                })
                break;
            case 1:
                Taro.redirectTo({
                    url: '/pages/hotSong/index'
                })
                break;
            case 2:
                Taro.redirectTo({
                    url: '/pages/search/index'
                })
                break;
            default:
                Taro.redirectTo({
                    url: '/pages/index/index'
                })
        }
    }
    return (
        <>
            <View className="wrap-header">
                <View className="wrap-header-box">
                    <Icon name="github" size={25} color={'#FFFFFF'}></Icon>
                    <Text className="wrap-header-text">网易云音乐</Text>
                </View>
            </View>
            <View className="wrap-tabs">
                {
                    tabsList.map((item: string, index: number) => {
                        return (
                            <View className="wrap-tabs-item" key={index} onClick={() => toPage(index)}>
                                <View className={'wrap-tabs-item-text ' + (selcetIndex === index ? 'wrap-tabs-item-hover' : '')}>{item}</View>
                            </View>
                        )
                    })
                }
            </View>
        </>
    )
}
export default TopHeader;