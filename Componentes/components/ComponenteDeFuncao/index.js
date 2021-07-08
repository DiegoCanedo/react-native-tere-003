import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';

export default function ComponenteDeFuncao() {
  
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState('');

    useEffect(()=> {
    }, [])

    useEffect(() => {
        setTexto(contador == 10 ? 'Dez' : 'Texto')
    }, [handleClick])

    const handleClick = () => {
        setContador(contador + 1);
    }


  return (
    <View>
      <Button title="Click" onPress={handleClick} />
      <Text>{contador}</Text>
      <Text>{texto}</Text>
    </View>
  );
}
