import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('data', 'Search Btn Clicked')}>
          <Fontisto name="search" size={25} color={'#fa5454'} />
          <Text style={styles.SearchButtonText}>Where are you going?</Text>
        </Pressable>
        <ImageBackground
          source={require('../../../assets/images/wallpaper.jpg')}
          style={styles.image}>
          <Text style={styles.title}>Go Near</Text>
          <Pressable
            style={styles.button}
            onPress={() => console.warn('data', 'Explore Btn Clicked')}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeScreen;
