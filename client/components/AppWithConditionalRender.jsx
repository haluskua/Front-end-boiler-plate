import React from 'react'

import ContactUs from './ContactUs'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'home'
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    event.preventDefault()

    this.setState({
      page: 'contact-us'
    })

    console.log('click')
  }

  render() {
    return (
      // React.Fragment === <>
      <>
        <h1>Dev Academy!</h1>
        <ul>
          <li><a href="contact-us" onClick={this.handleClick}>Contact Us</a></li>
          <li><a href="find-us">Find Us</a></li>
          <li><a href="study-here">Study Here</a></li>
        </ul>

        {this.state.page === 'contact-us' && <ContactUs />}
      </>
    )
  }
}

export default App
