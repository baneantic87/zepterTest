import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { ColorConstants } from './src/helpers/ColorConstants';
import Router from './src/Router';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <Router />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
})

export default App;