import React from 'react'

export function Message(props) {
  let containerStyle = {
    marginLeft: props.type === 'send' ? '25px' : '10px',
    marginRight: '15px',
    backgroundColor: `${props.type === 'send' ? 'white' : 'lightYellow'}`,
    padding: '10px',
    borderRadius: '10px',
    display: 'inline-block',
    width: 'fit-content',
    height: 'fit-content',
    lineBreak: 'anywhere',
  }

  return (
    <div style={containerStyle}>
      {props.text}
    </div>
  )
}

export default Message
