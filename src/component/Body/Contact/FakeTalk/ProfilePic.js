import React from 'react'

export function ProfilePic(props) {
  let size = 64;
  let divStyle = {
    display: 'inline-block',
    borderRadius: '50%',
    overflow: 'hidden',
    height: size + 'px',
    width: size + 'px',
  }

  return (
    <div style={divStyle}>
      <img style={{width:'100%', height:'100%'}} alt='' src={props.src || ''}></img><br/>
    </div>
  )
}

export default ProfilePic
