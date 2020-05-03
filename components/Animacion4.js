import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Al valor al que llega
      duration: 500, // tiempo en llegar
    }).start(); //inicia la animacion
  }, [animacion]);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360dg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View style={{opacity: animacion}}>
      <Animated.View style={[styles.caja, estiloAnimacion]} />
    </View>
  );
};

export default Animacion4;

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
