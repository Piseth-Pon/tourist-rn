import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'darkcyan',
    fontWeight: 'bold',
  },
});

Title.defaultProps = {
  text: 'Tourist Spot',
};

export default Title;
