import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Container from './components/Container';

const App = () => (
  <Container />
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16
  },
});
