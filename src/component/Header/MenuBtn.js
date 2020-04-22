import React, { Component } from 'react'
import AnimeBtn from '../generic/AnimeMenu'

export class MenuBtn extends Component {
  get style() {
    return {
      zIndex: '200',
      position: 'fixed',
      top: 0,
      backgroundColor: 'rgba(255,255,255,0.5)',
      boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
      borderRadius: '15px',
      margin: '15px',
    }
  }
  render() {
    return (
      <div style={this.style}>
        <AnimeBtn onClick={this.props.toggle}/>
      </div>
    )
  }
}

export default MenuBtn
