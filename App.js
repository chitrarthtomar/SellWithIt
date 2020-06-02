import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let x = 1;
  console.log("app executed!")
  return (
    <View style={styles.container}>
      <Text>Stay Home, Stay Safe!!</Text>
      <Text>Social Distancing is the way to go!</Text>
      <Button title="Won't do anything :)" />
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
});
