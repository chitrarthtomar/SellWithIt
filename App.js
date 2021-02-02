import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import Edit from './app/screens/edit/edit';
import Home from './app/screens/home/Home';
// import Login from './app/screens/login/Login';

export default function App() {
  let x = 1;
  console.log("app executed!")
  return (
    <View style={styles.AndroidSafeArea}>
      {/* <Home></Home> */}
      <Edit></Edit>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#EEF0F3",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
