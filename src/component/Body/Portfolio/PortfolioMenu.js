import React, { Component } from 'react'
import btnData from './btnData'
import anime from 'animejs'


export class PortfolioMenu extends Component {
  constructor(props) {
    super(props);
    this.addButton = this.addButton.bind(this);
    this.btnAnimeOnDeselect = this.btnAnimeOnDeselect.bind(this);
    this.btnAnimeOnSelect = this.btnAnimeOnSelect.bind(this);
    this.container = React.createRef();
  }

  componentDidUpdate() {
    let btns = this.container.current.querySelectorAll('button')
    Array.from(btns).forEach((btn) => {
      btn.textContent === this.props.selected ? 
        this.btnAnimeOnSelect(btn) : this.btnAnimeOnDeselect(btn)
    })
  }

  btnAnimeOnSelect(btn) {
    anime.remove(btn);
    anime({
      targets: btn,
      backgroundColor: '#ffffff'
    })
  }

  btnAnimeOnDeselect(btn) {
    anime.remove(btn);
    anime({
      targets: btn,
      backgroundColor: '#dddddd'
    })
  }

  addButton({name, link}) {
    return (
      <div key={name}
      style={{width:'100%', height:'60px'}}>
        <button
        key={name}
        onClick={this.props.updateSelect.bind(null, name)}
        style={{
          width: '100%',
          height: '100%',
          border: '0px',
          outline: 'none',
          backgroundColor: '#dddddd'
        }}>{name}</button>
      </div>
    )
  }

  render() {
    return (
      <div ref={this.container} style={{display:'flex', flexWrap:'nowrap', margin:0}}>
        {btnData.map((b) => this.addButton(b, null))}
      </div>
    )
  }
}

export default PortfolioMenu
