import {Animated, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // Al valor al que llega
      duration: 500, // tiempo en llegar
    }).start(); //inicia la animacion
  }, [animacion]);

  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.texto}>Animacion1</Text>
    </Animated.View>
  );
};

export default Animacion1;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
