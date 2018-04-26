import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `${title} deck`,
    }
  }

  render() {
    const { questions } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>Deck</Text>
          <Text style={styles.text}>{questions.length} cards</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Quiz', {...this.props.navigation.state.params}) }
          >
            <Text style={styles.buttonText}>Start quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Deck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '75%',
    backgroundColor: '#dddddd',
    margin: 5,
    padding: 10,
    borderRadius: 2,
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    width: '50%',
    height: 40,
    backgroundColor: '#5495ff',
  },
  deckTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})