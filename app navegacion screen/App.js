import React from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

// Pantalla principal
const MainScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#FF5733', '#33C1FF']}
      style={styles.container}
    >
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logoQuinchao}
        resizeMode="contain"
      />
      <Text style={styles.text}>¡DEPARTAMENTO MEDIO AMBIENTAL!</Text>

      {/* Botón para navegar */}
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('Home')}
      />

      <View style={styles.bottomImageContainer}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x27.max-600x600.format-webp.webp' }}
          style={styles.googleLogo}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

// Segunda pantalla (Home)
const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeText}>¡Bienvenido/a al Home!</Text>
    </View>
  );
};

// Configuración de navegación
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//estilos 
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
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
