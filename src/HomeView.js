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

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistList from './ArtistList'
import { getArtists } from './api-client'




export default class HomeView extends Component<{}> {
  state = {
    artists: null
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {  

  /*const artist = {
    image: 'https://lastfm-img2.akamaized.net/i/u/300x300/31a51f6e3ec647c8997150ec837891c7.png',
    name: 'David Bowie',
    likes: 200,
    comments: 140
  }
  const artists = Array(500).fill(artist)*/
  const artists = this.state.artists
    return (
      <Image source={require('./background.jpg')} style={styles.container}>
        { !artists && <ActivityIndicator size="large" /> }
        { artists && <ArtistList artists={artists} /> }
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 0
    }),
  },
});