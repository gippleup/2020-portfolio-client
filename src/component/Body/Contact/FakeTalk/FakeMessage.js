import React from 'react';
import ProfilePic from './ProfilePic'
import Message from './Message';


export function FakeMessage(props) {
  function selectiveRender(target, substitute = <></>) {
    let prevMessage = props.prevMessage
    if (!prevMessage) {
      return target
    } else if (prevMessage.type === 'send') {
      return target
    } else {
      return substitute
    }
  }

  let serverMessage = (
    <div style={{
      textAlign: 'left',
      padding: `0px 10px`,
      backgroundColor: '',
      height: 'fit-content',
      marginTop: `${props.profile ? '20px' : '0px'}`
    }}>
      <div style={{display:'grid', gridTemplateColumns: `64px auto`}}>
        {selectiveRender(<ProfilePic src={props.profile}/>, <div></div>)}
        <div style={{display:'grid', gridTemplateRows: `${props.name ? '64px' : '0px'} fit-content`}}>
          {selectiveRender(<p style={{marginLeft:'10px', marginBottom: '0px'}}>{props.name}</p>)}
          <Message text={props.text}/>
        </div>
      </div>
    </div>
  )

  let clientMessage = (
    <div style={{
      textAlign: 'right', 
      marginBottom: '10px', 
      marginTop: props.prevMessage ? props.prevMessage.type === 'receive' ? '16px' : 0 : '16px'
    }}>
      <Message type={props.type} text={props.text}/>
    </div>
  )

  return props.type === 'receive' ? serverMessage : clientMessage
}

export default FakeMessage
