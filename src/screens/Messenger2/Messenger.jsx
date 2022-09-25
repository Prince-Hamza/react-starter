import React, { useState, useContext, useEffect } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Menu from './Menu'
import Intro from './Intro'
import MessengerIcon from '../../images/chat/messenger.png'
import ChatHistory from './ChatHistory'
import PreviousMessages from './PreviousMessages'
import ChatNow from './ChatNow'
import Input from './Input'
import { ToastContainer, toast } from 'react-toastify'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'

export default function Messenger2({ userInfo1, userInfo2, groupInfo, messengerType }) {
    // userInfo1 : photoUrl, displayName

    const [Icon, setIcon] = useState(false)
    const [messagesInfo, setMessagesInfo] = useState([])
    const [chatLinkInfo, setChatLinkInfo] = useState({})
    const [messages, setMessages] = useState({})


    const init = () => {
        
    }
    
    const effect = () => { if (chatLinkInfo.chatKey) init() }
    useEffect(effect, [])


    return (
        <Col lg={12} style={Styles.container}>
            {Icon && <Image style={Styles.icon} src={MessengerIcon} onMouseOver={() => { setIcon(false) }} />}
            {!Icon &&
                <Col lg={12} style={{ ...Styles.messenger, height: window.innerHeight - 15 + 'px' }} onMouseLeave={(e) => { }}>
                    <Menu />
                    <Row lg={12}>
                        <Col lg={3} style={Styles.chatHistory} >
                            <ChatHistory setMessages={setMessagesInfo} setChatLinkInfo={setChatLinkInfo} />
                        </Col>
                        <Col lg={9} style={Styles.chatColumn} id={'cc'} >
                            <Intro info={messagesInfo} />
                            <PreviousMessages info={messagesInfo} />
                            {chatLinkInfo.chatKey && <ChatNow info={chatLinkInfo} />}
                            <Input info={userInfo1} linkInfo={chatLinkInfo} />
                        </Col>
                    </Row>
                </Col>
            }
            <ToastContainer />
        </Col>
    )
}

const Styles = ({
    container: {
        padding: '0px',
        marginLeft: '1px',
        backgroundColor: '#222'
    },
    icon: {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        width: '80px',
        height: '85px',
        borderRadius: '50px',
        cursor: 'pointer'
    },
    messenger: {
        bottom: '10px',
        right: '0px',
        backgroundColor: '#222',
        boxShadow: '0px 0px 18px 1px whitesmoke',
        padding: '0px'
    },
    chatHistory: {
        backgroundColor: '#222',
        height: window.innerHeight - 35 + 'px',
    },
    chatColumn: {
        backgroundColor: '#222',
        padding: '0px',
        height: '850px',
        overflow: 'auto',
    }
})
