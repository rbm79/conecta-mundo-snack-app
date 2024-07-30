import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico9({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Catedral da Sé</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/9/catedral1.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>A grandiosa obra arquitetônica localizada na praça Sé é considerada a segunda Catedral da cidade. A primeira, construída em 1612, nomeada matriz, precisou ser demolida quase três séculos depois, por conta da passagem do tempo, o que afetou a construção. Em 1912, o Arcebispo Dom Duarte Leopoldo e Silva reuniu políticos e grandes nomes da cidade de São Paulo para propor a construção de uma nova Catedral.</Text>
        <Text style={styles.description}>A igreja de estilo gótico projetada por Maximilian Hehl, professor de Arquitetura da Escola Politécnica, foi finalizada no dia 25 de janeiro de 1954, quarto centenário de São Paulo. São 111 metros de comprimento, 46 de largura, 65 de altura (até o cume da cúpula) e 100 metros de altura das duas torres na fachada.</Text>
        <Text style={styles.description}>Além de destacar o momento de farta disponibilidade de matérias-primas, a obra exalta a cultura nacional e a religiosidade em cada detalhe. Ao entrar na Catedral, logo acima da porta existem três elementos que representavam o crescimento do Brasil, na época: o cacau, trigo e a uva. Animais também podem ser vistos nos vitrais, como tucano, garça, tatu e muitas flores, tudo representado com cor e vivacidade.</Text>
        <Text style={styles.description}>Durante a visita, o monitor responsável, Marcelo C. Saraiva, fala sobre a história da Catedral; os elementos, esculturas, obras e símbolos presentes na construção. Um fato curioso é que a Cripta (capela subterrânea) foi inaugurada em 1919, 35 anos antes do restante da igreja. O local abriga 30 câmaras mortuárias, algumas delas ocupadas por importantes arcebispos e personalidades históricas, como o Cacique de Tibiriçá, índio convertido e batizado pelos jesuítas.</Text>
        <Text style={styles.description}>Apesar de estar localizada no centro da principal cidade brasileira, a Catedral da Sé ainda é pouco conhecida. Saraiva explica que não há uma medição exata para o tanto de visitas monitoradas, “a média gira em torno de 600 pessoas por mês, geralmente 30 são turistas”, comenta.</Text>
        <Text style={styles.description} onPress={() => Linking.openURL('https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/se/noticias/?p=57326')}>https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/se/noticias/?p=57326</Text>
      
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
          onPress={() => Linking.openURL('https://www.google.com.br/maps/place/Catedral+Metropolitana+de+S%C3%A3o+Paulo+(da+S%C3%A9)/@-23.5512753,-46.6369176,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59abb2b2eef1:0xfdb32e67a44103f5!8m2!3d-23.5512802!4d-46.6343427!16zL20vMDl6NGtr?entry=ttu')}
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

export default PontoTuristico9;
