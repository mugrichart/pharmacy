import React from 'react'

function Top({page}) {
  return (
      <section className="main--top">
          <h1>{page[0]}</h1>
          <div className="main--welcome-message">Welcome Mugrich !</div>
      </section>
    )
  }

export default Top
