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

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <SafeAreaView style={{backgroundColor: 'white'}}>
          {/* <HomeScreen /> */}
          <Post />
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;
