import React, { ReactFragment, useState } from 'react';
import { CategoryFeeds } from '../../constants/DummyData';
import { FeedsStateType } from './types';
import FeedsContext  from '.';


const initialState = {
  categoryFeeds: []
};

export function FeedsProvider(props: { children: React.ReactNode}) {
  const [state, setState] = useState<FeedsStateType>(initialState);

  const fetchCategoryFeeds = () => {
    setState({ categoryFeeds: CategoryFeeds });
  }

  return (
    <FeedsContext.Provider
      value={{
        categoryFeeds: state.categoryFeeds,
        fetchCategoryFeeds
      }}>
      {props.children}
    </FeedsContext.Provider>
  );
}