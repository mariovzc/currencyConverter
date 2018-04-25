import React from 'react'
import { 
  AppRegistry,
  ImageBackground,
  Text
 } from 'react-native'
import images from './assets/images/images'
import mainViewStyle from './assets/styles/mainViewStyle';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground 
        source={images.mainBg}
        style={mainViewStyle.backGroundImage}
      >
      <Text
        >
          {32 + 8}
        </Text>
      </ImageBackground>
    )
  }
}