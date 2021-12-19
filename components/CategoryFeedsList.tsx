import { Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Category } from '../context/feeds/types';
import { MonoText } from './StyledText';


function CategoryCard({ item, onPress }: { item: Category, onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MonoText style={styles.title}>{item.title}</MonoText>
    </TouchableOpacity>
  );
};

export default function CategoryFeedsList({ data }: { data: Category[] }) {
  return (
    <FlatList
      numColumns={2}
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => (
        <CategoryCard item={item} onPress={() => Alert.alert('s')}/>
      )}
    />
  );
}


const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
  },
  card: {
    height: 200,
    flex: 1,
    margin: 5,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: Colors.dark.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
    elevation: 5
  },
  title: {
    fontSize: 20
  }
});