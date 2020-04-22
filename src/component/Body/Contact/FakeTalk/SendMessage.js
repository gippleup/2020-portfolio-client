import React, { Component } from 'react'
import sendIcon from './send.png'
import anime from 'animejs'

export class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curMessage: '',
    }
    this.sendBtn = React.createRef();
    this.textarea = React.createRef();

    this.type = this.type.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.textOnEnter = this.textOnEnter.bind(this);
    this.textOnFocus = this.textOnFocus.bind(this);
    this.textOnFocusOut = this.textOnFocusOut.bind(this);
    this.sendBtnOnClick = this.sendBtnOnClick.bind(this);
    this.clearSentMessage = this.clearSentMessage.bind(this);
  }

  // This is for animation. Sending event is handled on render onClick
  componentDidMount() {
    let sendBtn = this.sendBtn.current;
    sendBtn.addEventListener('click', this.sendBtnOnClick)
    let textArea = this.textarea.current;
    textArea.addEventListener('focus', this.textOnFocus)
    textArea.addEventListener('focusout', this.textOnFocusOut)
    textArea.addEventListener('keydown', this.textOnEnter)
  }

  textOnEnter(e) {
    if (e.keyCode === 13) {
      e.target.disabled = true;
      this.sendMessage();
      this.textOnFocusOut();
      this.sendBtnOnClick();
      this.clearSentMessage();
      setTimeout(()=>{e.target.disabled = false}, 100)
    }
  }

  clearSentMessage() {
    this.setState({
      curMessage: '',
    })
  }

  textOnFocus() {
    let target = this.textarea.current;
    anime.remove(target);
    anime({
      targets: target,
      backgroundColor: '#ffbb00',
      duration: 500,
      border: {
        value: '2px solid #ffffff',
        duration: 0
      }
    })
  }

  textOnFocusOut() {
    let target = this.textarea.current;
    anime.remove(target);
    anime({
      targets: target,
      backgroundColor: '#ffffff',
      border: '0px none',
    })
  }

  sendBtnOnClick() {
    let target = this.sendBtn.current
    anime({
      targets: target,
      backgroundColor: ['#ffbb00', '#ffebb3'],
      duration: 2000,
    })
  }

  type() {
    let target = this.textarea.current
    this.setState({
      curMessage: target.value,
    })
  }

  get messageDiv() {
    return {
      position: 'absolute',
      bottom: 0,
      height: '100%',
      width: '100%',
    }
  }

  sendMessage() {
    if (!this.state.curMessage) {
      return
    } else {
      this.props.sendMessage({
        name: 'client',
        text: this.state.curMessage,
        profile: '',
        type: 'send',
      })
      this.clearSentMessage();
    }
  }

  render() {
    return (
      <div style={{position:'relative', height:this.props.height}}>
        <div style={this.messageDiv}>
          <textarea 
          value={this.state.curMessage}
          onChange={this.type}
          ref={this.textarea} 
          style={{
            padding: '20px',
            width:'calc(100% - 64px)', height:'100%', 
            position:'absolute', left:0,
            fontSize:'18px',
            borderRadius: '0px 0px 0px 20px',
            border: 0,
            outline: 'none',
            resize:'none',
            overflowY: 'auto',
            }}>
          </textarea>
          <button 
          ref={this.sendBtn} 
          onClick={this.sendMessage}
          style={{
            width: '64px',
            height: `${this.props.height}px`,
            borderRadius: '0px 0px 20px 0px',
            backgroundColor: '#ffebb3',
            border: 0, outline: 'none',
            position:'absolute', right: '0'}}>
            <img alt="sendbutton" style={{width:'50%'}} src={sendIcon}></img>
          </button>
        </div>
      </div>
    )
  }
}

export default SendMessage
