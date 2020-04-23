import React, { Component } from 'react'
import ContactSealer from './ContactSealer'
import ContactMain from './ContactMain'

export class FakeTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      prevMessage: null,
      recentlyReceived: null,
      emailReceived: [],
      clientMessages: [],
      emailCaution: false,
    }

    this.addEmail = this.addEmail.bind(this);
    this.cautionEmail = this.cautionEmail.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.selectiveRender = this.selectiveRender.bind(this);
    this.collectClientMessage = this.collectClientMessage.bind(this);
  }
  
  addEmail(email) {
    this.setState({
      emailReceived: this.state.emailReceived.concat(email)
    })
  }

  updateMessages(newMessage) {
    let newState = this.state.messages.concat(newMessage)
    this.setState({
      messages: newState,
      recentlyReceived: newMessage
    })
  }

  collectClientMessage(newMessage) {
    this.setState({
      clientMessages: this.state.clientMessages.concat(newMessage),
    })
  }

  cautionEmail() {
    this.setState({
      emailCaution: true,
    })
  }

  selectiveRender(ele1) {
    if (this.state.emailCaution) {
      return ele1
    } else {
      return <></>
    }
  }

  render() {
    return (
      <div
      style={{
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 0,
        paddingRight: 0,
        position:'relative',
        height: 'fit-content',
        backgroundColor: 'pink',
        borderRadius: '20px',
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
      }}>
        {this.selectiveRender(
          <ContactSealer emailReceived={this.state.emailReceived}/>
          )
        }
        <ContactMain
        cautionEmail={this.cautionEmail}
        emailReceived={this.state.emailReceived}
        recentlyReceived={this.state.recentlyReceived}
        collectClientMessage={this.collectClientMessage}
        updateMessages={this.updateMessages}
        addEmail={this.addEmail}
        messages={this.state.messages}/>
      </div>
    )
  }
}

export default FakeTalk
