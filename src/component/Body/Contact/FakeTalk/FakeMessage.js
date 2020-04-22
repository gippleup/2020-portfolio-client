import React, { Component } from 'react';
import ProfilePic from './ProfilePic'
import Message from './Message';


export class FakeMessage extends Component {
  get divStyle() {
    return {
      textAlign: 'left',
      padding: `0px 10px`,
      backgroundColor: '',
      height: 'fit-content',
      marginTop: `${this.props.profile ? '20px' : '0px'}`
    }
  }

  render() {
    if (this.props.type === 'receive') {
      return (
        <div style={this.divStyle}>
          <div style={{display:'grid', gridTemplateColumns: `64px auto`}}>
            <ProfilePic src={this.props.profile}/>
            <div style={{display:'grid', gridTemplateRows: `${this.props.name ? '64px' : '0px'} fit-content`}}>
              <p style={{marginLeft:'10px', marginBottom: '0px'}}>{this.props.name}</p>
              <Message text={this.props.text}/>
            </div>
          </div>
        </div>
      )
    }

    if (this.props.type === 'send') {
      return (
        <div style={{
          textAlign: 'right', 
          marginBottom: '10px', 
          marginTop: this.props.prevMessage.type === 'receive' ? '16px' : 0
        }}>
          <Message type={this.props.type} text={this.props.text}/>
        </div>
      )
    }
  }
}

export default FakeMessage
