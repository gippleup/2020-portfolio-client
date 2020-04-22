import React, { Component } from 'react'

export class ProfilePic extends Component {
  get divStyle() {
    let size = 64
    return {
      display: 'inline-block',
      borderRadius: '50%',
      overflow: 'hidden',
      height: size + 'px',
      width: size + 'px',
    }
  }

  render() {
    return (
      <div style={this.divStyle}>
        <img style={{width:'100%', height:'100%'}} alt='' src={this.props.src || ''}></img><br/>
      </div>
    )
  }
}

export default ProfilePic
