import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import quote from './quote_state'
import myQuote from './myquote_state'

const reducer = combineReducers({
  quote,
  myQuote
})

const store = configureStore({
  reducer
})

export default store
