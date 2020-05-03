import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, // Al valor al que llega
      duration: 500, // tiempo en llegar
    }).start(); //inicia la animacion
  }, [animacion]);

  return (
    <View style={{opacity: animacion}}>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Animacion3
      </Animated.Text>
    </View>
  );
};

export default Animacion3;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
