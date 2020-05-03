/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {StyleSheet, Text, View} from 'react-native';

import Animacion7 from './components/Animacion7';
import React from 'react';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Text>Animaciones</Text>
        <Animacion7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
