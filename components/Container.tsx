import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import Item from './Item';

const Container: React.FunctionComponent = () => {
  const renderItem = ({ item }) => <Item title={item.text} />;

  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    setLoading(true);
    axios.get('https://cat-fact.herokuapp.com/facts/random', {
      params: {
        animal_type: 'cat',
        amount: 3,
      }
    })
    .then((response) => {
      setFacts(prevFacts => [...prevFacts, ...response.data]);
      setLoading(false);
    })
    .catch((e) => setError(e.message));
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={facts} renderItem={renderItem} keyExtractor={item => item._id} />
      {!!facts.length && (
        <TouchableOpacity
          onPress={() => setPage(prevPage => prevPage + 1)}
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