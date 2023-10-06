import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jan Kraus Fun Club</title>
        <meta property="og:title" content="Jan Kraus Fun Club" />
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
