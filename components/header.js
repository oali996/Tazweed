import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Sellers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 15,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
