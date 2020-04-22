import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import anime from 'animejs'

export class Tab extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();  
  }


  get style() {
    return {
      backgroundColor: 'grey',
      paddingTop: '100px',
      paddingBottom: '100px',
      width: '100%',
      marginBottom: 0,
      color: 'white',
    }
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
      <Jumbotron ref={this.container} style={this.style}>
        {this.props.content}
      </Jumbotron>
    )
  }
}

export default Tab
