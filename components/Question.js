import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

class Question extends Component {
  state = {
    hideAnswer : true
  }

  toggleAnswer = () => {
   this.state.hideAnswer === true ? this.setState(state => ({ hideAnswer: false }))  : this.setState(state = ({hideAnswer: true})) 
  }

  render() {
    const { question, answer } = this.props.questionAnswer

    return(
      
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>
            {this.props.questionNumber} / {this.props.totalQuestions}
          </Text>
          <Text style={styles.question}>
            {this.state.hideAnswer == true ? question : answer}
          </Text>
          <TouchableOpacity style={[styles.button, styles.blue]} onPress={() => this.toggleAnswer()}>
            <Text style={styles.buttonText}>{this.state.hideAnswer === true ? "Show Answer" : "Hide Answer"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.green]} onPress={() => this.props.handleAnswer('correct')}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={() => this.props.handleAnswer('wrong')}>
            <Text style={styles.buttonText}>Wrong</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: '75%',
    backgroundColor: '#dddddd',
    margin: 5,
    padding: 10,
    borderRadius: 2,
  },
  question: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    width: '50%',
    height: 40,
    backgroundColor: '#5495ff',
  },
  blue: {
    backgroundColor: '#5495ff',
  },
  red: {
    backgroundColor: '#ff6868',
  },
  green: {
    backgroundColor: '#7dd370'
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default Question

