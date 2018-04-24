import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import { Constants } from 'expo'

//TODO: Remove after development
console.disableYellowBox = true

function FlashCardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
  },
}, {
  navigationOptions: {
    header: null
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Quiz: {
    screen: Quiz,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlashCardsStatusBar backgroundColor={'#000000'} barStyle="light-content" />
        <MainNavigator/>
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
