import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Honey Shop</title>
        <meta property="og:title" content="Honey shop" />
      </Helmet>
      <a
        href="https://superfeedstory.com/short/70155?stream_uuid=10167c28-115d-4963-8af8-8983cac6c1c0&trek=1"
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
