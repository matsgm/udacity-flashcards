import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 'Question',
      answer: 'Answer'
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `Add card to ${title} deck`,
    }
  }



  render() {
    const { handleSubmit } = this.props.navigation.state.params
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Question</Text>
          <TextInput
            editable={true}
            multiline={true}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            value={this.state.question}
            onChangeText={ text => this.setState({
              question: text
            })}
          />
          <Text style={styles.text}>Answer</Text>
          <TextInput
            editable={true}
            multiline={true}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            value={this.state.answer}
            onChangeText={ text => this.setState({
              answer: text
            })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit(this.state) }
            >
            <Text style={styles.buttonText}>Submit card</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

export default AddCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
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
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    width: '75%',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 25,
  }
})