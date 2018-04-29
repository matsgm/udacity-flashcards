import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './_flashcards'

const demoDecks = require ('./demoDecks.json')

export async function getDecks() {
  console.log('getDecks()')
  try {
    const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    console.log('awaited asyncstorage')
    if (decks !== null) {
      // we have data
      console.log('Returning decks')
      return JSON.parse(decks)
    } else {
      console.log(`Returning demoDecks`)
      mergeDecks(demoDecks)
      return demoDecks
    }
  } catch (error) {
    console.log(`Error getting decks`, error)
  }
  
}

export async function getDeck(id) {
  console.log('getting deck')
  try {
    const result = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    //console.log('Got deck', JSON.parse(result))
    return JSON.parse(result)
  } catch (error) {
    console.log('Error with getDeck', error)
    return error
  }
}

export async function saveDeckTitle(title) {
  console.log('saveDeckTitle. Title: ', title)
  try {
    const result = await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    }))
  } catch (error) {
    console.log('Error in saveDeckTitle', error)
  }
}


export async function addCardToDeck({ title, updatedQuestions }) {
  console.log('api: addCardToDeck. UpdatedDeck: ', updatedQuestions)
  try {
    const result = await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        questions: updatedQuestions
      }
    }))
    console.log('AddCard OK')
  } catch (error) {
    console.log('Error with addCard', error)
  }
}

export async function mergeDecks(data) {
  try {
    const result = await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    console.log('Merge OK')
  } catch (error) {
    console.log('Error with merge', error)
  }
}