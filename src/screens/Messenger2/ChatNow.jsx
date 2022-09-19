import React, { Component, useEffect, useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import { ChatSystem } from '../../backend/chat/Chat'
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


  handleMessage = (message) => {
    //  console.log(`message : ${JSON.stringify(messages)}`)
    this.state.messages.push(message)
    this.setState({ messages: this.state.messages })
    // scroll down
    
  }

  render() {
    return (
      <Col lg={12}>
        {this.state.messages.length > 0 && this.state.messages.map((item) => {
          return (
            <Col lg={12} style={Styles.container}>
              <Row lg={12} style={{ width: '100%' }}>
                <Image roundedCircle style={{ width: '47px', height: '40px', marginRight: '20px', marginLeft: '15px', backgroundColor: 'white' }} src={item.image} />
                <div style={{ color: 'white', width: '80%', marginTop: '5px' }} > {item.text} </div>
              </Row>
            </Col>
          )
        })}
      </Col>
    )
  }

}


const Styles = ({
  container: {
    ...Content.colTopSpaceBetween,
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