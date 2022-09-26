import React, { Component, useEffect, useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import { ChatSystem } from '../../backend/chat/Chat'
import $ from 'jquery'
const chatSystem = new ChatSystem()

export default class ChatNow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    chatSystem.onMessage(`/chats/${this.props.info.chatKey}`, this.handleMessage)
  }

  scrollToBottom = () => {
    var $messages = $('#messages')
    setTimeout(() => {
      var l = $messages.text().length
      $messages.animate({ scrollTop: 100000 }, 3);
    }, 3000)
  }


  handleMessage = (message) => {
    this.state.messages.push(message)
    this.setState({ messages: this.state.messages })
    this.scrollToBottom()
    // scroll down
  }

  render() {
    return (
      <Col lg={12} style={{ overflow: 'hidden', height: '550px' }} id={'messages'} >
        <div style={{ width: '100%', overflow: 'hidden' }} >
          <br />
          {this.state.messages.length > 0 && this.state.messages.map((item) => {
            return (
              <Col lg={12} style={Styles.container}>
                <Row lg={12} style={{ width: '100%', marginLeft: '1px', marginBottom: '15px', ...Content.rowLeftStart }}>
                  <Image roundedCircle style={{ width: '55px', height: '37px', marginRight: '20px', marginLeft: '0px', backgroundColor: 'white' }} src={item.userId === 'administa' ? 'https://play-with-ghost.com/liebling/content/images/2021/01/admin-settings.png' : item.image} />
                  <div style={{ color: 'black', width: '70%', marginTop: '5px' }} > {item.text} </div>
                </Row>
              </Col>
            )
          })}
        </div>
      </Col>
    )
  }
}


const Styles = ({
  container: {
    ...Content.colTopLeft,
    padding: '0px',
    height: 'auto',
  },
  empty: {
    padding: '0px'
  },
  text: {
    font: 'bold 26px times new roman',
    color: 'white'
  }
})