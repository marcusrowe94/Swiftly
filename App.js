import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreens from './screens/HomeScreens';
// setting up redux
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreens/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ceceff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
