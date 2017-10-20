/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  Scene, 
  Router
} from 'react-native-router-flux'

import LoginView from './LoginView'
import Nuevo from './Nuevo'
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'




export default class App extends Component<{}> {

  render() {  
    return (
    <Router>
      <Scene key="root" type="replace">
        <Scene key="nuevo" component={Nuevo} hideNavBar />
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView} title="Comentarios" hideNavBar={false} />
      </Scene>
    </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});
