import React from 'react';

import {
  render,
  waitFor,
  fireEvent,
} from 'react-native-testing-library';

import CategoryFeesList, { CategoryCard } from '../CategoryFeedsList';

describe('CategoryFeedsList', () => {
  it('make sure category card feed render title correctly', async () => {
    const { queryByTestId, queryByText } = render(<CategoryFeesList data={[{id: 1, title: '11', url: 'ss'}]} />);
    await waitFor(() => {
       return queryByTestId('category-1');
    }).then(() => {
      const titleIsRender = queryByText('11');
      expect(titleIsRender).not.toBeNull();
     });

  });
  it('make sure scroll to end', () => {
    const onEndReached = jest.fn();
    const { getByTestId } = render(
      <CategoryFeesList
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        data={[
        { id: 1, title: '1' },
        { id: 2, title: '2' },
        { id: 3, title: '3' },
        { id: 4, title: '4' },
        { id: 5, title: '5' },
        { id: 6, title: '6' },
        { id: 7, title: '7' },
      ]} />
    );
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };
    
    fireEvent.scroll(getByTestId('category-feeds-list'), eventData);
    expect(onEndReached).toHaveBeenCalled();
  });
})