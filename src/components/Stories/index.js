import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
// import { Container } from './styles';

const Stories = () => {
  return (
    <View style={styles.container_stories}>
      <ScrollView horizontal={true}>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
        <View style={styles.item_scroll_view}>
          <Image
            style={styles.item_image}
            source={{
              uri:
                'https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-0/s280x280/119194424_1203564559999784_8488182478713591033_o.jpg?_nc_cat=107&_nc_sid=365331&_nc_eui2=AeF8wfTMOJCo86e0PRs9VlHwoKNJBQ_4wr6go0kFD_jCvjoJ_u87dTMsi2q0XtxJkT0_RNYmHZIC6XdU6QwUxRra&_nc_ohc=DgLKHKb3CoMAX-YuZxX&_nc_ht=scontent.fsdu20-1.fna&tp=7&oh=09f62802b7464057dbdcc51e0842feb2&oe=5F82B501',
            }}
          />
        </View>
      </ScrollView>

      <Button
        titleStyle={styles.button_title}
        buttonStyle={styles.button}
        title="Ver todos os stories"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_stories: {
    paddingTop: 15,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  item_scroll_view: {
    width: 95,
    height: 160,
    marginEnd: 10,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item_image: {
    width: 95,
    height: 160,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(0, 74.9, 100, 0.1)',
    borderRadius: 10,
  },
  button_title: {
    color: 'blue',
  },
});

export default Stories;
