import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions, Modal, Image } from 'react-native';

const images = {
  imagem1: require('./assets/images/galeria/1/imagem1.jpg'),
  imagem2: require('./assets/images/galeria/1/imagem2.jpg'),
  imagem3: require('./assets/images/galeria/1/imagem3.jpg'),
  imagem4: require('./assets/images/galeria/1/imagem4.jpg'),

  imagem5: require('./assets/images/galeria/2/imagem1.jpg'),
  imagem6: require('./assets/images/galeria/2/imagem2.jpg'),
  imagem7: require('./assets/images/galeria/2/imagem3.jpg'),
  imagem8: require('./assets/images/galeria/2/imagem4.jpg'),

  imagem9: require('./assets/images/galeria/3/imagem1.jpg'),
  imagem10: require('./assets/images/galeria/3/imagem2.jpg'),
  imagem11: require('./assets/images/galeria/3/imagem3.jpg'),
  imagem12: require('./assets/images/galeria/3/imagem4.jpg'),

  imagem13: require('./assets/images/galeria/4/imagem1.jpg'),
  imagem14: require('./assets/images/galeria/4/imagem2.jpg'),
  imagem15: require('./assets/images/galeria/4/imagem3.jpg'),
  imagem16: require('./assets/images/galeria/4/imagem4.jpg'),

  imagem17: require('./assets/images/galeria/5/imagem1.jpg'),
  imagem18: require('./assets/images/galeria/5/imagem2.jpg'),
  imagem19: require('./assets/images/galeria/5/imagem3.jpg'),
  imagem20: require('./assets/images/galeria/5/imagem4.jpg'),
};

export const AtracoesCastilho = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const renderedImages = [];

      for (let i = 1; i <= 20; i++) {
        let textToRender = '';

    if (i === 1) {
      textToRender = 'Ponte Ferroviária Francisco de Sá', i;
    } else if (i === 5) {
      textToRender = 'Alambique';
    } else if (i === 9) {
      textToRender = 'Estrada, Capela e Gruta N.S. das Graças';
    } else if (i === 13) {
      textToRender = 'Portal da Cidade';
    } else if (i === 17) {
      textToRender = 'Praça da Matriz';
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
          <Text style={styles.title}>Castilho - SP</Text>
      

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
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('DetailsScreenCastilho')}
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

export default AtracoesCastilho;