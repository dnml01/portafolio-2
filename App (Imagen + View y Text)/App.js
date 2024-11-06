import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Cambiado para usar expo-linear-gradient

const App = () => {
  return (
    <LinearGradient
      colors={['#FF5733', '#33C1FF']}
      style={styles.container}
    >
      {/* Imagen de la Municipalidad de Quinchao almacenada localmente */}
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
    width: 150, // Ancho de la imagen
    height: 150, // Altura de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // Semi-negrita
    color: 'green',
    marginBottom: 20, // Espacio debajo del texto
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 30, // Ajusta la distancia desde la parte inferior
    alignItems: 'center',
  },
  googleLogo: {
    width: 100, // Ancho de la imagen de Google
    height: 100, // Altura de la imagen de Google
  },
});

export default App;

