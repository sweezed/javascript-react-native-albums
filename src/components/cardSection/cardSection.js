import React from 'react';
import { View } from 'react-native';
import styles from './cardSectionStyles';

const cardSection = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

export default cardSection;
