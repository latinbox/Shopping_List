import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import {uuid} from 'uuidv4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), test: 'Milk'},
    {id: uuid(), test: 'Eggs'},
    {id: uuid(), test: 'Tomatoes'},
    {id: uuid(), test: 'Butter'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
    </View>
  );
};

export default App;