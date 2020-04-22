import React, { Component } from 'react'

export class BodyHeader extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
  render() {
    return (
      <div 
      ref={this.canvas}
      style={{
        position:'relative', 
        height: window.outerHeight/2,
        backgroundColor: 'black'}}>
          <h1 
          style={{
            position:'absolute', 
            bottom: '20px',
            left: '20px',
            color:'white'}}>
              Lets' put some cool animation here</h1>
      </div>
    )
  }
}

export default BodyHeader
