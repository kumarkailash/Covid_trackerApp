import * as React from 'react';
// import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, DashBoard} from '../Screens';

const Tab = createBottomTabNavigator();
export default function TapNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={DashBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
