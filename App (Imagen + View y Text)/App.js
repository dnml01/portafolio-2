import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const App = () => {
  return (
    <LinearGradient
      colors={['#FF5733', '#33C1FF']}
      style={styles.container}
    >
      {/* Imagen de la Municipalidad */}
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logoQuinchao}
        resizeMode="contain"
      />

      {/* Texto debajo de la imagen */}
      <Text style={styles.text}>
        ¡DEPARTAMENTO MEDIO AMBIENTAL!
      </Text>

      {/* Imagen de Google en la parte inferior */}
      <View style={styles.bottomImageContainer}>
        <Image
          source={{ uri: 'https://www.drupal.org/files/issues/2020-01-26/google_logo.png' }}
          style={styles.googleLogo}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoQuinchao: {
    width: 150, 
    height: 150, 
    marginBottom: 20, 
  },
  text: {
    fontSize: 20,
    fontWeight: '600', 
    color: 'green',
    marginBottom: 20, 
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 30, 
    alignItems: 'center',
  },
  googleLogo: {
    width: 100, 
    height: 100, 
  },
});

export default App;

