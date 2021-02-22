import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
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

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    setItems((prevItems) => {
      return [{id: nextId(), text}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default App;
