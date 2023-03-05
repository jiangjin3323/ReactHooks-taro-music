import React, { useState } from "react";
import { useLoad } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import TopHeader from "../../components/header/header";
import { SearchBar, Icon } from '@nutui/nutui-react-taro';
import { getHotSearchListApi, getSearchSuggestListApi, getKeywordSearchListApi, getKeywordSearchSuggestListApi } from '../../api/api';
import { debounce } from '../../utils/toolFunc';
import Music from "../../components/music/music";
import './index.scss';
const Search: React.FC = () => {
    useLoad(() => {
        getHotSearchListFunc();
    })
    //state
    //搜索框
    let [searchBarValue, setSearchBarValue]: [searchBarValue: string, setSearchBarValue: any] = useState('');
    //热门搜索列表
    let [hotSearchList, setHotSearchList] = useState([]);
    //搜索建议列表
    let [searchSuggestList, setSearchSuggestList] = useState([]);
    //歌曲列表
    let [musicList, setMusicList] = useState([]);
    //歌手信息
    let [singer, setSinger]: [singer: { name: string, alias: string, img1v1Url: string }, setSinger: any] = useState({
        name: '',
        alias: '',
        img1v1Url: '',
    });

    //函数
    //热门搜索列表函数
    const getHotSearchListFunc = async () => {
        const [err, res]: any = await getHotSearchListApi();
        if (err !== null) {
            console.log(err.message);
            return;
        }
        setHotSearchList(res.data.result.hots);
    };
    //搜索建议函数
    const getSearchSuggestListFunc = async () => {
        const [err, res]: any = await getSearchSuggestListApi({
            keywords: searchBarValue,
            type: 'mobile',
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        setSearchSuggestList(res.data.result.allMatch);
    }
    //关键词检索函数
    const keywordSearchFunc = async () => {
        if (searchBarValue === '') return;
        const [err, res]: any = await getKeywordSearchListApi({
            keywords: searchBarValue
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        if (!(Object.keys(res.data.result).length)) {
            return;
        }
        const list: any = res.data.result.songs.map((item) => {
            return {
                ...item,
                song: {
                    artists: item.artists
                }
            }
        })
        setMusicList(list);
    }
    //关键词多重检索函数
    const getKeywordSearchSuggestListFunc = async () => {
        if (searchBarValue === '') return;
        const [err, res]: any = await getKeywordSearchSuggestListApi({
            keywords: searchBarValue,
        });
        if (err !== null) {
            console.log(err.message);
            return;
        }
        if (res.data.result.artists) {
            setSinger({
                name: res.data.result.artists[0].name,
                alias: (res.data.result.artists[0].alias.length > 0) ? res.data.result.artists[0].alias[0] : '',
                img1v1Url: res.data.result.artists[0].img1v1Url,
            })
        }
        console.log(singer);
    }
    //搜索框change函数
    const searchBarChange = (e: string) => {
        setSearchBarValue(e);
        //防抖处理
        e ? debounce(getSearchSuggestListFunc, 600) : setSearchSuggestList([])
    };
    //搜索框search函数
    const searchBarSearch = (e: string) => {
        setSearchBarValue(e);
        keywordSearchFunc();
    };
    //搜索框清空函数
    const earchBarClear = () => {
        console.log('clear');
        setSinger({
            name: '',
            alias: '',
            img1v1Url: '',
        })
        setSearchSuggestList([])
        setMusicList([])
    };
    //推荐歌曲点击
    const hotSongClick = (e: string) => {
        getKeywordSearchSuggestListFunc();
        searchBarSearch(e);
        setSearchSuggestList([]);
    };
    return (
        <View className="wrap">
            {/* 自定义头部 */}
            <TopHeader selcetIndex={2}></TopHeader>
            <SearchBar value={searchBarValue} placeholder="搜索歌手，歌曲，专辑" onClear={earchBarClear} onSearch={searchBarSearch} onChange={searchBarChange} />
            {
                searchSuggestList.length === 0 && <View className="wrap-recommend">
                    <View className="wrap-recommend-title">
                        热门搜索
                    </View>
                    <View className="wrap-recommend-body">
                        {
                            hotSearchList.map((item: any, index: number) => {
                                return (
                                    <View className="wrap-recommend-body-item" key={index} onClick={() => hotSongClick(item.first)}>
                                        {item.first}
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
            }
            <>
                {
                    searchSuggestList.map((item: any, index: number) => {
                        return (
                            <View className="wrap-suggest" onClick={() => hotSongClick(item.keyword)} key={index}>
                                <View className="wrap-suggest-icon">
                                    <Icon name="search" size={13} color={'RGBA(0,0,0,.3)'}></Icon>
                                </View>
                                <View className="wrap-suggest-text">
                                    {(item.keyword)}
                                </View>
                            </View>
                        )
                    })
                }
            </>

            <View className="wrap-optimal">
                {
                    singer.name && <View className="wrap-recommend-title">
                        最佳匹配
                    </View>
                }

                {
                    singer.name && <View className="wrap-optimal-top">
                        <View className="wrap-optimal-top-left">
                            <Image className="wotl-img" src={singer.img1v1Url}></Image>

                            <View className="wotl-text">
                                歌手: {singer.name} {singer.alias ? ('( ' + singer.alias + ' )') : ''}
                            </View>
                        </View>
                        <View className="wrap-optimal-top-right">
                            <Icon name="right" size={15} color={'rgba(153, 153, 153, 1)'}></Icon>
                        </View>
                    </View>
                }

                {
                    musicList.length > 0 && <Music dataList={musicList}></Music>
                }
            </View>


        </View>

    )
}
export default Search;