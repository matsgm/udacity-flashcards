import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { saveDeckTitleToStore } from '../actions'

class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ' '
    }
  }

  async handleSubmitTitle(title) {
    console.log('Handlesubmit. Title:', title)
    await saveDeckTitle(title)
    this.props.dispatchSaveDeckTitleToStore(title)
    // navigate back and then to new deck. This makes the back button work correctly.
    this.props.navigation.goBack()
    this.props.navigation.navigate('Deck', {...this.props.decks[title]})
  }

  render() {
    const {title} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Deck title</Text>
          <TextInput
            editable={true}
            multiline={true}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            placeholder={title}
            onChangeText={ title => this.setState({
              title
            })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSubmitTitle(this.state.title) }
            >
            <Text style={styles.buttonText}>Create deck</Text>
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
    width: '50%',
    backgroundColor: '#ffffff',
    marginBottom: 5
  },
  text: {
    fontSize: 25,
  }
})

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveDeckTitleToStore: (title) => dispatch(saveDeckTitleToStore(title))
})

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(NewDeck)