/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/searchResults';
const post1 = feed[0];
const post2 = feed[2];

const App: () => Node = () => {
  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <SafeAreaView style={{backgroundColor: 'white'}}>
          {/* <HomeScreen /> */}
          {/* <Post post={post2} /> */}
          <SearchResultScreen />
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;
