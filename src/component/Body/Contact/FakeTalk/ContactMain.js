import React, { useEffect } from 'react'
import SendMessage from './SendMessage'
import FakeMessage from './FakeMessage'
import {img, myName} from './dummyMessage'
import anime from 'animejs'

export default function ContactMain(props) {
  const messageDiv = React.createRef();
  let sendHeight = 76

  useEffect(() => {
    if(!props.hasResponded) {
      props.setHasResponded(true)
      respondToMessage(props.recentlyReceived);
    }
    scrollToBottom();
  })
  
  function scrollToBottom() {
    let msgDiv = messageDiv.current;
    if (msgDiv.scrollHeight < msgDiv.clientHeight) return
    anime.remove(msgDiv);
    anime({
      targets: msgDiv,
      scrollTop: msgDiv.scrollHeight - 600,
      duration: 1000,
      easing: 'easeOutCubic'
    })
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
    let makeWaitingMsg = (text, waitTime) => 
    Object.assign({}, {
      type: 'receive',
      profile: img,
      name: myName,
      text,
      waitTime
    })
    let recentMessage = message.text;
    let emailSearcher = RegExp(/\s?^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s?/g)
    let email = recentMessage ? recentMessage.match(emailSearcher) : undefined
    
    respondToEmail(email, makeWaitingMsg)
  }

  function respondToEmail(email, makeWaitingMsg) {
    let queue = [];
    let text;
    let slowText;
    let alreadyGotEmail = props.emailReceived[0] !== undefined
    let newlyGotEmail = email !== null
    if (newlyGotEmail) {
      let msg = `email: "${email}" has been received`;
      queue.push(makeWaitingMsg(msg, 100))
      props.addEmail(email);
      if (alreadyGotEmail) {
        props.cautionEmail();
        text = `Hmm, it seems like you've sent email already`
        slowText = `Please choose your main email`
      }
    } else if (!alreadyGotEmail) {
      text = 'If you want to contact me, please leave your email'
      slowText = 'Just type it like this: id@email.com'
    } else {
      text = 'This is dummy text';
    }

    if (text) {
      queue.push(makeWaitingMsg(text, 100))
    }
    if (slowText) {
      queue.push(makeWaitingMsg(slowText, 500))
    }
    props.addToWaitingResponse(queue)
    return;
  }

  return (
    <div 
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
      }}
      height={sendHeight}/>
    </div>
  )
}
