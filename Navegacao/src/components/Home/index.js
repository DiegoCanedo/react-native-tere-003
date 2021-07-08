import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default Home = ({navigation}) => {
    return (
      <View>
        <Button
          title="Details"
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
      </View>
    );
  };