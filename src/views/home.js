import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sofia information Agency</title>
        <meta property="og:title" content="Sofia information Agency" />
      </Helmet>
      <a
        href="https://superhotstory.com/short/89209?stream_uuid=bd545113-12ca-4fc6-801c-ef18f39c997c&trek=1"
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
