import React, { useState, useDebugValue } from 'react'
import ContactSealer from './ContactSealer'
import ContactMain from './ContactMain'

function useStateWithLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}

export function FakeTalk() {
  const [messages, setMessages] = useStateWithLabel([], 'messages');
  const [recentlyReceived, setRecentlyReceived] = useStateWithLabel(null, 'recentlyReceived');
  const [emailReceived, setEmailReceived] = useState([], 'emailReceived');
  const [clientMessages, setClientMessages] = useState([], 'clientMessages');
  const [emailCaution, setEmailCaution] = useState(false, 'emailCaution');
  const [hasResponded, setHasResponded] = useState(true, 'hasResponded');
  
  function addEmail(email) {
    setEmailReceived(emailReceived.concat(email))
  }

  function updateMessages(newMessage) {
    setMessages(messages.concat(newMessage))
    setRecentlyReceived(newMessage)
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
      hasResponded={hasResponded}
      cautionEmail={cautionEmail}
      emailReceived={emailReceived}
      recentlyReceived={recentlyReceived}
      collectClientMessage={collectClientMessage}
      updateMessages={updateMessages}
      addEmail={addEmail}
      messages={messages}/>
    </div>
  )
}

export default FakeTalk
