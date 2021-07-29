import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={25} color={'#fa5454'} />
          <Text style={styles.SearchButtonText}>Where are you going?</Text>
        </Pressable>
        <ImageBackground
          source={require('../../../assets/images/wallpaper.jpg')}
          style={styles.image}>
          <Text style={styles.title}>Go Near</Text>
          <Pressable
            style={styles.button}
            onPress={() => console.warn('Explore Btn Clicked')}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeScreen;
