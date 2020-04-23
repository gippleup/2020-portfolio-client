import React, { useState, useDebugValue } from 'react'
import ContactSealer from './ContactSealer'
import ContactMain from './ContactMain'
import {initialMessage} from './dummyMessage'

function useStateWithLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(name);
  return [value, setValue];
}

export function FakeTalk() {
  const [messages, setMessages] = useStateWithLabel([initialMessage], 'messages');
  const [recentlyReceived, setRecentlyReceived] = useStateWithLabel(null, 'recentlyReceived');
  const [emailReceived, setEmailReceived] = useStateWithLabel([], 'emailReceived');
  const [clientMessages, setClientMessages] = useStateWithLabel([], 'clientMessages');
  const [emailCaution, setEmailCaution] = useStateWithLabel(false, 'emailCaution');
  const [hasResponded, setHasResponded] = useStateWithLabel(true, 'hasResponded');
  const [waitingResponse, setWaiting] = useStateWithLabel([],'waitingResponse')

  if (waitingResponse.length) {
    let msg = waitingResponse[0];
    unshiftWaitingResponse();
    updateMessages(msg)
  }

  function addToWaitingResponse(message) {
    setWaiting(waitingResponse.concat(message))
  }

  function unshiftWaitingResponse() {
    setWaiting(waitingResponse.slice(1,waitingResponse.length))
  }

  function addEmail(email) {
    setEmailReceived(emailReceived.concat(email))
  }

  function updateMessages(newMessage) {
    setMessages(messages.concat(newMessage))
    setRecentlyReceived(newMessage)
    if (newMessage.type === 'send') {
      collectClientMessage(newMessage);
    }
  }

  function collectClientMessage(newMessage) {
    setClientMessages(clientMessages.concat(newMessage))
    setHasResponded(false);
  }

  function cautionEmail() {
    setEmailCaution(true)
  }

  function selectiveRender(ele) {
    if (emailCaution) {
      return ele
    } else {
      return <></>
    }
  }

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
      {selectiveRender(
        <ContactSealer emailReceived={emailReceived}/>
        )
      }
      <ContactMain
      setHasResponded={setHasResponded}
      addToWaitingResponse={addToWaitingResponse}
      setWaiting={setWaiting}
      hasResponded={hasResponded}
      cautionEmail={cautionEmail}
      emailReceived={emailReceived}
      recentlyReceived={recentlyReceived}
      updateMessages={updateMessages}
      addEmail={addEmail}
      messages={messages}/>
    </div>
  )
}

export default FakeTalk
