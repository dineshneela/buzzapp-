
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBookScreen from './screens/Fb';
import InstaScreen from './screens/In'
export default class App extends React.Component{
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
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
  FaceBook: {screen: FaceBookScreen},
  Instagram: {screen: InstaScreen}
})
const AppContainer =createAppContainer(TabNavigator)