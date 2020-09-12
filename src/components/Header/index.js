import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../../pages/Home/index';
import Groups from '../../pages/Groups/index';
import Notification from '../../pages/Notification/index';
import Menu from '../../pages/Menu/index';
import Watch from '../../pages/Watch/index';

const Tab = createMaterialTopTabNavigator();

const Header = () => {
  return (
    <NavigationContainer>
      <View>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                color: 'blue',
                fontWeight: '700',
                fontSize: 24,
              }}>
              Facebook
            </Text>
          </View>
          <View styles={styles.icons}>
            <View style={styles.search}>
              <Icon name="search" size={20} color="#333" />
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Icon name={'home'} size={25} color={color} />;
            } else if (route.name === 'Groups') {
              return <MaterialIcons name={'groups'} size={25} color={color} />;
            } else if (route.name === 'Watch') {
              return <MaterialIcons name={'live-tv'} size={25} color={color} />;
            } else if (route.name === 'Notification') {
              return (
                <MaterialIcons name={'notifications'} size={25} color={color} />
              );
            } else if (route.name === 'Menu') {
              return <MaterialIcons name={'menu'} size={25} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          showIcon: true,
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            elevation: 0,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Watch" component={Watch} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  icons: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  search: {
    backgroundColor: '#dcdcdc',
    padding: 5,
    borderRadius: 20,
  },
});

export default Header;
