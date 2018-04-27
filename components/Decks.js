import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { getDecks } from '../utils/api'

class Decks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    this.fetchDecksForState()
  }

  componentDidMount() {
    //this.fetchDecksForState()
  }

  async fetchDecksForState() {

    var decks = await getDecks()

    this.setState( state => {
      return {
        decks: {
          ...decks,
        },
        loading: false
      }
    })
  }


  render() {
    if (this.state.loading === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    const decks = this.state.decks
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(o => {
          console.log(decks[o].title)
          return (
            <View key={o} style={styles.deck}>
              <Text>{decks[o].title}</Text>
              <Text>{decks[o].questions.length} cards</Text>
              <Button
                title="Go to deck"
                onPress={() => this.props.navigation.navigate('Deck', {...decks[o]})}
              />
            </View>
          )
        })}

      </View>
    )
  }
}

export default Decks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  deck: {
    width: '90%',
    height: 100,
    backgroundColor: '#dddddd',
    margin: 5,
    padding: 10,
    borderRadius: 2,
  }
})

