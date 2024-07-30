import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico7({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Pateo do Collegio</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/7/pateo1.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>O complexo histórico-cultural-religioso Pateo do Collegio pertence à Companhia de Jesus, ordem religiosa dos jesuítas . Em meio aos arranha-céus do centro da capital paulista, o Pateo do Collegio, berço dessa que se tornou uma das maiores metrópoles do mundo, foi o local onde São Paulo nasceu. Em 1554, o Padre Anchieta, após expedição que partiu do litoral, resolveu construir uma dependência para servir de alojamento e colégio para catequização dos índios, fundando assim a cidade de São Paulo. Funciona no local o Museu Anchieta</Text>
        <Text style={styles.description} onPress={() => Linking.openURL('https://www.saopaulo.sp.gov.br/conhecasp/pontos-turisticos/pateo-do-colegio/')}>https://www.saopaulo.sp.gov.br/conhecasp/pontos-turisticos/pateo-do-colegio/</Text>
      
      </View>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('AtracoesSaoPaulo')}
        >
          <Text style={styles.buttonText}>Atrações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => Linking.openURL('https://www.google.com.br/maps/place/College+Pateo/@-23.5479822,-46.6351942,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59aab669af5d:0xb80f5e7548bf99e7!8m2!3d-23.5479871!4d-46.6326193!16s%2Fg%2F122y5ddx?entry=ttu')}
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

export default PontoTuristico7;
