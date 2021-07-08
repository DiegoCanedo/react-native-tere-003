
import React from 'react';
import MoovBen from './src/assets/images/logo.png';

import {View, Text, Image, StyleSheet} from 'react-native';

const ImageFontTuto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoSemFonte}>Lore ipsun Dolo</Text>
      <Text style={styles.textoComFonte}>Lore ipsun Dolo</Text>
      <Image source={MoovBen} style={styles.img} />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#19647E',
  },

  img: {
    width: 350,
    height: 210,
    resizeMode: 'center',
  },

  textoSemFonte: {
    fontSize: 20,
  },
  textoComFonte: {
    fontSize: 20,
    fontFamily: 'RobotoMono-VariableFont_wght',
  },
});

export default ImageFontTuto;
