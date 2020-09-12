import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';
// import { Container } from './styles';

const CreateRoom = () => {
  return (
    <View style={styles.creat_room}>
      <View style={styles.create_room_icon}>
        <Ionicons
          style={{marginRight: 10}}
          name="ios-videocam"
          size={25}
          color="purple"
        />
        <Text style={{fontSize: 12, color: 'blue'}}>Criar {'\n'} sala</Text>
      </View>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="small"
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            bottom: 5,
            right: 4,
          }}
        />
      </View>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="small"
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            bottom: 5,
            right: 4,
          }}
        />
      </View>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="small"
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            bottom: 5,
            right: 4,
          }}
        />
      </View>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="small"
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            bottom: 5,
            right: 4,
          }}
        />
      </View>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="small"
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            bottom: 5,
            right: 4,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creat_room: {
    height: 60,
    paddingTop: 10,
    marginTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  create_room_icon: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'skyblue',
  },
});

export default CreateRoom;
