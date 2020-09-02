import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import SpotVideos from '../components/SpotVideos';

export default function Home() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View>
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
