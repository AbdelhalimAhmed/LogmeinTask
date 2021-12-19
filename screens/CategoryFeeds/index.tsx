import { useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CategoryFeedsList from '../../components/CategoryFeedsList';

import { Text, View } from '../../components/Themed';
import FeedsContext from '../../context/feeds';
import { FeedsContextType } from '../../context/feeds/types';
import { NewsNavigatorProps } from '../../types';
import styles from './styles';

export default function CategoryFeedsScreen({ navigation }: NewsNavigatorProps<'CategoryFeeds'>) {
  const feedsContext = useContext<FeedsContextType>(FeedsContext);

  useEffect(() => {
    feedsContext.fetchCategoryFeeds();
  }, []);

  return (
    <View style={styles.container}>
      <CategoryFeedsList
        data={feedsContext.categoryFeeds}
        onPress={(url) => navigation.navigate('NewsFeed', { url })} />
    </View>
  );
};

