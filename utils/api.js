import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './_flashcards'

const demoDecks = require ('./demoDecks.json')

export async function getDecks() {
  const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  return decks
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {

}

export function addCardToDeck({ title, card }) {

}

export function getDemoDecks() {
  console.log('Getting demo decks')
  //console.log(demoDecks.React)
  return demoDecks
}