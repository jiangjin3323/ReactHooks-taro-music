import React, { useState } from "react";
import { View } from "@tarojs/components";
import './tabs.scss';
const Tabs: React.FC<{ selcetIndex: number }> = ({ selcetIndex = 0 }) => {
    let [tabsList, setTabsList]: [tabsList: string[], setTabsList: any] = useState(['推荐音乐', '热歌榜', '搜索']);

    return (
        <View className="wrap-tabs">
            {
                tabsList.map((item: string, index: number) => {
                    return (
                        <View className="wrap-tabs-item" key={index}>
                            <View className={'wrap-tabs-item-text ' + (selcetIndex === index ? 'wrap-tabs-item-hover' : '')}>{item}</View>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default Tabs;