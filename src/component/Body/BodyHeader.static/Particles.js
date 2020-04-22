import React, { Component } from 'react'

export class Particles extends Component {
  renderParticle({scale, x, y}) {
    return(
      <div style={{position:'absolute', left:x, top:y, transform:`scale(${scale})`}}>
        {this.props.particle}
      </div>
    )
  }

  renderLoop(count, variables) {
    let results = [];
    for (let i = 0; i < count; i += 1) {
      results.push(this.renderParticle(variables))
    }
    return results;
  }

  explode() {
    return (
      this.renderLoop(10, {
        scale: 1,
        x: this.props.x,
        y: this.props.y,
      })
    )
  }

  render() {
    return (
      this.explode()
    )
  }
}

export default Particles
