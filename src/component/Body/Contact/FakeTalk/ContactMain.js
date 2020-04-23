import React, { useEffect } from 'react'
import SendMessage from './SendMessage'
import FakeMessage from './FakeMessage'
import img from './profilePic.jpeg';

const myName = 'Michael'

const initialMessage = {
  type: 'receive',
  name: myName,
  profile: img,
  text: 'Hello there!'
}

export default function ContactMain(props) {
  const messageDiv = React.createRef();
  let sendHeight = 76

  if(!props.hasResponded) {
    respondToMessage(props.recentlyReceived);
  }
  
  function scrollToBottom() {
    // console.log(props.messages)
    // console.log(messageDiv.current)
    // let msgDiv = messageDiv.current;
    // msgDiv.scrollTop = msgDiv.scrollHeight;
  }

  function renderMessages() {
    return props.messages.map((msg, i) => {
      return <FakeMessage 
      prevMessage={props.messages[i-1]} 
      key={i} 
      type={msg.type} 
      profile={msg.profile} 
      name={msg.name} 
      text={msg.text}/>
    })
  }

  function sendMessage({text, type, name, profile}) {
    let newMessage = {name, profile, text, type, date: Date.now()}
    props.updateMessages(newMessage);
  }

  function respondToMessage(message) {
    if (message.type !== 'send') return
    props.collectClientMessage(message)

    let msgTemplate = {
      type: 'receive',
      profile: img,
      name: myName,
    }
    
    let makeMessage = (text) => Object.assign(msgTemplate, {text})
    let send = (text) => sendMessage(makeMessage(text))
    let slowSend = (text) => setTimeout(() => {send(text)}, 500)
    
    let recentMessage = message.text;
    let emailSearcher = RegExp(/\s?^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s?/g)
    let email = recentMessage ? recentMessage.match(emailSearcher) : undefined
    
    respondToEmail(email, send, slowSend)
  }

  function respondToEmail(email, send, slowSend) {
    let text;
    let slowText;
    let alreadyGotEmail = props.emailReceived[0] !== undefined
    let newlyGotEmail = email !== null
    if (!alreadyGotEmail) {
      if (newlyGotEmail) {
        send(`email: "${email}" has been received`);
        text = `I will contact you soon!`
        props.addEmail(email);
      } else {
        text = 'If you want to contact me, please leave your email'
        slowText = 'Just type it like this: id@email.com'
      }
    } else {
      if (newlyGotEmail) {
        send(`email: "${email}" has been received`)
        text = `Hmm, it seems like you've sent email already`
        slowText = `Please choose your main email`
        props.cautionEmail();
      } else {
        text = 'This is dummy text';
      }
    }

    if (text) send(text)
    if (slowText) slowSend(slowText);
    return;
  }

  return (
    <div 
    id='contact-main'
    style={{
      display: 'grid',
      gridTemplateRows: `600px 10px ${sendHeight}px`,}}>
      <div 
      ref={messageDiv} 
      style={{height:'600px', overflowY: 'auto'}}>
        {renderMessages()}
      </div>
      <div><br/></div>
      <SendMessage 
      sendMessage={(message)=>{
        sendMessage(message)
        scrollToBottom();
      }}
      height={sendHeight}/>
    </div>
  )
}
