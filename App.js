import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './app/screens/home/home';
import Login from './app/screens/login/Login';

export default function App() {
  let x = 1;
  console.log("app executed!")
  return (
    // <Login></Login>
    <Home></Home>
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
