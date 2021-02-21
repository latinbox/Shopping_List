import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
    </View>
  );
};

export default App;