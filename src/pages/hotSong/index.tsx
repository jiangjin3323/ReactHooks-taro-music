import React from "react";
import { View } from "@tarojs/components";
import TopHeader from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
const HotSong:React.FC = () =>{
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader></TopHeader>
            <Tabs selcetIndex={1}></Tabs>
        </View>
    )
}
export default HotSong;