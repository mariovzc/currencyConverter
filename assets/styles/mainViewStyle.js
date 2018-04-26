import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native';

//A continuación se definen los estilos de la pantalla de Login

const mainViewStyle = StyleSheet.create({
  backGroundImage: {
    flex: 1,
    flexDirection: 'column',
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryText: {
    color: '#fff',
    fontSize: 30
  },
  secondaryText: {
    color: '#ffffff'
  },
  buttonContainer: {
    position: 'absolute',
    height: 40,
    left: 0, 
    top: Dimensions.get('window').height - 65,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default mainViewStyle