import React, { Component } from 'react'

export class Particle extends Component {
  render() {
    return (
      <div style={{
        backgroundColor:'red',
        borderRadius: '16px',
        height: '32px',
        width: '32px',
        position: 'absolute',
        left: '-16px',
        top: '-16px'}}>
      </div>
    )
  }
}

export default Particle
