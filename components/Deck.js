import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { getDeck, addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addCardToStore } from '../actions'

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `${title} deck`,
    }
  }

  
  async componentDidMount() {
    const title = this.props.navigation.state.params.title
    const deck = await getDeck(title)
    console.log('Retrieved deck', deck)
    this.setState( state => {
      return {
        deck: {
          ...deck[title],
        },
        loading: false
      }
    })
  }
  

  async addCard({ title, card }) {
    console.log('addCard. card:', card)
    const updatedQuestions = this.state.deck.questions.concat(card)
    
    await addCardToDeck({title, updatedQuestions})

    this.props.dispatchAddCardToStore({title, card})

    this.setState( state => ({
        ...state,
        deck: {
          ...state.deck,
          questions: updatedQuestions
        }
      })
    )

    console.log('State', this.state)
    
  }

  async handleSubmit(card) {
    console.log('Handling submit. Card: ', card)
    const title = this.props.navigation.state.params.title
    await this.addCard({ title, card })
    this.props.navigation.pop()
  }

  render() {
    if (this.state.loading === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    const { title } = this.props.navigation.state.params
    const { questions } = this.props.decks[title]
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>{title} deck</Text>
          <Text style={styles.text}>{questions.length} cards</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Quiz', {...this.props.navigation.state.params}) }
            >
            <Text style={styles.buttonText}>Start quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCard', {...this.props.navigation.state.params, handleSubmit: (card) => this.handleSubmit(card)}) }
            >
            <Text style={styles.buttonText}>Add card</Text>
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

const mapDispatchToProps = (dispatch) => ({
  dispatchAddCardToStore: (card) => dispatch(addCardToStore(card))
})

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Deck)