import React, { Component } from 'react'
import Tab from './Tab'
import contents from './Contents/index'

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.addTab = this.addTab.bind(this);
    this.div = React.createRef();
  }

  get divStyle() {
    return {
      overflow: 'hidden',
    }
  }

  addTab(content, key) {
    return <Tab key={key} content={content}/>
  }

  showSelected() {
    let c = contents.filter(c => c.key === this.props.selected)[0]
    let renderedContent = this.addTab(c, c.key);
    return renderedContent
  }

  render() {
    return (
      <div style={this.divStyle} ref={this.div}>
        {this.showSelected()}
      </div>
    )
  }
}

export default Tabs
