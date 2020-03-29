import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {

    function navigateToLogin() {
        navigation.navigate("Login")
    }

  return (
    <View>
        <Text>Home</Text>
        <Button title="Sair" onPress={navigateToLogin}/>
    </View>
  );
}
