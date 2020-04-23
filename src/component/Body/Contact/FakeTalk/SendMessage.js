import React, { useState } from 'react'
import sendIcon from './send.png'
import anime from 'animejs'

export function SendMessage(props) {
  const [curMessage, setCurMessage] = useState('');
  const sendBtn = React.createRef();
  const textarea = React.createRef();

  const animations = {
    textOnEnter(e) {
      if (e.keyCode === 13) {
        e.target.disabled = true;
        sendMessage();
        animations.textOnFocusOut();
        animations.sendBtnOnClick();
        clearSentMessage();
        setTimeout(() => {
          e.target.disabled = false
        }, 100)
      }
    },
    textOnFocus() {
      let target = textarea.current;
      anime.remove(target);
      anime({
        targets: target,
        backgroundColor: '#ffbb00',
        duration: 500,
        border: {
          value: '2px solid #ffffff',
          duration: 0
        }
      })
    },
    textOnFocusOut() {
      let target = textarea.current;
      anime.remove(target);
      anime({
        targets: target,
        backgroundColor: '#ffffff',
        border: '0px none',
      })
    },
    sendBtnOnClick() {
      let target = sendBtn.current
      anime({
        targets: target,
        backgroundColor: ['#ffbb00', '#ffebb3'],
        duration: 2000,
      })
    }
  }

  function clearSentMessage() {
    setCurMessage('')
  }

  function type() {
    let target = textarea.current
    setCurMessage(target.value)
  }

  function sendMessage() {
    animations.sendBtnOnClick()
    if (!curMessage) {
      return
    } else {
      props.sendMessage({
        name: 'client',
        text: curMessage,
        profile: '',
        type: 'send',
      })
      clearSentMessage();
    }
  }

  return (
    <div style={{position:'relative', height:props.height}}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        height: '100%',
        width: '100%',
      }}>
        <textarea 
        value={curMessage}
        onChange={type}
        onFocus={animations.textOnFocus}
        ref={textarea} 
        style={{
          padding: '20px',
          width:'calc(100% - 64px)', height:'100%', 
          position:'absolute', left:0,
          fontSize:'18px',
          borderRadius: '0px 0px 0px 20px',
          border: 0,
          outline: 'none',
          resize:'none',
          overflowY: 'auto',
          }}>
        </textarea>
        <button 
        ref={sendBtn} 
        onClick={sendMessage}
        style={{
          width: '64px',
          height: `${props.height}px`,
          borderRadius: '0px 0px 20px 0px',
          backgroundColor: '#ffebb3',
          border: 0, outline: 'none',
          position:'absolute', right: '0'}}>
          <img alt="sendbutton" style={{width:'50%'}} src={sendIcon}></img>
        </button>
      </div>
    </div>
  )
}

export default SendMessage
