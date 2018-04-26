import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';
import MainView from './views/MainView';
import ConverterView from './views/ConverterView';

const App = StackNavigator({
  Main: { screen: MainView },
  Converter: { screen: ConverterView }
});

export default App;