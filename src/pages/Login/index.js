import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Login({ navigation }) {

    function login() {
        navigation.navigate('Home', {
            screen: "Settings"
        })
    }

  return (
    <View>
        <Text>Login</Text>
        <Button title="Fazer Login" onPress={login}/>
    </View>
  );
}
