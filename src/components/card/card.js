import React from 'react';
import { View } from 'react-native';
import styles from './cardStyles';

const card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

export default card;
