import { useContext, useEffect } from 'react';
import { Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

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
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <FontAwesome
            name="close"
            size={25}
          />
        </Pressable>
      ),
    })
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: `${feedsContext.newsFeedData?.title.split('-').pop()} (${feedsContext.newsFeedData.items?.length})` ?? ''
    })
  },[feedsContext.newsFeedData?.title])

  return (
    <View style={styles.container}>
      <NewsFeedList data={feedsContext.newsFeedData?.items} onPress={(url) => WebBrowser.openBrowserAsync(url)}/>
    </View>
  );
}


