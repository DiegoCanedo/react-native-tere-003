import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

import styles from './css';

const Frases = () => {

    var frases = ['Frase1', 'Frase2'];
    const [frase, setFrase] = useState('');

    const handleClick = () => {
        const ind = Math.floor(Math.random() * frases.length);
        setFrase(frases[ind]);
    }

    return (
      <View style={styles.container}>
          <Button title="Click" onPress={handleClick}/>
          <Text>{frase}</Text>
      </View>
    )
}

export default Frases;