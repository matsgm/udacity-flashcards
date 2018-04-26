import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Result extends Component {
  render() {
    const {correctAnswers, totalQuestions, back } = this.props
    const resultPercentage = ((parseInt(correctAnswers) / parseInt(totalQuestions)) * 100).toFixed(0)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Result 
        </Text>
        <Text style={styles.textPercentage}>
        {resultPercentage}%
        </Text>
        <Text>
          {correctAnswers} correct answers of {totalQuestions} questions.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.resetState()}
          >
            <Text style={styles.buttonText}>Start quiz again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => back()}
            >
            <Text style={styles.buttonText}>back to deck</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default Result

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  textPercentage: {
    fontSize: 50,
    textAlign: 'center',
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
})