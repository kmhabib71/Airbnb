import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './style';
import searchResult from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './suggestionRow';
const DestinationSearchResultScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* input components */}

      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.textInput,
        }}
        textInputProps={{placeholderTextColor: 'lightgrey'}}
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        query={{
          key: 'AIzaSyDtulQoh0p_QM93AIlskb3evA6BluosgLM',
          language: 'en',
          types: '(cities)',
        }}
        onFail={error => console.error(error)}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};
export default DestinationSearchResultScreen;
