import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions, Modal, Image } from 'react-native';

const images = {
  imagem1: require('./assets/images/galeria/11/ipiranga1.jpeg'),
  imagem2: require('./assets/images/galeria/11/ipiranga2.jpeg'),
  imagem3: require('./assets/images/galeria/11/ipiranga3.jpeg'),
  imagem4: require('./assets/images/galeria/11/ipiranga4.jpeg'),

  imagem5: require('./assets/images/galeria/8/mercado1.jpg'),
  imagem6: require('./assets/images/galeria/8/mercado2.jpg'),
  imagem7: require('./assets/images/galeria/8/mercado3.jpg'),
  imagem8: require('./assets/images/galeria/8/mercado4.jpg'),

  imagem9: require('./assets/images/galeria/10/teatro1.jpg'),
  imagem10: require('./assets/images/galeria/10/teatro2.jpg'),
  imagem11: require('./assets/images/galeria/10/teatro3.jpg'),
  imagem12: require('./assets/images/galeria/10/teatro4.jpg'),

  imagem13: require('./assets/images/galeria/7/pateo1.jpg'),
  imagem14: require('./assets/images/galeria/7/pateo2.jpg'),
  imagem15: require('./assets/images/galeria/7/pateo5.jpg'),
  imagem16: require('./assets/images/galeria/7/pateo4.jpg'),

  imagem17: require('./assets/images/galeria/9/catedral1.jpg'),
  imagem18: require('./assets/images/galeria/9/catedral2.jpg'),
  imagem19: require('./assets/images/galeria/9/catedral5.jpg'),
  imagem20: require('./assets/images/galeria/9/catedral4.jpg'),

  imagem21: require('./assets/images/galeria/6/luz1.jpg'),
  imagem22: require('./assets/images/galeria/6/luz2.jpg'),
  imagem23: require('./assets/images/galeria/6/luz3.jpg'),
  imagem24: require('./assets/images/galeria/6/luz4.jpg'),
  
};

export const AtracoesSaoPaulo = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const renderedImages = [];

      for (let i = 1; i <= 24; i++) {
        let textToRender = '';

    if (i === 1) {
      textToRender = 'Museu do Ipiranga', i;
    } else if (i === 5) {
      textToRender = 'Mercado Municipal';
    } else if (i === 9) {
      textToRender = 'Teatro Municipal';
    } else if (i === 13) {
      textToRender = 'Pateo do Collegio';
    } else if (i === 17) {
      textToRender = 'Catedral da Sé';
    }else if (i === 21) {
      textToRender = 'Estação da Luz';
    }
    else{
      textToRender = '';
    }

    
    if ((i - 1) % 4 === 0) {
      // Adiciona o texto acima de cada conjunto de 4 imagens
      renderedImages.push(
        <Text
          key={`text_${i}`} // Adicione uma chave única para evitar erros de renderização
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '100',
            marginTop: Dimensions.get('window').height * 0.1,
            marginBottom: Dimensions.get('window').height * 0.03,
            width:'100%',
          }}
        >
          {textToRender}
        </Text>
      );
    }

      renderedImages.push(
        <TouchableOpacity key={i} onPress={() => handleImagePress(`imagem${i}`)}>
          <Image
            source={images[`imagem${i}`]}
            style={{
              width: windowWidth * 0.42,
              height: windowWidth * 0.3,
              marginBottom: windowWidth * 0.05, // 5% da largura da tela
              marginRight: '2.7%',
              marginLeft: '2.7%',
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
          }
          return renderedImages;
    };

    

  return (
    <ImageBackground
      source={require('./assets/images/fundo.jpg')}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <View style={styles.container}>
          <Text style={styles.title}>São Paulo</Text>
      

          <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 1 }}>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'right' }}>Fechar</Text>
              </TouchableOpacity>
              <Image source={selectedImage} style={{ width: '80%', height: '80%', resizeMode: 'contain', zIndex: 0 }} />
            </View>
          </Modal>




    {/*    <Image source={images['imagem1']} style={{ width: '100%', height: 200 }} resizeMode="cover" />
*/}
        <ScrollView style={{ marginVertical: '5%', marginLeft: '2.5%', marginRight: '2.5%' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {renderImages()}
          </View>
        </ScrollView>

        
          <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('InitialScreen')}
        >
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('DetailsScreenSaoPaulo')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Mais detalhes</Text>
        </TouchableOpacity>
      </View>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.005,
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
title: {
  fontSize: 35,
  textAlign: 'center',
  color: 'white',
  marginTop: Dimensions.get('window').height * 0.05,
  fontWeight: '100',
  textShadowColor: 'rgba(55, 14, 67, 1)',
  textShadowOffset: { width: 0.2, height: 0.2 },
  textShadowRadius: 5,
  marginLeft: Dimensions.get('window').width*0.03,
    marginRight: Dimensions.get('window').width*0.03,
},
subtitle: {
  fontSize: 25,
  textAlign: 'center',
  color: 'white',
  marginBottom: Dimensions.get('window').height * 0.1,
  marginTop: Dimensions.get('window').height * 0.05,
  fontWeight: '100',
  textShadowColor: 'rgba(55, 14, 67, 1)',
  textShadowOffset: { width: 0.2, height: 0.2 },
  textShadowRadius: 5,
  marginLeft: Dimensions.get('window').width*0.03,
    marginRight: Dimensions.get('window').width*0.03,
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
  width: Dimensions.get('window').width * 0.33,
},
secondButton: {
  backgroundColor: 'white',
  borderColor: '#370e43',
  borderWidth: 1,
  height: Dimensions.get('window').height * 0.1, 
  width: Dimensions.get('window').width * 0.43,
  
},
buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
  textAlign:'center',
},
secondButtonText: {
  color: '#370e43',
  textAlign:'center',
},
});

export default AtracoesSaoPaulo;