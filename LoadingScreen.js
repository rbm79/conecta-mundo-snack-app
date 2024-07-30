import * as React from 'react';
import { useEffect } from 'react';
import { Image, ActivityIndicator, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';

export function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('InitialScreen');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/fundo.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.imageContainer}>
          <Image source={require('./assets/images/telaInicial.png')} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: Dimensions.get('window').width , // Limita a largura da imagem a 80% da largura da tela
    maxHeight: Dimensions.get('window').height , // Limita a altura da imagem a 80% da altura da tela
  },
  activityIndicatorContainer: {
    position: 'absolute',
    bottom: 20, // Ajusta a posição do indicador de carregamento
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default LoadingScreen;
