import React, { Component } from 'react'
import FakeMessage from './FakeMessage'
import SendMessage from './SendMessage'
import img from './profilePic.jpeg';

const initialMessage = {
  type: 'receive',
  name: 'Michael',
  profile: img,
  text: 'Hello there!'
}

export class FakeTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [initialMessage],
      prevMessage: null,
    }
    this.messages = React.createRef();

    this.sendMessage = this.sendMessage.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    let msgDiv = this.messages.current;
    msgDiv.scrollTop = msgDiv.scrollHeight;
  }

  sendMessage({text, type, name, profile}) {
    console.log(text);
    let newMessage = {
      name,
      profile,
      text,
      type,
      date: Date.now(),
    }
    this.setState({
      messages: this.state.messages.concat(newMessage)
    })
    this.scrollToBottom();
  }

  get sendHeight() {
    return 76
  }

  get containerStyle() {
    return {
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 0,
      paddingRight: 0,
      height: 'fit-content',
      backgroundColor: 'pink',
      display: 'grid',
      gridTemplateRows: `600px ${this.sendHeight}px`,
      borderRadius: '20px',
      boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
    }
  }

  renderMessages() {
    return this.state.messages.map((msg, i) => {
      return <FakeMessage 
      prevMessage={this.state.messages[i-1]} 
      key={i} 
      type={msg.type} 
      profile={msg.profile} 
      name={msg.name} 
      text={msg.text}/>
    })
  }

  render() {
    return (
      <div style={this.containerStyle}>
        <div ref={this.messages} style={{overflowY: 'auto'}}>
          {this.renderMessages()}
        </div>
        <SendMessage send={this.sendMessage} height={this.sendHeight}/>
      </div>
    )
  }
}

export default FakeTalk
