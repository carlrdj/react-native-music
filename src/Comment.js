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
const DEFAULT_AVATAR = 'http://www.abbotsfordtoday.ca/wp-content/uploads/2017/05/rise-against-logo-300x336.png'

const AVATAR_SIZE = 32
const Comment = (props) => 
  <View style={styles.comment}>
    {
      props.avatar ?
        <Image style={styles.avatar} source={{ uri: props.avatar }} /> :
        <Image style={styles.avatar} source={{ uri: DEFAULT_AVATAR }} /> 
    }
    <Text style={styles.text}>{props.text}</Text>
  </View>

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10,
    fontSize: 16
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  }
})

export default Comment