import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMyFavoriteQuotes } from '../store/myquote_state'

export default function PersonalQuoteView() {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const { myquotes } = useSelector(state => state.myQuote)

  const handleSubmit = e => {
    e.preventDefault()
    if (!myquotes.includes(value)) {
      dispatch(addMyFavoriteQuotes(value))
      setValue('')
    }
  }

  const handleChange = e => {
    e.preventDefault()
    const text = e.target.value
    setValue(text)
  }

  return (
    <section style={{ textAlign: 'center', marginTop: '60px' }}>
      <hr style={{ maxWidth: '30%' }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type={`submit`} onSubmit={handleSubmit} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: 20 }}>
        {myquotes.map((item, index) => {
          return (
            <div key={index} style={{ marginBottom: 10 }}>
              {item}
            </div>
          )
        })}
      </div>
    </section>
  )
}
