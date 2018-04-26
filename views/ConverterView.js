import React from 'react'
import { 
  AppRegistry,
  ImageBackground,
  Text,
  Image,
  View
 } from 'react-native'
import images from '../assets/images/images'
import mainViewStyle from '../assets/styles/mainViewStyle';
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
        source={images.mainBg}
        style={mainViewStyle.backGroundImage}
      >
        <Text style= {mainViewStyle.primaryText}>
          Kurrency
        </Text>
        <Text style={mainViewStyle.secondaryText}>
          Easy Exchange
        </Text>
      </ImageBackground>
    )
  }
}