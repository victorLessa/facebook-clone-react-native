import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const posts = () => {
  return (
    <View style={styles.post_container}>
      <View style={styles.header_post}>
        <View style={styles.profile_post}>
          <View style={{marginRight: 10}}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://scontent.fsdu4-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/91347109_10162274034793504_8138457770262265856_o.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_eui2=AeFMSk324PaYhJzZSWiDmkygEEOkiNMLksgQQ6SI0wuSyNtTn9um2N7fVia9DSwngFfYJKUe3qciqLEVgIXKWA8l&_nc_ohc=RmzjFnxES3AAX-5jmKL&_nc_ht=scontent.fsdu4-1.fna&oh=6a82bd5f483ff2b423132c12080ade40&oe=5F87AE87',
              }}
              size="small"
            />
            <Badge
              status="success"
              containerStyle={{
                position: 'absolute',
                top: 25,
                left: 25,
              }}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: '700', fontSize: 16}}>
              Esporte Interativo
            </Text>
            <Text>23 min</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: -10}}>...</Text>
        </View>
      </View>
      <View style={styles.description_post}>
        <Text>
          Após queda na Champions, jogador brasileiro ESTÁ DE SAÍDA DO BENFICA!
          https://bit.ly/3c3lOWf
        </Text>
      </View>
      <View style={styles.body_post}>
        <Image
          style={{height: 250}}
          source={{
            uri:
              'https://external.fsdu4-1.fna.fbcdn.net/safe_image.php?d=AQBzn0EGSu_ysTxc&w=500&h=261&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDEzMjY2NDMwOTE5MjQyODk6NzQzNzIzMDk3&cfs=1&ext=jpg&_nc_eui2=AeEhVitlOH1zCnTPvlOIICVMUbRrnwkjzGZRtGufCSPMZpQo5jVwfdDc3-UlYrbJARuuqKNgoAhizKvmJwD4BZit&_nc_cb=1&_nc_hash=AQBPpb-IKcfKPfv1',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post_container: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  header_post: {
    padding: 15,
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  profile_post: {
    flexDirection: 'row',
  },
  body_post: {
    backgroundColor: 'white',
    paddingBottom: 15,
  },
  description_post: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
});

export default posts;
