import React,{useState} from "react";
import Taro from "@tarojs/taro";
import { useLoad } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { getMusicUrlApi,getMusicDetailApi } from "../../api/api";
import { NavBar, Icon } from '@nutui/nutui-react-taro';
import './index.scss';
import leverImg from '../../static/index/song_lever.png';
import randomImg from '../../static/index/icon_song_random.png';
import playImg from '../../static/index/icon_song_play.png';
import pauseImg from '../../static/index/icon_song_pause.png';
import leftImg from '../../static/index/icon_song_left.png';
import rightImg from '../../static/index/icon_song_right.png';
const Detail: React.FC = () => {
    useLoad((e: any) => {
        getMusicUrlFunc(e.id);
        getMusicDetailFunc(e.id);
    })
    let [songImg,setSongImg]:[songImg:string,setSongImg:any] = useState('');
    let [ifPlay,setIfPlay]:[ifPlay:boolean,setIfPlay:any] = useState(true);
    //背景音频
    const backgroundAudioManager = Taro.getBackgroundAudioManager();
    const getMusicUrlFunc = async (id: string) => {
        const [err, res]:any = await getMusicUrlApi({
            id,
            level: 'hires',
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        backgroundAudioManager.src = res.data.data[0].url;
    };
    const getMusicDetailFunc = async (id: string) => {
        const [err, res]:any = await getMusicDetailApi({
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
            backgroundAudioManager.pause();
            setIfPlay(false);
        }else {
            backgroundAudioManager.play();
            setIfPlay(true);
        }
    };
    return (
        <View className="songIndex">
            <NavBar className="songIndex-nav" leftShow={false}></NavBar>
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
                    <Image src={randomImg} className="songIndex-bottom-left-img"></Image>
                </View>
                <View className="songIndex-bottom-middle">
                    <Image src={leftImg} className="songIndex-bottom-middle-img"></Image>
                    <Image src={ ifPlay ? (playImg) : (pauseImg)} className="songIndex-bottom-middle-img" onClick={pauseAndPlay}></Image>
                    <Image src={rightImg} className="songIndex-bottom-middle-img"></Image>
                </View>
                <View className="songIndex-bottom-right">
                    <Icon name="heart-fill" color="rgba(255, 30, 0, 1)" size={40} className="nut-icon-am-breathe  nut-icon-am-infinite" />
                </View>
            </View>
        </View>
    )
}
export default Detail;