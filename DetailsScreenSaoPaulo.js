import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetailsScreenSaoPaulo({ navigation }) {
  const handleImagePress = (imageName) => {
    let screenName = '';

    // Definindo a tela de destino com base no nome da imagem
    switch (imageName) {
      case 'imagem1':
        screenName = 'PontoTuristico6';
        break;
      case 'imagem2':
        screenName = 'PontoTuristico7';
        break;
      case 'imagem3':
        screenName = 'PontoTuristico8';
        break;
      case 'imagem4':
        screenName = 'PontoTuristico9';
        break;
      case 'imagem5':
        screenName = 'PontoTuristico10';
        break;
      case 'imagem6':
        screenName = 'PontoTuristico11';
        break;
      default:
        screenName = 'InitialScreen'; // Tela padrão, se necessário
        break;
    }

    // Navegar para a tela correspondente
    navigation.navigate(screenName);
  };

  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pontos Turísticos</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => handleImagePress('imagem1')}>
              <Image
                 source={require('./assets/images/galeria/6/luz2.jpg')}
                 style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.029 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress('imagem2')}>
              <Image
                source={require('./assets/images/galeria/7/pateo1.jpg')}
                style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.029 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.imageRow, {marginTop: - Dimensions.get('window').height * 0.009}]}>
            <TouchableOpacity onPress={() => handleImagePress('imagem3')}>
              <Image
                source={require('./assets/images/galeria/8/mercado2.jpg')}
                style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.15 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress('imagem4')}>
              <Image
                source={require('./assets/images/galeria/9/catedral1.jpg')}
                style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.11 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => handleImagePress('imagem5')}>
              <Image
                source={require('./assets/images/galeria/10/teatro2.jpg')}
                style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.029 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress('imagem6')}>
              <Image
                source={require('./assets/images/galeria/11/ipiranga2.jpeg')}
                style={[styles.image, styles.imageWithBorder, { marginHorizontal: Dimensions.get('window').width * 0.029 }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
  </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.03,
    paddingBottom: Dimensions.get('window').height * 0.15,
  },
  title: {
    fontSize: 33,
    textAlign: 'center',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.04,
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    fontWeight: '100',
    marginTop: Dimensions.get('window').height * 0.02,
},
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Dimensions.get('window').height * 0.05,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Dimensions.get('window').height * 0.03,
  },
  image: {
    width: Dimensions.get('window').width * 0.30,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 80,
    //marginHorizontal: Dimensions.get('window').width * 0.04,
  },
  imageWithBorder: {
    borderWidth: 3, // Escolha a largura da borda que deseja
    borderColor: 'white', // Cor da borda
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.08,
    width: '80%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20,
  },
  firstButton: {
    borderColor: 'white',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1,
    width: '30%',
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1,
    width: '46%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButtonText: {
    color: '#370e43',
  },
});

export default DetailsScreenSaoPaulo;
