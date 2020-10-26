import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Item from './Item';
import { useCatFacts } from '../hooks/useCatFacts';

const Container: React.FunctionComponent = () => {
  const renderItem = ({ item }) => <Item title={item.text} />;
  const {
    facts,
    loading,
    error,
    loadMore,
  } = useCatFacts();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={facts} renderItem={renderItem} keyExtractor={item => item._id} />
      {!!facts.length && (
        <TouchableOpacity
          onPress={loadMore}
          style={styles.button}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Load more</Text>
        </TouchableOpacity>
      )}
      {!!error && (
        <Text style={styles.error}>An error has occurred: {error}</Text>
      )}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#734B5E',
    padding: 10,
    margin: 16,
    flexGrow: 0,
    textTransform: 'uppercase',
    textAlign: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  error: {
    color: '#e74b4b',
    margin: 16,
    fontSize: 20,
  }
});