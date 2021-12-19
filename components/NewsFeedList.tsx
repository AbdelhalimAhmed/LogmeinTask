import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { NewsType } from '../context/feeds/types';
import { MonoText } from './StyledText';


function NewsCard({ item, onPress }: { item: NewsType, onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MonoText style={styles.title}>{item.title}</MonoText>
      <MonoText style={styles.description}>{item.description}</MonoText>
      <MonoText style={styles.date}>{item.published}</MonoText>
    </TouchableOpacity>
  );
};

export default function NewsFeedList({ data, onPress }: { data: NewsType[], onPress: (url: string) => void }) {
  return (
    <FlatList
      style={styles.list}
      keyExtractor={(item) => `${item.id?.toString()}${item.title}`}
      data={data}
      renderItem={({ item }) => (
        <NewsCard item={item} onPress={() => onPress(item.links[0].url)}/>
      )}
    />
  );
}


const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
  },
  card: {
    minHeight: 100,
    flex: 1,
    margin: 10,
    backgroundColor: Colors.light.background,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: Colors.dark.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: Colors.light.description,
    marginVertical: 10
  },
  date: {
    fontSize: 12,
    color: Colors.light.tint
  }
});