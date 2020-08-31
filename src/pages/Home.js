import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import SpotVideos from '../components/SpotVideos';

export default function Home() {
  //   const [video, setVideo] = useState([]);
  return (
    <SafeAreaView style={styles.conteiner}>
      <View>
        <Text>Hello</Text>
        <SpotVideos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
