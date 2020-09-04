import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import SpotVideos from '../components/SpotVideos';

async function handleSubmit() {
  navigation.navigate('Home');
}

export default function Twitter() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>MOBIPLUS</Text>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Youtube</Text>
          </TouchableOpacity>
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
  button: {
    borderWidth: 3,
    padding: 10,
    borderColor: '#FFF',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 5,
  },
});
