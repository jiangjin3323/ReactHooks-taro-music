import React from "react";
import { View } from "@tarojs/components";
import TopHeader from "../../components/header/header";
import { SearchBar } from '@nutui/nutui-react-taro';
const Search:React.FC = () =>{
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader selcetIndex={2}></TopHeader>
            <SearchBar placeholder="搜索歌手，歌曲，专辑" />
        </View>
    )
}
export default Search;