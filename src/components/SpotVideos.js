import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

import api from '../services/api';

export default function SpotVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const response = await api.get('/youtube-trends?region=br');
      const data = response.data;
      setVideos(data);
    }

    loadVideos();
  }, []);

  const renderItem = (video) => (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => Linking.openURL(video.item.videoUrl)}>
        <Image
          style={styles.image}
          source={{
            uri: video.item.videoThumbnail,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{video.item.videoTitle}</Text>
      <Text style={styles.text}>{video.item.videoDescription}</Text>
      <Text style={styles.channel}>Canal: {video.item.channelTitle}</Text>
    </View>
  );

  return (
    <View style={styles.conteiner}>
      <View>
        <View>
          <Text style={styles.textHeader}>MOBIPLUS</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>Brasil</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Estados Unidos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{marginTop: 20, marginBottom: 20}}
        contentContainerStyle={styles.list}
        data={videos}
        renderItem={renderItem}
        keyExtractor={(video, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#202020',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 3,
    padding: 10,
    borderColor: '#FFF',
    color: '#FFF',
    textAlign: 'center',
    marginLeft: 5,
  },
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#404040',
    marginTop: 20,
    padding: 40,
  },
  image: {
    alignSelf: 'center',
    height: 220,
    width: 285,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'justify',
  },
  channel: {
    color: '#FFFFFF',
    fontSize: 18,
    paddingTop: 10,
  },
});
