import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

import Basics from './components/Basics';
import Props from './components/Props';
import State from './components/State';
import Style from './components/Style';
import HeigthWidth from './components/HeigthWidth';
import FlexBox from './components/FlexBox';
import txtInput from './components/TextInput';
import Touches from './components/Touches';
import ScrollView from './components/ScrollView';
import ListViews from './components/ListViews';
import NetWorking from './components/NetWorking';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class WhatToDo extends React.Component {
  static navigationOptions = { title: "What I have to do" }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
        <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
        (inspired of how you navigated into this)
      </Text>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Lasse Vistrup</Text>
        <Touchable onPress={() => navigate('Web')} title="What I have to do" />
        <Touchable onPress={() => navigate('Basics')} title="Basics" />
        <Touchable onPress={() => navigate('Props')} title="Props" />
        <Touchable onPress={() => navigate('State')} title="State" />
        <Touchable onPress={() => navigate('Style')} title="Style" />
        <Touchable onPress={() => navigate('HeigthWidth')} title="Height and Width" />
        <Touchable onPress={()=> navigate('flexbox')} title="FlexBox"/>
        <Touchable onPress={()=> navigate('txtInput')} title="TextInput"/>
        <Touchable onPress={()=> navigate('touches')} title="Touches"/>
        <Touchable onPress={()=> navigate('scrollView')} title="ScrollView"/>
        <Touchable onPress={()=> navigate('listViews')} title="ListViews"/>
        <Touchable onPress={()=> navigate('netWorking')} title="NetWorking"/>
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  Basics: { screen: Basics },
  Props: { screen: Props },
  Web: { screen: WhatToDo },
  State:{ screen: State},
  Style:{ screen: Style},
  HeigthWidth:{ screen: HeigthWidth},
  flexbox:{ screen: FlexBox},
  txtInput:{screen:txtInput},
  touches:{screen:Touches},
  scrollView:{screen:ScrollView},
  listViews:{screen:ListViews},
  netWorking:{screen:NetWorking}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})
