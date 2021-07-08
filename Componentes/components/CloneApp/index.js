import React from 'react';
import {View, TouchableHighlight, Text, Image, StyleSheet, TextInput} from 'react-native';

export default CloneApp = () => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} ></TextInput>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.textButtonLogar}>Logar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 44,
        paddingHorizontal: 15,
        backgroundColor: '#013464',
    },

    input:{
        color:'#FFF',
        opacity: 0.4,
        textAlign: 'left',
        borderColor: '#FFF',
        borderBottomWidth : 1,
        borderTopWidth : 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom:50,
    },

    button: {
        backgroundColor: '#FE7900',
        borderRadius: 24,
    }
})