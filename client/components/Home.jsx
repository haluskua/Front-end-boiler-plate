import React from 'react'

import { Link } from 'react-router-dom'

const Home = props => {

  return (
    // React.Fragment === <>
    <>
      <h1>Dev Academy!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/study-with-us/contact-us">Contact Us</Link></li>
          <li><Link to="/find-us/auckland">Auckland</Link></li>
          <li><Link to="/find-us/wellington">Wellington</Link></li>
          <li><Link to="/study-with-us">Study Here</Link></li>
        </ul>
    </>
  )
}

export default Home
