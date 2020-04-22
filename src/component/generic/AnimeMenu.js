import React, { Component } from 'react'
import anime from 'animejs'

export class AnimeMenu extends Component {
  constructor(props) {
    super(props);
    this.barHeight = 6;
    this.barMargin = 6;
    this.state = {
      crossed: false,
    }
  }

  get style() {
    return {
      width: '36px',
      height: `${this.barHeight}px`,
      backgroundColor: 'black',
      margin: `${this.barMargin}px 0`,
      borderRadius: '10px'
    }
  }

  toggleCross() {
    this.setState({
      crossed: !this.state.crossed,
    })
  }

  cross(e) {
    let el = e.currentTarget;
    let containers = el.childNodes;
    let bars = Array.from(containers).map(container => container.children[0]);

    anime({
      targets: containers[0],
      translateY: `${this.barHeight + this.barMargin}px`
    })
    anime({
      targets: containers[2],
      translateY: `${-(this.barHeight + this.barMargin)}px`
    })
    anime({
      targets: bars[0],
      rotate: 45,
      scale: 1.2
    })
    anime({
      targets: bars[1],
      opacity: 0,
    })
    anime({
      targets: bars[2],
      rotate: -45,
      scale: 1.2
    })
  }

  recover(e) {
    let el = e.currentTarget;
    let allEle = el.querySelectorAll('div');
    allEle.forEach(ele => {
      anime({
        targets: ele,
        translateY: 0,
        rotate: 0,
        opacity: 1,
        scale: 1
      })
    })
  }

  stop(e) {
    let el = e.currentTarget;
    let allEle = el.querySelectorAll('div');
    anime.remove(allEle);
  }

  toggle(e) {
    this.stop(e);
    this.toggleCross();
    if (!this.state.crossed) {
      this.cross(e)
    } else {
      this.recover(e)
    }
    if (typeof this.props.onClick === 'function') {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div 
      style={{padding: '10px'}} 
      onClick={this.toggle.bind(this)}>
        <div>
          <div style={this.style}></div>
        </div>
        <div>
          <div style={this.style}></div>
        </div>
        <div>
          <div style={this.style}></div>
        </div>
      </div>
    )
  }
}

export default AnimeMenu
