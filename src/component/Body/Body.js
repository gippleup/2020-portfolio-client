import React, { Component } from 'react'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import BodyHeader from './BodyHeader.static/BodyHeader'

export class Body extends Component {
  get style() {
    return {
      backgroundColor: 'lightGrey',
      height: 'fit-content',
      paddingBottom: '200px'
    }
  }
  render() {
    return (
      <div style={this.style}>
        <BodyHeader/>
        <Portfolio/>
        <Contact/>
      </div>
    )
  }
}

export default Body
