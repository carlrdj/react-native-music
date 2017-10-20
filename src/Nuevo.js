/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Platform
} from 'react-native';


export default class Nuevo extends Component<{}> {
  
  render() {  
  
    return (
      <View style={styles.container}>      
      	<View style={styles.box} />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {    
  	width: 200,
    height: 200,
    backgroundColor: '#000000',
  },
});