import React, { useEffect, useState } from 'react';
import { CategoryFeeds } from '../../constants/DummyData';
import { FeedsStateType, FeedType } from './types';
import FeedsContext  from '.';
import * as rssParser from 'react-native-rss-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/Constants';
import { Alert } from 'react-native';

const initialState = {
  categoryFeeds: [],
  newsFeedLoading: false,
  newsFeedError: '',
  newsFeedData: {} as FeedType,
  favoritesCategoryFeeds: [],
};

export function FeedsProvider(props: { children: React.ReactNode}) {
  const [state, setState] = useState<FeedsStateType>(initialState);

  const init = async () => {
    const data = await AsyncStorage.getItem(AsyncStorageKeys.FAVORITES_CATEGORY_FEEDS)
    if (!data) return;
    const newData = JSON.parse(data ?? '');
    setState({ ...state, favoritesCategoryFeeds: newData, categoryFeeds: CategoryFeeds  });
  };

  const fetchCategoryFeeds = () => {
    // setState({ ...state, categoryFeeds: CategoryFeeds });
  }

  const fetchNewsFeed = async (url: string) => {
    setState({ ...state, newsFeedLoading: true });
    return await fetch(url)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        setState({ ...state, newsFeedData: rss, newsFeedLoading: false });
      }).catch(error => {
        setState({ ...state, newsFeedError: error, newsFeedLoading: false });
      });
  };

  const onFavoriteCategoryFeeds = (id: number) => {
    const newData = state.favoritesCategoryFeeds?.includes(id) ? state.favoritesCategoryFeeds?.filter(fav => fav !== id) : state.favoritesCategoryFeeds?.concat(id);
    setState({ ...state, favoritesCategoryFeeds: newData });
    const newDataString = JSON.stringify(newData);
    AsyncStorage.setItem(AsyncStorageKeys.FAVORITES_CATEGORY_FEEDS, newDataString);
  }

  return (
    <FeedsContext.Provider
      value={{
        categoryFeeds: state.categoryFeeds,
        newsFeedData: state.newsFeedData,
        newsFeedLoading: state.newsFeedLoading,
        newsFeedError: state.newsFeedError,
        favoritesCategoryFeeds: state.favoritesCategoryFeeds,
        fetchCategoryFeeds,
        fetchNewsFeed,
        onFavoriteCategoryFeeds,
        init,
      }}>
      {props.children}
    </FeedsContext.Provider>
  );
}