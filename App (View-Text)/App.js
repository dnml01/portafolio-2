import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default App;
