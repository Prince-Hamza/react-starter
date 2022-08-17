import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import database from 'firebase/compat/database'
import { useEffect } from 'react'
import { Col, Row, Image, Form } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import $ from 'jquery'
const defaultPhoto = 'https://freepikpsd.com/file/2019/10/human-icon-vector-png-Transparent-Images.png'

export default function Chat({ userInfo }) {


    //onMessage:  update convo link in chapterup/chats/admin_uid : text, userId, userName
    //firebase.database().ref(`/chapterup/users/${userInfo.uid}/chats`).push({ text :  })

    const [setup, setSetup] = useState(false)
    const [chatLink, setChatLink] = useState(`/chapterup/chats/admin_${userInfo.uid}`)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState({ text: null, image: userInfo.photoURL ? userInfo.photoURL : defaultPhoto, userId: userInfo.uid, userName: userInfo.displayName ? userInfo.displayName : null })

    const onMessage = (value) => {
        newMessage.text = value
        setNewMessage(newMessage)
    }

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            //alert(`pushing into : ${chatLink}`)
            firebase.database().ref(chatLink).push({ ...newMessage })
        }
    }

    const uniqueUserChats = async (uid, cl) => {
        var chatList = []
        var resp = await firebase.database().ref(`/chapterup/users/${uid}/chats`).once('value')
        // alert(`resp: ${JSON.stringify(resp)}`)
        if (JSON.stringify(resp) === 'null') firebase.database().ref(`/chapterup/users/${uid}/chats`).push({ link: cl, user1: 'admin', user2: uid })
        if (JSON.stringify(resp) === 'null') return [{ link: cl, user1: 'admin', user2: uid }]

        resp.forEach((i) => { chatList.push(i.val()) })
        return new Set([...chatList])
    }

    useEffect(() => {

        function scrollToBottom(element) {
            var $messages = $('#messages')
            setTimeout(() => {
                var l = $messages.text().length
                $messages.animate({ scrollTop: l }, 300);
            }, 3000)



        }


        const init = async () => {
            let cl = chatLink.split('.').join('/')
            let uid = userInfo.uid.split('.').join('/')
            setChatLink(cl)

            var chatList = await uniqueUserChats(uid, cl)
            firebase.database().ref(`/chapterup/users/${uid}/chats`).set(chatList)

            var existingChat = await firebase.database().ref(cl).once('value')
            if (JSON.stringify(existingChat !== 'null')) { existingChat.forEach((item) => { messages.push(item.val()) }) }

            firebase.database().ref(cl).on('child_added', (resp) => { messages.push(resp.val()) })

            setSetup(true)
            setMessages([...messages])
        }

        if (!setup) init()
        scrollToBottom(document.getElementById('messages'))

    }, [])


    return (
        <Col lg={12}>
            <Col lg={12} style={Styles.chatPad} id={'messages'}>
                {messages.map((item) => {
                    return (
                        <Row key={Math.random()} lg={11} style={{ ...Content.rowLeftStart, marginBottom: '20px', height: 'auto' }} >
                            <Col lg={1} >
                                <Image roundedCircle src={item.image} style={{ marginRight: '15px', width: '25px', height: '25px', backgroundColor: 'white' }} />
                            </Col>
                            <Col lg={10} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <div> {item.text} </div>
                            </Col>
                        </Row>
                    )
                })}
            </Col>

            <Form.Control placeholder={'Type something here'} onChange={(e) => { onMessage(e.target.value) }} onKeyDown={(e) => { onEnter(e) }} />

        </Col>
    )
}


const Styles = ({
    chatPad: {
        height: '530px',
        overflow: 'hidden',
        backgroundColor: 'whitesmoke',
        padding: '10px'
    }
})