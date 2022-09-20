import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './buttonStyles';

const button = ({ whenPressed, children }) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={whenPressed}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>  
);

export default button;
