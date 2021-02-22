import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
});

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.lisItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
