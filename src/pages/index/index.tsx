import React, { useState } from "react";
import { Image, View, Text, Swiper, SwiperItem } from "@tarojs/components";
import './index.scss';
import startImg from '../../static/index/start@2x.png';
import text1Img from '../../static/index/text.png';
import text2Img from '../../static/index/text2@2x.png';
import box2Img from '../../static/index/box@2x.png';
import leftImg from '../../static/index/leftarr@2x.png';
import rightImg from '../../static/index/rightarr@2x.png';
import openImg from '../../static/index/openbtn@2x.png';
const App: React.FC = () => {

  let [blindList, setBlindList] = useState([{
    boxBgImg: "https://cdn.mdj.meilinxian.cn//blind-box/99_des_bg.webp",
    boxDesc: [],
    boxDetailImg: ['https://cdn.mdj.meilinxian.cn/blind-box/99/99_new_des_1.png', 'https://cdn.mdj.meilinxian.cn/blind-box/99/99_new_des_2.png', 'https://cdn.mdj.meilinxian.cn/blind-box/99/99_new_des_3.png'],
    boxImg: "https://cdn.mdj.meilinxian.cn/blind-box/99_cover.webp",
    boxName: "9.9盲盒",
    boxPrice: "0.01",
    buyPriceImg: "https://cdn.mdj.meilinxian.cn//blind-box/99_buy.webp",
    guid: "11ed84b96c14431e87460242c0a85850",
    isHave: false,
    packScene: "box_9.9",
    productList: ['中式推拿', '飘飘欲仙', '清泉流水'],
  }]);

  const handleOpenPopup = (value:string) => {
      console.log(value);
  };
  const handleOrderRecord = () => {

  };
  const handleOrderMake = () => {

  };
  const handleToDetail = () => {

  };
  const handleLeft = () => {

  };
  const handleRight = () => {

  };
  const handlePlaceOrder = () => {

  };
  return (
    <View className="content">
      <View className="index-container">
        <View className="right-btn-box">
          <View className="rule-btn sub-btn" onClick={()=> handleOpenPopup('测试')}>活动规则</View>
          <View className="record-btn sub-btn" onClick={handleOrderRecord}>购买记录</View>
          <View className="make-btn sub-btn" onClick={handleOrderMake}>关注预约</View>
        </View >
        <View className="head-box">
          <Image src={startImg} className="start-img" />
          <Image src={text1Img} className="text1-img" />
          <Image src={text2Img} className="text2-img" />
        </View>
        <View className="game-box">
          <Swiper
            className="Swiper-box"
            circular
            autoplay>
            {
              blindList.map((item) => {
                return (
                  <SwiperItem className="box-bg-item" key={item.guid}>
                    <Image className="price-img" src={item.boxImg} />
                    <View className="tag-box">
                      {
                        item.productList.map(item => {
                          return (
                            <View className="box-tag" key={item}>
                              {item}
                            </View>
                          )
                        })
                      }
                    </View>
                    <Image className="box-img" src={box2Img} onClick={handleToDetail} />
                    <View className="box-shadow"></View>
                    <View className="finger-bg" onClick={handleToDetail}></View>
                  </SwiperItem>
                )
              })
            }

          </Swiper>

          <View className="left-arr" onClick={handleLeft}>
            <Image className="one-img" src={leftImg} />
            <Image className="two-img" src={leftImg} />
            <Text>左滑</Text>
          </View>

          <View className="right-arr" onClick={handleRight}>
            <Image className="two-img" src={rightImg} />
            <Image className="one-img" src={rightImg} />
            <Text>右滑</Text>
          </View>
          <View className="order-btn" onClick={handlePlaceOrder}>
            <Image src={openImg} />
          </View>
        </View>
        <View className="banner-box">
          <Image src={openImg} />
          {/* <image v-for="(item, index) in banners" :src="item.imgs" @click="handleBannerLink(item)" :key="index"></image> */}
        </View>
      </View >
    </View >
  );
};
export default App;