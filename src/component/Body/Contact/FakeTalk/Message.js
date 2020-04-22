import React, { Component } from 'react'

export class Message extends Component {
  get containerStyle() {
    return {
      marginLeft: this.props.type === 'send' ? '25px' : '10px',
      marginRight: '15px',
      backgroundColor: `${this.props.type === 'send' ? 'white' : 'lightYellow'}`,
      padding: '10px',
      borderRadius: '10px',
      display: 'inline-block',
      width: 'fit-content',
      height: 'fit-content',
      lineBreak: 'anywhere',
    }
  }


  render() {
    return (
      <div style={this.containerStyle}>
        {this.props.text}
      </div>
    )
  }
}

export default Message
