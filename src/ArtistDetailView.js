/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import ArtistBox from './ArtistBox'
import CommentList from './CommentList'
import { firebaseAuth, firebaseDatabase } from './firebase'


export default class ArtistDetailView extends Component<{}> {
  state = {
    comments: []
  }

  handleSend = () => {
    const { text } = this.state
    const artistCommentsRef = this.getArtistCommentsRef()
    var newCommentRef = artistCommentsRef.push()
    newCommentRef.set({ 
      text,
      userPhoto: 'http://www.abbotsfordtoday.ca/wp-content/uploads/2017/05/rise-against-logo-300x336.png'
    });
    this.setState({ text: '' })
  }

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  componentDidMount() {
    this.getArtistCommentsRef().on('child_added', this.addComment)
  }

  addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  componentWillUnmount() {
    this.getArtistCommentsRef().off('child_added', this.addComment)
  }

  render() {  
    const artist = this.props.artist
    const { comments } = this.state
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <Text style={styles.header}>Comentarios</Text>
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1
  }
});
