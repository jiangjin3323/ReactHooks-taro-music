import React, { useState } from "react";
import { Icon } from '@nutui/nutui-react-taro';
import { Image, View, Text} from "@tarojs/components";
import './index.scss';
const App: React.FC = () => {
  return (
    <View className="wrap">
      <View className="wrap-header">
        <View className="wrap-header-box">
          <Icon name="github" size={25} color={'#FFFFFF'}></Icon>
          <Text className="wrap-header-text">网易云音乐</Text>
        </View>
      </View>
      <View className="wrap-content">
        <View className="wrap-content-item">
          <View className="wrap-content-item-text wrap-content-item-hover">推荐音乐</View>
        </View>
        <View className="wrap-content-item">
          <View className="wrap-content-item-text">热歌榜</View>
        </View>
        <View className="wrap-content-item">
          <View className="wrap-content-item-text">搜索</View>
        </View>
      </View>
    </View>
  );
};
export default App;