export const SAVE_DECKS_TO_STORE = 'SAVE_DECKS_TO_STORE'
export const ADD_CARD_TO_STORE = 'ADD_CARD_TO_STORE'
export const SAVE_DECK_TITLE_TO_STORE = 'SAVE_DECK_TITLE_TO_STORE'

export function saveDecksToStore (decks) {
  return {
    type: SAVE_DECKS_TO_STORE,
    decks
  }
}

export function addCardToStore (card) {
  return {
    type: ADD_CARD_TO_STORE,
    card
  }
}

export function saveDeckTitleToStore (title) {
  return {
    type: SAVE_DECK_TITLE_TO_STORE,
    title
  }
}