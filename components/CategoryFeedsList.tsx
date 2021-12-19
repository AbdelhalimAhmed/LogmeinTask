import { FontAwesome } from '@expo/vector-icons';
import { Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Category } from '../context/feeds/types';
import { MonoText } from './StyledText';


function CategoryCard({ item, onPress, onFavoritePress, isFavorite }: { item: Category, onPress: () => void, onFavoritePress: () => void, isFavorite: boolean }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MonoText style={styles.title}>{item.title}</MonoText>
      <FontAwesome name={isFavorite ? 'heart':'heart-o'} size={25} style={styles.favorite} onPress={onFavoritePress}/>
    </TouchableOpacity>
  );
};

export default function CategoryFeedsList({
  data,
  onPress,
  onFavoritePress,
  favoritesList }: {
    data: Category[],
    onPress: (url: string) => void,
    onFavoritePress: (id: number) => void,
    favoritesList: number[]
  }) {
  console.log({'sssqq': data[0], favoritesList})
  return (
    <FlatList
      extraData={favoritesList}
      numColumns={2}
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => (
        <CategoryCard
          item={item}
          onPress={() => onPress(item.url)}
          onFavoritePress={() => onFavoritePress?.(item.id)}
          isFavorite={favoritesList.includes(item.id)}
        />
      )}
    />
  );
};


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
  },
  favorite: {
    position: 'absolute',
    right: 10,
    top: 10,
  }
});