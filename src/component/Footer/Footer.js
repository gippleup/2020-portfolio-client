import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div style={{
        position: 'absolute',
        bottom: 0,
        marginLeft: '20px',
        marginRight: '20px',
      }}>
        <p>This is a footer content. Put name, copyright, etc.</p>
      </div>
    )
  }
}

export default Footer
