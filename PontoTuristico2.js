import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico2({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Alambique</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/2/imagem1.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>
        Produção Artesanal de cachaças. Envelhecidas e ou com sabores, na época da produção é possível marcar Visita Guiada para conhecer o processo desde o corte, moagem, filtragem, colocação nos barris, até a cachaça pronta, lá você encontra os seguintes sabores que podem ser degustados: coco, canela, pequi, abacaxi, hortelã, limão, mel e gengibre e frutas vermelhas, além de cachaça artesanal envelhecida. O ambiente é bem conservado, com paisagismo e locais de descanso, usado como ponto de apoio pelos ciclistas nos fins de semana.
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
          onPress={() => Linking.openURL('https://www.google.com.br/maps/place/Engenho+S%C3%A3o+Jo%C3%A3o/@-20.8649527,-51.519535,17z/data=!3m1!4b1!4m6!3m5!1s0x9490b7eda4366665:0xe26f0246d5e4a635!8m2!3d-20.8649578!4d-51.5149216!16s%2Fg%2F11gr1b71vf?entry=ttu')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Localização</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.01,
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
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  imageLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.36,
    marginBottom: Dimensions.get('window').height * 0.03,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.04,
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
    borderWidth:1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.31,
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.45,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButtonText: {
    color: '#370e43',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').height * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.1,
  },
  imageSmall: {
    width: Dimensions.get('window').width * 0.25, // Ajuste o tamanho conforme necessário
    height: Dimensions.get('window').height * 0.15, // Ajuste o tamanho conforme necessário
    marginBottom: Dimensions.get('window').height * 0.01,
  },
});

export default PontoTuristico2;
