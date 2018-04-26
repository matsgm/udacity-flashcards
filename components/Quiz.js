import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDecks } from '../utils/api'
import Question from './Question'
import Result from './Result'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      questions: null,
      questionNumber: 1,
      quizFinished: false,
      correctAnswers: 0,
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `${title} quiz`,
    }
  }

  incrementQuestion = () => {
    this.setState(state => ({
      ...state,
      questionNumber: state.questionNumber + 1,
    }))
  }

  isQuizFinished = () => {
    return this.state.questionNumber === this.state.questions.length
  }

  handleAnswer = (answer) => {
    console.log('The answer is', answer)

    if (answer === 'correct') {
      this.setState(state => ({
        ...state,
        correctAnswers: state.correctAnswers + 1
      }))
    }

    if (this.state.questionNumber === this.state.questions.length) {
      this.setState(state => ({
        ...state,
        quizFinished: true
      }))
    } else {
      this.incrementQuestion()
    }
  }

  resetState() {
    this.setState(state => ({
      ...state,
      questionNumber: 1,
      quizFinished: false,
      correctAnswers: 0,
    }))
  }

  async componentDidMount() {
    const decks = await getDecks()

    //console.log('My deck', decks[this.props.navigation.state.params.title])

    this.setState( state => {
      return {
        ...decks[this.props.navigation.state.params.title],
        loading: false,
      }
    })
  }

  render() {
    return(
      <View style={{flex: 1}}>

        {this.state.loading === true ? <Text>loading</Text> : !this.state.quizFinished ? (
          <Question
            questionAnswer={this.state.questions[this.state.questionNumber-1]}
            questionNumber={this.state.questionNumber}
            totalQuestions={this.state.questions.length}
            handleAnswer={(answer) => this.handleAnswer(answer)}
          />
        
        ) : (
          <Result
            correctAnswers={this.state.correctAnswers}
            totalQuestions={this.state.questions.length}
            resetState={() => this.resetState()}
            back={() => this.props.navigation.goBack()}
          />
        )}
      </View>
    )
  }
}

export default Quiz