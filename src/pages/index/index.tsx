import React, { useState } from "react";
import { Icon } from '@nutui/nutui-react-taro';
import { Image, View, Text } from "@tarojs/components";
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
      <View className="wrap-tabs">
        <View className="wrap-tabs-item">
          <View className="wrap-tabs-item-text wrap-tabs-item-hover">推荐音乐</View>
        </View>
        <View className="wrap-tabs-item">
          <View className="wrap-tabs-item-text">热歌榜</View>
        </View>
        <View className="wrap-tabs-item">
          <View className="wrap-tabs-item-text">搜索</View>
        </View>
      </View>
      <View className="wrap-content">
        <View className="wrap-content-top">
          <View className="wrap-content-top-title">
            <View className="wctt-placeholder"></View>
            <View className="wctt-text">
              编辑推荐
            </View>
          </View>
        </View>
        <View className="wrap-content-body">
          <View className="wrap-content-body-item">
            <View className="wcbi-body">
              <Image className="wcbi-body-img" src="http://p1.music.126.net/hLv4YJOiLTE16LlRpdxZgQ==/109951164152314267.jpg?imageView=1&type=webp&thumbnail=246x0" />
              <View className="wcbi-body-text">
                <Icon name="service" size={12}></Icon>
                <Text className="wcbi-body-text-num">
                  4032万
                </Text>
              </View>
              <View className="wcbi-body-bottom">
                用音乐保持你每天的嘴角上扬
              </View>
            </View>
          </View>
        </View>
        <View className="wrap-content-top">
          <View className="wrap-content-top-title">
            <View className="wctt-placeholder"></View>
            <View className="wctt-text">
              最新音乐
            </View>
          </View>
        </View>
        <View className="wrap-content-music">
          <View className="wrap-content-music-item">
            <View className="wcmi-left">
              <View className="wcmi-left-name">今生今世</View>
              <View className="wcmi-left-singer">
                炎明熹-今生今世
              </View>
            </View>
            <View className="wcmi-right">
              <Icon name="play-start" size={28} color={'RGBA(102, 102, 102, 1)'}></Icon>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default App;