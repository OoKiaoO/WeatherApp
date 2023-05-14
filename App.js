import React from 'react';
import { View, StyleSheet } from 'react-native';
import City from './src/views/City';
import CurrentWeather from './src/views/CurrentWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
