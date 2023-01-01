import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  // console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text={'Where do'} style={styles.normalText} />
        <Title text={'you want to go?'} />
        <Title text={'Explore Attractions'} style={styles.subtitle} />
        <Categories
          selectedItem={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Trending',
            'Historical',
            'Monuments',
            'Nature',
          ]}
        />
        <ScrollView>
          {/* {data?.map(item => {
            <AttractionCard
              key={item.id}
              title={item.name}
              subtitle={item.city}
              imageSrc={item.images?.length ? item.images[0] : null}
            />;
          })} */}
          {/* {data?.map(item => {
            // console.log(item.id, item.name, item.city);
            <AttractionCard
              key={item.id}
              title={item.name}
              subtitle={item.city}
              imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
            />;
          })} */}

          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
          <AttractionCard
            title="Angkor"
            subtitle="siem reap"
            imageSrc="https://www.cambodiabeginsat40.com/wp-content/uploads/2021/09/Bokor-Mountain-Wat.jpg"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  normalText: {
    fontWeight: 'normal',
  },
  subtitle: {
    marginTop: 40,
    marginBottom: 24,
    color: 'black',
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default React.memo(Home);
