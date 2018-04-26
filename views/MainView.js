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

export default class MainView extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <ImageBackground 
        source={images.mainBg}
        style={mainViewStyle.backGroundImage}
      >
        <Image
        source={images.icon}
        />
        <Text style= {mainViewStyle.primaryText}>
          Kurrency
        </Text>
        <Text style={mainViewStyle.secondaryText}>
          Easy Exchange
        </Text>
        <View style={mainViewStyle.buttonContainer}>
          <Button
            title="Get Start"
            onPress={() => navigate('Converter')}
          />
        </View>
      </ImageBackground>
    )
  }
}