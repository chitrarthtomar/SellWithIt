import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './app/screens/login/Login';

export default function App() {
  let x = 1;
  console.log("app executed!")
  return (
    <Login></Login>
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
