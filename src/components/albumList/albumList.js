import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../albumDetail/albumDetail';
import styles from './albumListStyles';

class AlbumListStyles extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      this.setState({ albums: response.data });
    });
  }
  
  renderAlbums() {
    return this.state.albums.map((album) => (
       <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }  
}

export default AlbumListStyles;
