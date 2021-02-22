import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import nextId from 'react-id-generator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const [items, setItems] = useState([
    {id: nextId(), text: 'Milk'},
    {id: nextId(), text: 'Eggs'},
    {id: nextId(), text: 'Tomatoes'},
    {id: nextId(), text: 'Butter'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

export default App;