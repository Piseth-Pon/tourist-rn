import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

function AttractionCard({imageSrc, title, subtitle}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image source={require('../assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: (width - 112) / 2,
    height: 128,
    borderRadius: 15,
    marginBottom: 8,
  },
  card: {
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    padding: 4,
    borderRadius: 15,
    margin: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'right',
  },
  subtitle: {
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
});

export default React.memo(AttractionCard);
