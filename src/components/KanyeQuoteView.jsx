import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuoteAsync, setFavoriteQuote } from '../store/quote_state'

export default function KanyeQuoteView() {
  const dispatch = useDispatch()
  const { quote, quotes } = useSelector(state => state.quote)

  useEffect(() => {
    dispatch(getQuoteAsync())
  }, [])

  return (
    <section style={{ textAlign: 'center' }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: '300px' }}
      />

      <h1 style={{ fontSize: '40px', marginTop: '10px' }}>Kanye-West Quote</h1>
      <h3 style={{ fontSize: '16px' }}>{quote}</h3>

      <button onClick={() => dispatch(getQuoteAsync())}>Get Quote</button>
      <button onClick={() => dispatch(setFavoriteQuote(quote))}>Add Favorite</button>
      <div style={{ marginTop: 20 }}>
        {quotes.map((item, index) => {
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
