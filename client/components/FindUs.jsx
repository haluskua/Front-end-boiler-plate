import React from 'react'

const FindUs = props => {

  return (
    // React.Fragment === <>
    <>
      <h1>Find Us in {props.match.params.campus.toUpperCase()}!</h1>
    </>
  )
}

export default FindUs
