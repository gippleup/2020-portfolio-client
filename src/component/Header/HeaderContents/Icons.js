import React, { Component } from 'react'
import IconData from './IconData'
import Icon from './Icon'

export class Icons extends Component {
  render() {
    return (
      <div style={{width:'fit-content' , display:'grid', gridTemplateColumns: Array(IconData.length).fill('auto').join(' ')}}>
        {IconData.map(icon => {
          return <Icon key={icon.name} href={icon.href} src={icon.src} img={icon.img} name={icon.name}/>
        })}
      </div>
    )
  }
}

export default Icons
