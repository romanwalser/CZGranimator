import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CZ News Praha</title>
        <meta property="og:title" content="CZ News Praha" />
      </Helmet>
      <a
        href="https://cznews.chuimain.online/"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/czbutton.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
