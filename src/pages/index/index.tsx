import React from "react";
import { Image, View } from "@tarojs/components";
import './index.scss';
const App: React.FC = () => {
  return (
    <View className="wrap">
      <View className="wrap-header">
        <View className="wrap-header-item">
          <Image
            className="wrap-header-item-img"
            src='https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png' />
          <View className="wrap-header-item-text">第一</View>
        </View>
      </View>
    </View>
  );
};
export default App;