import React from 'react'

export default function ContactSealer({emailReceived}) {
  let emailOption = (email) => (
    <>
      <label>{email}</label>
      <input type="radio"></input>
    </>
  )

  return (
    <div 
    style={{
      display:'grid',
      gridAutoRows: 'auto',
      left: 0,
      zIndex: '100',
      position:'absolute', 
      height: '100%',
      width: '100%',
      borderRadius: '20px',
      backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div>
          <h1 style={{fontSize:'5vw'}}>Choose your main email</h1>
        </div>
        {emailReceived.map(email => emailOption(email))}
    </div>
  )
}
