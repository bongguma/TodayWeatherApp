import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text Style={styles.text}>Hello! yellow</Text>
      </View>
      <View style={styles.greenView}>
        <Text Style={styles.text}>Hello! green</Text>
      </View>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowView: {
    flex: 1,
    backgroundColor:'yellow'
  },
  greenView: {
    flex: 1,
    backgroundColor:'green'
  },
  text: {
    color:'black',
  },
});
