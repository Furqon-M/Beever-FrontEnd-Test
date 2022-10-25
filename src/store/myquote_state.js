import { createSlice } from '@reduxjs/toolkit'

// Slice
const myQuoteSlice = createSlice({
  name: 'myquote',
  initialState: {
    myquotes: []
  },
  reducers: {
    addMyFavoriteQuotes: (state, action) => {
      if (!state.myquotes.includes(action.payload)) {
        state.myquotes = [...state.myquotes, action.payload]
      }
    }
  }
})

export default myQuoteSlice.reducer

// Actions
export const { addMyFavoriteQuotes } = myQuoteSlice.actions
