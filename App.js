import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/header';
import Search from './components/search';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
