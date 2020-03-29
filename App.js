import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

// import { Container } from './styles';

export default function RNN5() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}
