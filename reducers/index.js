import {
  SAVE_DECKS_TO_STORE, ADD_CARD_TO_STORE, SAVE_DECK_TITLE_TO_STORE
} from '../actions'
import { combineReducers } from 'redux';

const initialState = {
  decks: 'initial'
}

function decks (state = {}, action) {
  const { decks, card, title } = action

  switch (action.type) {

    case SAVE_DECKS_TO_STORE :
      return {
        ...state,
        ...decks
      }

    case ADD_CARD_TO_STORE :
      return {
        ...state,
        [card.title]: {
          ...state[card.title],
          questions: state[card.title].questions.concat(card.card)
        }
      }

    case SAVE_DECK_TITLE_TO_STORE :
      return {
        ...state,
        [title]: {
          title: [title],
          questions: []
        }
      }

    default :
      return state
  }
}

export default combineReducers({
  decks
})