import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico10({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Teatro Municipal</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/10/teatro5.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>A luxuosa construção, visivelmente influenciada por teatros de ópera da Europa, foi erguida como símbolo aspiracional da alta sociedade paulistana, que com a fartura do ciclo do café desejava uma casa de espetáculos à altura de suas posses e pretensões europeias para receber os grandes artistas da música lírica e do teatro.</Text>
        <Text style={styles.description}>O projeto assinado pelo escritório Ramos de Azevedo – em colaboração com os italianos Cláudio Rossi e Domiziano Rossi – teve início em 1903 e foi entregue à cidade 8 anos mais tarde. Em setembro de 1911, o Theatro Municipal foi aberto para ilustres convidados diante de uma multidão de 20 mil pessoas deslumbradas com a pompa e com uma iluminação espetacular para a época – o prédio foi o primeiro a ser totalmente abastecido por energia elétrica.</Text>
        <Text style={styles.description}>Pelo palco do Municipal passaram as mais importantes companhias da primeira metade do século 20, trazendo nomes como Enrico Caruso, Maria Callas, Bidu Sayão, Arturo Toscanini, Camargo Guarnieri, Villa-Lobos, Francisco Mignone, Ana Pawlova, Arthur Rubinstein, Claudio Arrau, Duke Ellington, Ella Fitzgerald, Isadora Duncan, Nijinsky e Baryshnikov, dentre muitos outros. Indo sempre além da cena clássica, coroou sua vocação cosmopolita ao receber um dos principais eventos da história das artes no Brasil, a SEMANA DE 22, de Mário e Oswald de Andrade, Anita Malfatti e tantos outros jovens célebres que deram início ao movimento modernista brasileiro.</Text>
        <Text style={styles.description}>Em mais de 100 anos de história, três grandes reformas preservaram, renovaram e ampliaram o Theatro, que hoje conta com um edifício restaurado. Em 2012 foram criadas as instalações da Praça das Artes para abrigar os corpos artísticos, as escolas municipais de música e dança e as múltiplas atividades do Complexo Theatro Municipal.</Text>
        <Text style={styles.description} onPress={() => Linking.openURL('https://theatromunicipal.org.br/pt-br/theatro-municipal/')}>https://theatromunicipal.org.br/pt-br/theatro-municipal/</Text>
      
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
          onPress={() => Linking.openURL('https://www.google.com.br/maps/place/Teatro+Municipal+de+S%C3%A3o+Paulo/@-23.5452299,-46.6411899,17z/data=!3m2!4b1!5s0x94ce5853d0c2ef93:0xe2320e1286debc1c!4m6!3m5!1s0x94ce56113b8aa18b:0x275b79f7efe44e1e!8m2!3d-23.5452348!4d-46.638615!16s%2Fm%2F02vpp35?entry=ttu')}
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

export default PontoTuristico10;
