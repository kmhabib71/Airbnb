import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchResultScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import postScreen from '../screens/postScreen';
const Stack = createStackNavigator();
const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchResultScreen}
          options={{
            title: 'Search your destination?',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
        <Stack.Screen
          name={'Post'}
          component={postScreen}
          options={{
            title: 'Accomodation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
