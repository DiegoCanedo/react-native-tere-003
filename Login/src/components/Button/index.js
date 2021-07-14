import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default function CustomButton({nome, verde}) {
  const [nomeBotao, setNomeBotao] = useState('Qualquer Botao');

  function clica() {
    setNomeBotao(nome);
  }

  return (
    <TouchableOpacity onPress={clica}>
      <View>
        <Text>{nomeBotao}</Text>
      </View>
    </TouchableOpacity>
  );
}
