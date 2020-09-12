import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
// import { Container } from './styles';

import WhatIsOnYourMind from '../../components/WhatIsOnYourMind/index';
import CreateRoom from '../../components/CreateRoom/index';
import Stories from '../../components/Stories/index';
const Home = () => {
  return (
    <View>
      <WhatIsOnYourMind />
      <CreateRoom />
      <Stories />
    </View>
  );
};
export default Home;
