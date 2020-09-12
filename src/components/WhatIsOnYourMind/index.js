import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WhatIsOnYourMind = () => {
  return (
    <View style={styles.container}>
      <View style={styles.thinking}>
        <View style={styles.image_container}>
          <Image
            style={styles.profile}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-1/p480x480/49002978_1800710170039801_4741842678755360768_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_eui2=AeF8dkW6X2RbWa-h-EBKYqWog6-JyzP3XsmDr4nLM_deyc4VKTSJ6GXPm9IORChRi6tEJgC4g5o_jHrRAN_VUfNo&_nc_ohc=kjDFGmgJrEEAX8OhQP4&_nc_ht=scontent.fsdu20-1.fna&tp=6&oh=bb06150e360c799d45c5a4d8fefca95a&oe=5F82F8BE',
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            value={'No que você está pensando?'}
          />
        </View>
      </View>
      <View style={styles.sub_menus}>
        <View style={styles.item_sub_menu}>
          <Ionicons
            style={{marginRight: 10}}
            name="ios-videocam"
            size={20}
            color="red"
          />
          <Text>Ao vivo</Text>
        </View>
        <View
          style={{
            height: 20,
            borderLeftWidth: 0.5,
            borderLeftColor: '#333',
          }}
        />
        <View style={styles.item_sub_menu}>
          <AntDesign
            style={{marginRight: 10}}
            name="picture"
            size={20}
            color="green"
          />
          <Text>Foto</Text>
        </View>
        <View
          style={{
            height: 20,
            borderLeftWidth: 0.5,
            borderLeftColor: '#333',
          }}
        />
        <View style={styles.item_sub_menu}>
          <Ionicons
            style={{marginRight: 10}}
            name="ios-videocam"
            size={20}
            color="purple"
          />
          <Text>Sala</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopColor: '#333',
  },
  thinking: {
    padding: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.2,
    borderTopColor: '#333',
    flexDirection: 'row',
  },
  profile: {
    width: 40,
    height: 40,
  },
  image_container: {
    width: 40,
    height: 40,
    borderRadius: 200,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  input: {
    height: 40,
    paddingLeft: 20,
    marginLeft: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  sub_menus: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  item_sub_menu: {
    flexDirection: 'row',
  },
});

export default WhatIsOnYourMind;
