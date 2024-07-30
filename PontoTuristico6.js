import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico6({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Estação da Luz</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/6/luz1.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>A Estação da Luz se tornou um importante ponto da capital paulista, por ser um local que recebe, diariamente, milhares de pessoas e também pela beleza inspiradora de sua arquitetura, que mereceu tombamento do Conselho de Defesa do Patrimônio Histórico, Artístico, Arqueológico e Turístico (Condephaat) e a admiração do atento e nostálgico olhar paulista.</Text>
        <Text style={styles.description}>“Todas as estações são importantes porque levam e trazem diversas histórias todos os dias, a Estação da Luz desperta em nós uma sensação de amor, ela é um símbolo especial de São Paulo, tenho certeza que boa parte dos paulistas compartilha desse sentimento comigo”, afirma o diretor-presidente da CPTM, Pedro Moro.</Text>
        <Text style={styles.description}>Em 1867 era inaugurada pela empresa Inglesa São Paulo Railway o lastro ferroviário que ligava Santos a Jundiaí, com extensão de 159 quilômetros e passagem por São Paulo justamente na Estação da Luz e Cubatão. Na mesma data, 16 de fevereiro, as estações Água Branca, Perus e Francisco Morato, da atual Linha 7-Rubi, e São Caetano do Sul, Santo André, Mauá, Ribeirão Pires e Rio Grande da Serra da Linha 10-Turquesa, foram postas em operação.</Text>
        <Text style={styles.description}>O prédio original funcionou até pelo menos 1888. O rápido crescimento de passageiros e a necessidade de escoamento de produção exigiam mais espaço e estrutura e, em 1° de março de 1901, finalmente, é colocada em operação a instalação que conhecemos hoje. Ao longo do tempo a estação teve reparos. Umas das mais importantes intervenções foi a obra para anexar o Museu da Língua Portuguesa, hoje restaurado após o incêndio de grandes proporções ocorrido em 2015.</Text>
        <Text style={styles.description}>Olhares curiosos devem se perguntar de onde veio a ideia de construir uma estação tão cheia de personalidade e forte o bastante para estar em pleno estado de conservação, mesmo após um século e uma operação diária pesada. Esses atenciosos olhares também devem perceber a semelhança com a arquitetura inglesa dominante no século de XIX e início do XX. Além do investimento inglês, o idealizador da planta, a maior parte dos materiais vinha da Inglaterra e, por isso, a ferrovia ficou conhecida como “Ingleza”.</Text>
        <Text style={styles.description}>Em 1982, a Condephaat confirmou o tombamento do local como patrimônio histórico. A estrutura do local se encaixa no estilo neoclássico liderado pelo britânico Charles Driver, que trouxe elementos arquitetônicos góticos como as torres paralelas em referência às da Abadia londrina de Westminster e o Relógio inspirado no Big Ben. Em 2020, a CPTM em parceria com a Secretaria Estadual de Cultura de São Paulo, Fundação Roberto Marinho e Órgãos de preservação do Patrimônio, iniciou o restauro e pintura das fachadas e torreões da Estação da Luz.</Text>
        <Text style={styles.description}>Com 13,2 mil metros quadrados de área, a estação dá acesso a duas linhas da CPTM: Linha 7-Rubi e Linha 11-Coral (Luz-Estudantes), além das integrações gratuitas com as Linhas 1-Azul e 4-Amarela, do Metrô. A estação recebe uma média de 250 mil passageiros por dia útil e os trens da CPTM realizam diariamente cerca de 840 viagens.</Text>
        <Text style={styles.description}>Para o secretário de Transportes Metropolitanos, Alexandre Baldy, a Luz é uma grande marca da história ferroviária brasileira. “As pessoas vão até a estação e sentem São Paulo viva, assim como a cidade realmente é. Estamos felizes em comemorar esses 120 anos e também por trabalhar para alinhar o peso histórico à melhor eficiência possível. A construção do túnel ligando CPTM, Metrô e ViaQuatro é um exemplo dessa eficiência e do quanto nossa gestão trabalha para melhorar ainda mais a experiência do passageiro”.</Text>
        <Text style={styles.description} onPress={() => Linking.openURL('https://www.saopaulo.sp.gov.br/spnoticias/estacao-da-luz-completa-120-anos/')}>https://www.saopaulo.sp.gov.br/spnoticias/estacao-da-luz-completa-120-anos/</Text>
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
          onPress={() => Linking.openURL('https://www.google.com.br/maps/place/Luz+Station/@-23.5351001,-46.6375067,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59ecfe839269:0x1a37124ba9552824!8m2!3d-23.535105!4d-46.6349318!16s%2Fg%2F11fv3tnn91?entry=ttu')}
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

export default PontoTuristico6;
