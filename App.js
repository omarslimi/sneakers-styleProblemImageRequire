import { StyleSheet, FlatList , View, Text } from 'react-native';
import CardHeader from './components/CardHeader';
import card from './data/cardSneakers.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data= { card } renderItem= {({ item }) =>(
         <CardHeader imgPROPS= { require(item.img) } title={ item.title } desc={ item.desc }/>
         ) } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
