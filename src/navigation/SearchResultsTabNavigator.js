import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResults from '../screens/searchResults';
const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResults}></Tab.Screen>
      <Tab.Screen name={'map'} component={SearchResults}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default SearchResultsTabNavigator;
