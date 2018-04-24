import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `${title} quiz`,
    }
  }

  render() {
    return(
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz