import React from "react";
import { View } from "@tarojs/components";
import TopHeader from "../../components/header/header";
const HotSong:React.FC = () =>{
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader selcetIndex={1}></TopHeader>
        </View>
    )
}
export default HotSong;