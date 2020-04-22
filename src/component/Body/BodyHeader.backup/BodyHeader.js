import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Particles from './Particles'
import Particle from './Particle'

export class BodyHeader extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.createParticleEffect = this.createParticleEffect.bind(this);
  }
  createParticleEffect(e) {
    ReactDOM.render(
      // <Particle/>,
      <Particles particle={<Particle/>} x={e.clientX} y={e.clientY}/>, 
      this.canvas.current)
  }
  render() {
    return (
      <div 
      ref={this.canvas}
      onClick={this.createParticleEffect}
      style={{
        position:'relative', 
        height: window.outerHeight, 
        backgroundColor: 'black'}}>
      </div>
    )
  }
}

export default BodyHeader
