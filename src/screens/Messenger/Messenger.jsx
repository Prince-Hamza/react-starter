import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import MessengerIcon from '../../images/messenger.png'
import Auth from './Auth'
import Menu from './Menu'
import ChatHistory from './ChatHistory'
import Input from './Input'
import PreviousMessages from './PreviousMessages'
import ChatNow from './ChatNow'
import Intro from './Intro'

export default function Messenger({ userInfo1, userInfo2, groupInfo, messengerType }) {
    const [Icon, setIcon] = useState(true)
    const [userInfo, setUserInfo] = useState()
    const [messagesInfo, setMessagesInfo] = useState([])
    const [chatLinkInfo, setChatLinkInfo] = useState({})

    return (
        <Col lg={2}>
            {Icon && <Image style={Styles.icon} src={MessengerIcon} onMouseOver={() => { setIcon(false) }} />}
            {!Icon &&
                <Col lg={3} style={Styles.messenger} onMouseLeave={(e) => { setIcon(true) }} >
                    {!userInfo && <Auth setUserInfo={setUserInfo} userInfo={userInfo1} setChatLinkInfo={setChatLinkInfo} />}
                    {userInfo && <Menu email={userInfo.email} />}
                    {userInfo && <ChatHistory setMessages={setMessagesInfo} setChatLinkInfo={setChatLinkInfo} />}

                    {userInfo &&
                        <Col lg={4} style={Styles.chatColumn} id={'cc'} >
                            <Intro info={messagesInfo} />
                            <PreviousMessages info={messagesInfo} />
                            {chatLinkInfo.chatKey && <ChatNow info={chatLinkInfo} />}
                            <Input info={userInfo} linkInfo={chatLinkInfo} />
                        </Col>
                    }

                </Col>
            }
        </Col>
    )
}

const Styles = ({
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
        position: 'fixed',
        bottom: '10px',
        right: '15px',
        height: '600px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 18px 1px whitesmoke'
    }
})
