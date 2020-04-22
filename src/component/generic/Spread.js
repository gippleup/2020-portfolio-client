import React, { Component } from 'react'
import Lively from '../helper/Lively'

export class Spread extends Component {
  constructor(props) {
    super(props);
    if (!this.props.id) {
      throw new Error ('Spread need unique id')
    }
    this.state = {
      parent: null,
      items: [],
    }
  }

  componentDidMount() {
    let newState = {items:[]};
    let container = document.querySelector(`div#spread-container-${this.props.id}`);
    let parent = container.querySelector('.spread-parent');
    let children = container.querySelectorAll('.spread-child');
    if (!parent) throw new Error ('parent missing');
    if (!children.length) throw new Error ('child missing');
    parent.addEventListener('click', this.spread);
    parent.style.zIndex = '10000';
    newState.parent = parent;
    Array.from(children).forEach(child => {
      child.style.opacity = '0';
      child.style.position = 'absolute';
      newState.items.push(new Lively(child));
    })
    newState.itemCount = newState.items.length;
    this.setState(newState);
    this.initLively();
  }

  initLively() {
    this.state.items.forEach(child => {
      child.setValue('pong', false);
    })
  }

  spread = () => {
    let start = this.props.start || 0;
    let end = this.props.end || 360;
    let distance = this.props.distance || 100;
    let itemCount = this.state.items.length;
    let angleStep = (end - start) / (itemCount - 1);
    this.state.items.forEach((item, i) => {
      let radian = (start + angleStep * i) * (Math.PI/180);
      let circleX = distance * Math.cos(radian);
      let circleY = distance * Math.sin(radian);
      if(!item.state.pong) {
        item.animate({
          translateX: circleX + 'px',
          translateY: circleY + 'px',
          opacity: 1,
          duration: 1000,
          delay: (1000 / itemCount) * i,
          
        })
      } else {
        item.recover({
          opacity: {
            value: 0,
            easing: 'easeOutCubic',
            duration: 500,
          },
          easing: 'easeOutCubic',
          duration: 500,
          delay: (1000 / itemCount) * i
        });
      }
      item.toggleState('pong');
    })
  }

  render() {
    return (
      <div id={`spread-container-${this.props.id}`}>
        {this.props.parent}
        {this.props.items}
      </div>
    )
  }
}

export default Spread
