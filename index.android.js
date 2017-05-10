import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import BakkalList from './src/components/BakkalList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText='Gayrettepe' />
    <BakkalList />
  </View>
);

AppRegistry.registerComponent('AwesomeProject', () => App);
