import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <LinearGradient colors={['#e66465', '#9198e5']} style={styles.container}>
      {/* Imagen del álbum */}
      <View style={styles.albumContainer}>
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273b620b57373334d04b389f89f' }} // imagen del álbum
          style={styles.albumImage}
        />
      </View>

      {/* Título de la canción y nombre del artista */}
      <Text style={styles.songTitle}>SAVAGE</Text>
      <Text style={styles.artistName}>NEFFEX</Text>

      {/* Ícono de "me gusta" */}
      <Icon name="heart" size={30} color="red" style={styles.likeIcon} />

      {/* Controles de música */}
      <View style={styles.controlsContainer}>
        <Icon name="backward" size={30} color="#333" style={styles.controlIcon} />
        <Icon name="play-circle" size={40} color="#333" style={styles.controlIcon} />
        <Icon name="forward" size={30} color="#333" style={styles.controlIcon} />
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
  albumContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  albumImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
  artistName: {
    fontSize: 16,
    color: '#666',
  },
  likeIcon: {
    marginTop: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: 150,
  },
  controlIcon: {
    marginHorizontal: 10,
  },
});

export default App;
