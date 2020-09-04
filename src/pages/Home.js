import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import SpotVideos from '../components/SpotVideos';

export default function Home() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>MOBIPLUS</Text>
        </View>
        <SpotVideos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    padding: 20,
  },
});
