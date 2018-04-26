import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './_flashcards'

const demoDecks = require ('./demoDecks.json')

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    if (decks !== null) {
      // we have data
      console.log('Returning decks')
      return decks
    } else {
      console.log(`Returning demoDecks`)
      return demoDecks
    }
  } catch (error) {
    console.log(`Error getting decks`, error)
  }
  
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {

}

export function addCardToDeck({ title, card }) {

}
