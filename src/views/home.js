import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Praga News Agency</title>
        <meta property="og:title" content="Praga News Agency" />
      </Helmet>
      <a
        href="https://superfeedstory.com/short/87839?stream_uuid=f62b5dcc-dbca-4be8-b4f4-7f4394e73af2&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bgbt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
