import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Categories = ({categories, selectedItem, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}
      data={categories}
      renderItem={({item}) => {
        const isSelected = selectedItem === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={isSelected ? styles.categoriesContainer : {}}>
            <Text style={[styles.item, isSelected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: -32,
  },
  selectedItem: {
    fontWeight: '500',
  },
  item: {
    padding: 4,
    marginHorizontal: 4,
  },
  categoriesContainer: {
    borderBottomColor: 'darkcyan',
    borderBottomWidth: 4,
  },
});

export default React.memo(Categories);
