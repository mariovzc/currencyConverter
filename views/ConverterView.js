import React from 'react'
import { 
  AppRegistry,
  ImageBackground,
  Text,
  Image,
  View
 } from 'react-native'
import images from '../assets/images/images'
import mainViewStyle from '../assets/styles/converterViewStyle';
import Button from '../components/CustomButton';

export default class ConverterView extends React.Component {
  static navigationOptions = {
    header: null
  }
  goTo() {

  }
  render() {
    return (
      <ImageBackground 
        source={images.converterBg}
        style={mainViewStyle.backGroundImage}
      >
      </ImageBackground>
    )
  }
}