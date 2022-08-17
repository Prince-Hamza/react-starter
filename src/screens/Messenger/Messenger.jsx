import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import MessengerIcon from '../../images/messenger.png'
import Auth from './Auth'
import Menu from './Menu'
import ChatHistory from './ChatHistory'
import Chat from './Chat'

export default function Messenger() {
    const [Icon, setIcon] = useState(true)
    const [userInfo, setUserInfo] = useState()

    return (
        <Col lg={2}>
            {Icon && <Image style={Styles.icon} src={MessengerIcon} onMouseOver={() => { setIcon(false) }} />}
            {!Icon &&
                <Col lg={3} style={Styles.messenger} onMouseLeave={(e) => { setIcon(true) }} >
                    {!userInfo && <Auth setUserInfo={setUserInfo} />}
                    {userInfo && <Menu email={userInfo.email} />}
                    {userInfo && userInfo.email === 'admin@gmail.com' && <ChatHistory />}
                    {userInfo && <Chat userInfo={userInfo} />}
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
