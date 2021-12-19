import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NewsNavigatorProps } from '../types';

export default function NewsFeedsScreen({ navigation }: NewsNavigatorProps<'NewsFeeds'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={ () => navigation.navigate('EntriesFeed')}>News Feeds</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/NewsFeedsScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
