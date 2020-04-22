import React, { Component } from 'react'
import PortfolioMenu from './PortfolioMenu'
import Tabs from './Tabs/Tabs'

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
    this.updateSelect = this.updateSelect.bind(this);
  }

  updateSelect(key) {
    this.setState({
      selected: key
    })
  }

  get style() {
    return {
      backgroundColor: 'rgba(143,214,23,0.3',
      paddingBottom: '200px'
    }
  }

  render() {
    return (
      <>
        <PortfolioMenu updateSelect={this.updateSelect}/>
        <Tabs selected={this.state.selected}/>
      </>
    )
  }
}

export default Portfolio
