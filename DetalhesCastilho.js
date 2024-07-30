import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesCastilho({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Castilho - SP</Text>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/images/image1.jpg')} style={styles.imageLarge} resizeMode="contain" />
          </View>
          <Text style={styles.description}>
            Castilho é um município brasileiro localizado no estado de São Paulo. Situa-se na Latitude 20° 52' 15” Sul, Longitude 51° 29' 13” Oeste, e está a uma altitude de 369 metros. Sua população, de acordo com o Censo de 2022, era de 19.977 habitantes, distribuídos em uma área de 1065,32 km². É uma das onze cidades da Região Imediata de Andradina que, por sua vez, é uma das três regiões que integram a Região Intermediária de Araçatuba.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={() => navigation.navigate('AtracoesCastilho')}
          >
            <Text style={styles.buttonText}>Atrações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate('DetailsScreenCastilho')}
          >
            <Text style={[styles.buttonText, styles.secondButtonText]}>Pontos Turísticos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.04,
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontWeight: '100',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginLeft: Dimensions.get('window').width * 0.1,
    marginRight: Dimensions.get('window').width * 0.1,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.1,
    marginLeft: Dimensions.get('window').width * 0.1,
    marginRight: Dimensions.get('window').width * 0.1,
  },
  imageLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.08,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginHorizontal: 10,
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
    width: Dimensions.get('window').width * 0.3,
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.46,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  secondButtonText: {
    color: '#370e43',
  },
});

export default DetalhesCastilho;
