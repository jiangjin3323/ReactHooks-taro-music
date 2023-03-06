import React from "react";
import Taro from "@tarojs/taro";
import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Button } from '@nutui/nutui-react-taro';
import { getMusicUrlApi } from "../../api/api";
const Detail:React.FC = () =>{
    useLoad((e:any) =>{
        getMusicUrlFunc(e.id);
    })
    const backgroundAudioManager = Taro.getBackgroundAudioManager();
    const getMusicUrlFunc = async (id:string) => {
        const [err, res] = await getMusicUrlApi({
            id,
            level:'hires',
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        backgroundAudioManager.src = res.data.data[0].url;
        console.log(res);
    };
    return (
        <View>
            <Button type="default">歌曲详情</Button>
        </View>
    )
}
export default Detail;