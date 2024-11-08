import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//  pantalla de Home y Settings
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

// Pantalla principal 
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>
      
      {/* Botón Home */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={50} color="white" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      {/* Botón Settings */}
      <TouchableOpacity style={[styles.button, styles.settingsButton]} onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" size={50} color="white" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

// Configuración de navegación
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main Menu' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500', 
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    elevation: 5,
  },
  settingsButton: {
    backgroundColor: '#4CAF50', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default App;
