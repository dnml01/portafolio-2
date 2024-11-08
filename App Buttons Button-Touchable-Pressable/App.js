import React from 'react';
import { Text, StyleSheet, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  // mostrar alerta
  const showAlert = (message) => {
    Alert.alert("Alerta", message);
  };

  return (
    <LinearGradient
      colors={['#FF5733', '#33C1FF']}
      style={styles.container}
    >
      {/* Imagen de la Municipalidad  */}
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logoQuinchao}
        resizeMode="contain"
      />

      {/* Texto debajo de la imagen */}
      <Text style={styles.text}>
        ¡DEPARTAMENTO MEDIO AMBIENTAL!
      </Text>

      {/* Botón alerta */}
      <Button
        title="Mostrar Alerta"
        onPress={() => showAlert("Este es un mensaje de alerta")}
      />

      {/* Botón personalizado  */}
      <TouchableHighlight
        style={styles.customButton}
        onPress={() => showAlert("Este es un mensaje personalizado")}
        underlayColor="#FF7F50"
      >
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>

      {/* Botón personalizado */}
      <Pressable
        style={styles.iconButton}
        onPress={() => showAlert("Este es un mensaje con icono")}
      >
        <Image
          source={{ uri: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2015/10/nexus2cee_Search-Thumb.png' }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Botón con Ícono</Text>
      </Pressable>

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
  customButton: {
    backgroundColor: '#FF7F50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
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
