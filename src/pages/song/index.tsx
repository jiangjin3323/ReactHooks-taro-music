import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { useLoad, useUnload } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { getMusicUrlApi, getMusicDetailApi } from "../../api/api";
import { NavBar, Icon,Toast } from '@nutui/nutui-react-taro';
import './index.scss';
import leverImg from '../../static/index/song_lever.png';
import randomImg from '../../static/index/icon_song_random.png';
import playImg from '../../static/index/icon_song_play.png';
import pauseImg from '../../static/index/icon_song_pause.png';
import leftImg from '../../static/index/icon_song_left.png';
import rightImg from '../../static/index/icon_song_right.png';
//背景音频
const backgroundAudioManager: any = Taro.getBackgroundAudioManager();
const Detail: React.FC = () => {
    useLoad((e: any) => {
        getMusicUrlFunc(e.id);
        getMusicDetailFunc(e.id);
    })
    useUnload(() => {
        backgroundAudioManager.stop();
    })
    let [songImg, setSongImg]: [songImg: string, setSongImg: any] = useState('');
    let [ifPlay, setIfPlay]: [ifPlay: boolean, setIfPlay: any] = useState(false);
    let [ifToast, setIfToast]: [ifToast: boolean, setIfToast: any] = useState(false);
    const getMusicUrlFunc = async (id: string) => {
        const [err, res]: any = await getMusicUrlApi({
            id,
            level: 'hires',
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        backgroundAudioManager.src = res.data.data[0].url;
        setIfPlay(true);
    };
    const getMusicDetailFunc = async (id: string) => {
        const [err, res]: any = await getMusicDetailApi({
            ids: id,
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        setSongImg(res.data.songs[0].al.picUrl);
    };
    //暂停或播放
    const pauseAndPlay = () => {
        if (ifPlay) {
            console.log('暂停');
            setIfPlay(false);
            backgroundAudioManager.pause();
        } else {
            console.log('播放');
            setIfPlay(true);
            backgroundAudioManager.play();
        }
    };
    //显示警告信息
    const showToast = () => {
        setIfToast(true);
    };
    return (
        <View className="songIndex">
            <NavBar className="songIndex-nav" leftShow={false}></NavBar>
            <Toast visible={ifToast} msg={'暂不支持'} type={'warn'} onClose={()=>{setIfToast(false)}}></Toast>
            <View className="songIndex-top">
                <Image src={leverImg} className="songIndex-top-img"></Image>
            </View>
            <View className="songIndex-main">
                <View className="songIndex-main-content">
                    <View className={ifPlay ? 'songIndex-main-content-bg-hover' : 'songIndex-main-content-bg'}>
                        <Image src={songImg} className="songIndex-main-content-bg-img"></Image>
                    </View>
                </View>
            </View>
            <View className="songIndex-bottom">
                <View className="songIndex-bottom-left">
                    <Image src={randomImg} className="songIndex-bottom-left-img" onClick={showToast}></Image>
                </View>
                <View className="songIndex-bottom-middle">
                    <Image src={leftImg} className="songIndex-bottom-middle-img" onClick={showToast}></Image>
                    <Image src={ifPlay ? (playImg) : (pauseImg)} className="songIndex-bottom-middle-img" onClick={pauseAndPlay}></Image>
                    <Image src={rightImg} className="songIndex-bottom-middle-img" onClick={showToast}></Image>
                </View>
                <View className="songIndex-bottom-right">
                    <Icon onClick={showToast} name="heart-fill" color="rgba(255, 30, 0, 1)" size={40} className="nut-icon-am-breathe  nut-icon-am-infinite" />
                </View>
            </View>
        </View>
    )
}
export default Detail;