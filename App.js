/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Router from './src/navigation/Router';
// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';
// import feed from './assets/data/feed';
// import SearchResultScreen from './src/screens/searchResults';
// import DestinationSearchResultScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';
// const post1 = feed[0];
// const post2 = feed[2];

const App: () => Node = () => {
  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Router />
        {/* <SafeAreaView style={{backgroundColor: 'white'}}> */}
        {/* <HomeScreen /> */}
        {/* <Post post={post2} /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchResultScreen /> */}
        {/* <GuestsScreen /> */}
        {/* </SafeAreaView> */}
      </View>
    </>
  );
};

export default App;
