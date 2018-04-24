import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { getDecks, getDemoDecks } from '../utils/api'

class Decks extends Component {
  state = {
    React: {
      title: 'Other'
    }
  }
  componentDidMount(){

    /*
    var decks = getDecks()

    if (!decks) decks = getDemoDecks()

    this.setState( state => {
      return {
        ...decks
      }
    })
    */

  }

  render() {
    const decks = getDemoDecks()

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(o => {
          console.log(decks[o].title)
          return (
            <View key={o} style={styles.deck}>
              <Text>{decks[o].title}</Text>
              <Text>{decks[o].questions.length} cards</Text>
              <Button
                title="Start quiz"
                onPress={() => this.props.navigation.navigate('Quiz', {title: decks[o].title})}
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

