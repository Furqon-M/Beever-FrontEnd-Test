import { createSlice } from '@reduxjs/toolkit'
import { quoteAPI } from '../provider/api'

// Slice
const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: '',
    quotes: []
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload
    },
    setFavoriteQuote: (state, action) => {
      if (!state.quotes.includes(action.payload)) {
        state.quotes = [...state.quotes, action.payload]
      }
    }
  }
})

export default quoteSlice.reducer

// Actions
export const { setQuote, setFavoriteQuote } = quoteSlice.actions

export const getQuoteAsync = () => async dispatch => {
  try {
    const result = await quoteAPI.get()
    if (result?.data && result?.data?.quote) {
      dispatch(setQuote(result?.data?.quote))
    }
  } catch (e) {
    return console.error(e.message)
  }
}
