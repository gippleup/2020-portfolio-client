import React, { Component } from 'react'
import FakeMessage from './FakeMessage'
import SendMessage from './SendMessage'
import img from './profilePic.jpeg';

const myName = 'Michael'

const initialMessage = {
  type: 'receive',
  name: myName,
  profile: img,
  text: 'Hello there!'
}

export class FakeTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [initialMessage],
      prevMessage: null,
      recentlyReceived: null,
      emailReceived: [],
      clientMessages: [],
    }
    this.messages = React.createRef();

    this.sendMessage = this.sendMessage.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.respondToMessage = this.respondToMessage.bind(this);
  }

  scrollToBottom() {
    let msgDiv = this.messages.current;
    msgDiv.scrollTop = msgDiv.scrollHeight;
  }

  respondToMessage() {
    let msgTemplate = {
      type: 'receive',
      profile: img,
      name: myName,
    }
    let makeMessage = (text) => Object.assign(msgTemplate, {text})
    let send = (text) => this.sendMessage(makeMessage(text))

    let recentMessage = this.state.recentlyReceived.text;
    let emailSearcher = RegExp(/\s?^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s?/g)
    if (!this.state.emailReceived[0]) {
      let text;
      let email = recentMessage ? recentMessage.match(emailSearcher) : undefined
      if (email) {
        send(`email: "${email}" has been detected`);
        text = `I will contact you soon!`
      } else {
        text = 'If you want to contact me, please leave your email'
        setTimeout(() => {
          send('Just type it like this: id@email.com')
        }, 500) 
      }
      send(text)
    }
  }

  sendMessage({text, type, name, profile}) {
    let newMessage = {
      name,
      profile,
      text,
      type,
      date: Date.now(),
    }
    let newState = this.state.messages.concat(newMessage)
    this.setState({
      messages: newState,
      recentlyReceived: newMessage,
    })
    if (type === 'send') {
      this.setState({
        clientMessages: this.state.clientMessages.concat(newMessage),
      })
      setTimeout(()=>{
        this.respondToMessage();
      }, 100)
    }
    this.scrollToBottom();
  }

  get sendHeight() {
    return 76
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
      <div 
      style={{
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 0,
        paddingRight: 0,
        height: 'fit-content',
        backgroundColor: 'pink',
        display: 'grid',
        gridTemplateRows: `600px 10px ${this.sendHeight}px`,
        borderRadius: '20px',
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
      }}>
        <div ref={this.messages} style={{overflowY: 'auto'}}>
          {this.renderMessages()}
        </div>
        <div><br/></div>
        <SendMessage sendMessage={this.sendMessage} height={this.sendHeight}/>
      </div>
    )
  }
}

export default FakeTalk
