import React, { useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './tabs.scss';
const Tabs: React.FC<{ selcetIndex: number }> = ({ selcetIndex = 0 }) => {
    let [tabsList, setTabsList]: [tabsList: string[], setTabsList: any] = useState(['推荐音乐', '热歌榜', '搜索']);
    const toPage = (index: number) => {
        if (selcetIndex === index) return
        switch (index) {
            case 0:
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
                break;
            case 1:
                Taro.navigateTo({
                    url: '/pages/hotSong/index'
                })
                break;
            case 2:
                Taro.navigateTo({
                    url: '/pages/search/index'
                })
                break;
            default:
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
        }
    }
    return (
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
    )
}
export default Tabs;