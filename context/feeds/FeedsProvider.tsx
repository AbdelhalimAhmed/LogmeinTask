import React, { ReactFragment, useState } from 'react';
import { CategoryFeeds } from '../../constants/DummyData';
import { FeedsStateType, FeedType } from './types';
import FeedsContext  from '.';
import * as rssParser from 'react-native-rss-parser';


const initialState = {
  categoryFeeds: [],
  newsFeedLoading: false,
  newsFeedError: '',
  newsFeedData: {} as FeedType
};

export function FeedsProvider(props: { children: React.ReactNode}) {
  const [state, setState] = useState<FeedsStateType>(initialState);

  const fetchCategoryFeeds = () => {
    setState({ ...state, categoryFeeds: CategoryFeeds });
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

  return (
    <FeedsContext.Provider
      value={{
        categoryFeeds: state.categoryFeeds,
        newsFeedData: state.newsFeedData,
        newsFeedLoading: state.newsFeedLoading,
        newsFeedError: state.newsFeedError,
        fetchCategoryFeeds,
        fetchNewsFeed
      }}>
      {props.children}
    </FeedsContext.Provider>
  );
}