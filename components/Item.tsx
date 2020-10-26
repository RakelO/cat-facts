import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
}

const Item: React.FunctionComponent<Props> = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});