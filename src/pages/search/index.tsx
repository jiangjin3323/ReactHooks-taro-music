import React,{useState} from "react";
import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import TopHeader from "../../components/header/header";
import { SearchBar } from '@nutui/nutui-react-taro';
import { getHotSearchListApi } from '../../api/api';
import './index.scss';
const Search:React.FC = () =>{
    useLoad(()=>{
        getHotSearchListFunc();
    })
    let [hotSearchList,setHotSearchList] = useState([]);
    const getHotSearchListFunc = async ()=>{
        const [err,res] = await getHotSearchListApi();
        if (err !== null) {
            console.log(err.message);
            return;
        }
        setHotSearchList(res.data.result.hots);
    }
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader selcetIndex={2}></TopHeader>
            <SearchBar placeholder="搜索歌手，歌曲，专辑" />
            <View className="wrap-recommend">
                <View className="wrap-recommend-title">
                    热门搜索
                </View>
                <View className="wrap-recommend-body">
                    {
                        hotSearchList.map((item:any,index:number) => {
                            return (
                                <View className="wrap-recommend-body-item" key={index}>
                                    {item.first}
                                </View>
                            )
                        })
                    }
                    
                </View>
            </View>
        </View>
    )
}
export default Search;