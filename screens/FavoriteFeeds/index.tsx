import { useContext, useEffect } from 'react';
import CategoryFeedsList from '../../components/CategoryFeedsList';

import { Text, View } from '../../components/Themed';
import FeedsContext from '../../context/feeds';
import { FeedsContextType } from '../../context/feeds/types';
import { NewsNavigatorProps } from '../../types';
import styles from './styles';

export default function CategoryFeedsScreen({ navigation }: NewsNavigatorProps<'CategoryFeeds'>) {
  const feedsContext = useContext<FeedsContextType>(FeedsContext);

  useEffect(() => {
    feedsContext.init();
  }, []);

  return (
    <View style={styles.container}>
      <CategoryFeedsList
        data={feedsContext.categoryFeeds.filter(feed => feedsContext.favoritesCategoryFeeds.includes(feed.id))}
        onPress={(url) => navigation.navigate('NewsFeed', { url })}
        onFavoritePress={feedsContext.onFavoriteCategoryFeeds}
        favoritesList={feedsContext.favoritesCategoryFeeds}
      />
    </View>
  );
};

