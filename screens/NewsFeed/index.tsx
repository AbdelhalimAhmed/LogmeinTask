import { useContext, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { Text, View } from '../../components/Themed';
import FeedsContext from '../../context/feeds';
import { FeedsContextType } from '../../context/feeds/types';
import { NewsNavigatorProps } from '../../types';
import styles from './styles';
import NewsFeedList from '../../components/NewsFeedList';
import * as WebBrowser from 'expo-web-browser';

export default function NewsFeedScreen({ navigation }: NewsNavigatorProps<'NewsFeed'>) {
  const feedsContext = useContext<FeedsContextType>(FeedsContext);
  const { params }: any = useRoute();
  const url = params?.url;

  useEffect(() => {
    void feedsContext.fetchNewsFeed(url);
  }, []);

  return (
    <View style={styles.container}>
      <NewsFeedList data={feedsContext.newsFeedData} onPress={(url) => WebBrowser.openBrowserAsync(url)}/>
    </View>
  );
}


