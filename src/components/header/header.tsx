import React from "react";
import { Icon } from '@nutui/nutui-react-taro';
import { View, Text } from "@tarojs/components";
import './header.scss';
const TopHeader: React.FC = () => {
    return (
        <View className="wrap-header">
            <View className="wrap-header-box">
                <Icon name="github" size={25} color={'#FFFFFF'}></Icon>
                <Text className="wrap-header-text">网易云音乐</Text>
            </View>
        </View>
    )
}
export default TopHeader;