import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header/header';
import AlbumList from './src/components/albumList/albumList';

const App = () => {
  console.ignoredYellowBox = ['Warning: componentWillMount', 'Warning: componentWillReceiveProps'];
  return (
    <View style={{ flex: 1 }}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>  
  );  
};

AppRegistry.registerComponent('albums', () => App);
