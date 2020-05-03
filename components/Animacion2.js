import {Animated, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450, // Al valor al que llega
      duration: 1000, // tiempo en llegar
    }).start(); //inicia la animacion
  }, [animacion]);

  return (
    <Animated.View style={[styles.caja, {width: animacion, height: animacion}]}>
      <Text style={styles.texto}>Animacion2</Text>
    </Animated.View>
  );
};

export default Animacion2;

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
