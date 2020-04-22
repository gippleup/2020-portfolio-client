import React, { Component } from 'react'
import anime from 'animejs'

export class Tab extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();  
  }

  componentDidMount() {
    let t = this.container.current
    let width = t.clientWidth
    let height = t.clientHeight
    anime({
      targets: t,
      opacity: [0, 1],
      easing: 'easeOutCubic',
      height: {
        value: [0, height],
        easing: 'easeOutCubic',
      },
      translateY: {
        value: [-height, 0],
        easing: 'easeOutBounce',
        duration: 1200
      },
      duration: 600
    })
  }

  render() {
    return (
      <div 
      ref={this.container} 
      style={{
        backgroundColor: 'grey',
        paddingTop: '100px',
        paddingBottom: '100px',
        width: '100%',
        marginBottom: 0,
        color: 'white',
      }}>
        {this.props.content}
      </div>
    )
  }
}

export default Tab
