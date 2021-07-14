
import React, {useState, useEffect} from 'react';
import {View,TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  
    useEffect(() => {
  
      recuperarUsuarioAsyncStorage().then(valor => {
        console.log(valor);
        if(valor !== undefined){
          navigation.navigate('Home');
        }
      }).catch(error => {
        console.log(error);
      });
    }, [])
  
    async function recuperarUsuarioAsyncStorage(){
      try {
        const valor = await AsyncStorage.getItem('teste');
  
      if(valor !== null){
        const parseObjeto = JSON.parse(valor);
        return parseObjeto
      }
      } catch (error) {
        console.log(error);
      }
    }
  
    async function salvarUsuarioNoAsyncStorage(usuario){
        try {
         const data = JSON.stringify(usuario);
         await AsyncStorage.setItem('teste', data);
        } catch (error) {
          console.log(error);
        }
    }
  
    function handleLogin(){
      const usuario = {
        email: email,
        senha: senha,
      }
      salvarUsuarioNoAsyncStorage(usuario);
  
      navigation.navigate('Home');
  
    }
  
    return (
      <View style={{flex: 1,backgroundColor: '#CCC', padding: 10}}>
        <TextInput style={{backgroundColor: '#FFF', marginBottom: 5}} onChangeText={(valor) => setEmail(valor)} />
        <TextInput style={{backgroundColor: '#FFF', marginBottom: 5}} onChangeText={setSenha} />
        <Button onPress={handleLogin} title="Logar"/>
      </View>
    );
  };