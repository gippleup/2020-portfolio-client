import React, { Component } from 'react'
import MenuBtn from './MenuBtn'
import anime from 'animejs'
import HeaderContents from './HeaderContents/index'

export class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }

    this.header = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.toggle()
  }

  get style() {
    return {
      zIndex: '100',
      backgroundColor: 'purple',
      height: '200px',
      position: 'fixed',
      width: '100%',
      top: 0,
    }
  }

  hide() {
    let target = this.header.current;
    let targetHeight = target.clientHeight;
    anime.remove(target);
    anime({
      targets: target,
      translateY: -targetHeight + 'px',
      boxShadow: '0px 0px 0px transparent',
      easing: 'easeOutCubic',
      duration: 250,
    })
  }

  show() {
    let target = this.header.current;
    let targetHeight = target.clientHeight;
    anime.remove(target);
    anime({
      targets: target,
      translateY: -targetHeight/2 + 'px',
      boxShadow: '0px 5px 5px rgba(0,0,0,0.2)'
    })
  }

  toggle() {
    if (this.state.visible) {
      this.show();
    } else {
      this.hide();
    }
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <>
      <MenuBtn toggle={this.toggle}/>
      <div ref={this.header} style={this.style}>
        <div 
        style={{
          position: 'absolute', 
          bottom:0,
          width:'100%', 
          height:'50%', 
          display:'flex',
          flexDirection: 'row-reverse',
          gridTemplateColumns: Array.from(HeaderContents.length).fill('auto').join(' '),
          padding:'15px',
          textAlign: 'right',
          alignContent: 'center',
          backgroundColor:'purple'}}>
            {HeaderContents.map((Content,i) => 
            <div style={{width:'fit-content'}} key={i}><Content/></div>
            )}
        </div>
      </div>
      </>
    )
  }
}

export default Headers
