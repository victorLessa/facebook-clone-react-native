import React from 'react';
import {View, ScrollView} from 'react-native';
// import { Container } from './styles';

import WhatIsOnYourMind from '../../components/WhatIsOnYourMind/index';
import CreateRoom from '../../components/CreateRoom/index';
import Stories from '../../components/Stories/index';
import Posts from '../../components/Posts/index';
const Home = () => {
  return (
    <ScrollView>
      <View>
        <WhatIsOnYourMind />
        <CreateRoom />
        <Stories />
        <Posts />
      </View>
    </ScrollView>
  );
};
export default Home;
