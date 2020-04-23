import React from 'react'
import FakeTalk from './FakeTalk/FakeTalk'

export function Contact(props) {

  let containerStyle = {
    height: 'fit-content',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: '60px',
    paddingBottom: '20px',
  }

  return (
    <div style={containerStyle}>
      <h3 
      style={{
        backgroundColor: 'pink',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '50px',
        color: 'blue',
        fontWeight: 'bold',
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)'
      }}>Contact</h3>
      <FakeTalk/>
    </div>
  )
}

export default Contact
