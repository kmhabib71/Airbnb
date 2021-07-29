import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './style';
import searchResult from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
const DestinationSearchResultScreen = props => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* input components */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are going?"
        value={inputText}
        onChangeText={setInputText}
        placeholderTextColor="lightgray"
      />
      {/* List of destination */}
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default DestinationSearchResultScreen;
