import React, { Component } from 'react'
import MenuBtn from './MenuBtn'
import anime from 'animejs'

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
      backgroundColor: 'lightYellow',
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
        <div style={{position: 'absolute', height:'50%', width:'100%', bottom:0, backgroundColor:'purple'}}>Put header contents here.
          <button style={{width:'64px', height:'64px', borderRadius:'32px', border:'none', outline:'none'}}>
            <img style={{width:'100%', borderRadius:'50%'}} alt="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
          </button>        
        </div>
      </div>
      </>
    )
  }
}

export default Headers
