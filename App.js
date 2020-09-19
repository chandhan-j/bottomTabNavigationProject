import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookScreen from './screens/Facebook'
import InstagramScreen from './screens/Instagram' 
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator);