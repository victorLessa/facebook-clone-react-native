import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../pages/Home/index';
const routes = createMaterialTopTabNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home Page',
        tabBarIcon: ({}) => {
          <View>
            <Icon name="home" size={30} color="#900" />,
          </View>;
        },
      },
    },
  },
  {
    order: ['HomePage', 'ProfilePage'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
    },
  },
);
export default routes;
