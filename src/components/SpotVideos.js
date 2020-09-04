import React, {useEffect, useState} from 'react';
import {
  View,
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
  const [chenge, setChenge] = useState('br');

  useEffect(() => {
    async function loadVideos() {
      const response = await api.get(`/youtube-trends?region=${chenge}`);
      const data = response.data;
      setVideos(data);
    }

    loadVideos();
  }, [chenge]);

  function chengeLocation() {
    if (chenge === 'br') {
      return setChenge('us');
    }

    setChenge('br');
  }

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
          <TouchableOpacity onPress={chengeLocation}>
            <Text style={styles.button}>Mudar região</Text>
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
  button: {
    borderWidth: 3,
    padding: 10,
    borderColor: '#FFF',
    color: '#FFF',
    textAlign: 'center',
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
