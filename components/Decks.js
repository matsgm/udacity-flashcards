import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { saveDecksToStore } from '../actions'

class Decks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }


  async componentDidMount() {
    // get decks from AsyncStorage
    var decks = await getDecks()

    // dispatch decks to redux
    this.props.dispatchSaveDecksToStore(decks)
    
    // set loading to false
    this.setState( state => {
      return {
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
    

    const decks = this.props.decks
    return (
      <ScrollView>
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
      </ScrollView>

    )
  }
}

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


const mapDispatchToProps = (dispatch) => ({
  dispatchSaveDecksToStore: (decks) => dispatch(saveDecksToStore(decks))
})

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Decks)