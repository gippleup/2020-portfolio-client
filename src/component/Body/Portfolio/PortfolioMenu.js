import React, { Component } from 'react'
import {Button, Row, Col} from 'react-bootstrap'

export class PortfolioMenu extends Component {
  constructor(props) {
    super(props);
    this.addButton = this.addButton.bind(this);
  }

  get buttons() {
    return [{
        name: 'All',
        link: '/all'
      },
      {
        name: 'Hobby',
        link: '/hobby',
      },
      {
        name: 'Collaboration',
        link: '/collaboration'
      },
      {
        name: 'Work',
        link: '/work'
      }
    ]
  }

  get btnStyle() {
    return {
      marginRight: '5px',
    }
  }

  addButton({name, link}) {
    return (
      <Col key={name} style={{padding: 0}}>
        <Button block
        key={name}
        onClick={this.props.updateSelect.bind(null, name)}
        style={this.btnStyle}>{name}</Button>
      </Col>
    )
  }

  render() {
    
    return (
      <div>
        <Row style={{margin:0}}>
          {this.buttons.map((b) => this.addButton(b, null))}
        </Row>
      </div>
    )
  }
}

export default PortfolioMenu
