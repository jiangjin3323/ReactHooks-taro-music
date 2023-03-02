import React, { useState } from "react";
import { useLoad } from '@tarojs/taro'
import { Icon } from '@nutui/nutui-react-taro';
import { Image, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getRecommendedPlaylistApi, getRecommendedMusicListApi } from '../../api/api'
import Music from "../../components/music/music";
import Tabs from "../../components/tabs/tabs";
import TopHeader from '../../components/header/header';
import './index.scss';
const App: React.FC = () => {

  type recommendedPlaylistType = {
    name: string,
    picUrl: string,
    playCount: number,
    id: number,
  }
  //state
  let [recommendedPlaylist, setRecommendedPlaylist]: [recommendedPlaylist: recommendedPlaylistType[], setRecommendedPlaylist: any] = useState([
    {
      name: '',
      picUrl: '',
      playCount: 0,
      id: 0,
    }
  ])

  let [recommendedMusicList, setRecommendedMusicList] = useState<any[]>([]);

  useLoad(() => {
    console.log('onLoad')
    getRecommendedPlaylistFunc();
    getRecommendedMusicFunc();
  })
  const getRecommendedPlaylistFunc = async () => {
    const [err, res] = await getRecommendedPlaylistApi({
      limit: 6
    });
    if (err !== null) {
      console.log(err.message);
      return;
    }
    setRecommendedPlaylist(res.data.result);
  }
  const getRecommendedMusicFunc = async () => {
    const [err, res] = await getRecommendedMusicListApi({
      limit: 10
    });
    if (err !== null) {
      console.log(err.message);
      return;
    }
    setRecommendedMusicList(res.data.result);
  }
  const toList = (id:number)=>{
    Taro.navigateTo({
      url:'/pages/song/list?id=' + id,
    })
  }
  return (
    <View className="wrap">
      {/* 自定义头部组件 */}
      <TopHeader></TopHeader>

      <Tabs selcetIndex={0}></Tabs>
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
          {
            recommendedPlaylist.map((item) => {
              return (
                <View className="wrap-content-body-item" key={item.id} onClick={()=>toList(item.id)}>
                  <View className="wcbi-body">
                    <Image className="wcbi-body-img" src={item.picUrl} />
                    <View className="wcbi-body-text">
                      <Icon name="service" size={12}></Icon>
                      <Text className="wcbi-body-text-num">
                        {parseInt(String(item.playCount / 10000))}万
                      </Text>
                    </View>
                    <View className="wcbi-body-bottom">
                      {item.name}
                    </View>
                  </View>
                </View>
              )
            })
          }
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
          <Music dataList={recommendedMusicList}></Music>
        </View>
      </View>
    </View>
  );
};
export default App;