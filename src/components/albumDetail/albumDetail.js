import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from '../card/card';
import CardSection from '../cardSection/cardSection';
import Button from '../button/button';
import styles from './albumDetailStyles';

const albumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;

  return (
    <Card>
      <CardSection>
        <Image style={styles.imageArtistStyle} source={{ uri: thumbnail_image }} />
        <View style={styles.textHeaderStyle}>
          <Text style={styles.largerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>  
      </CardSection> 
      <CardSection>
        <Image style={styles.imageAlbumStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default albumDetail;
