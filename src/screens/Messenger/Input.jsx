import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import database from 'firebase/compat/database'
import { useState } from 'react'
import $ from 'jquery'
const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrej4M_I8J8reVuRw4Ds2C1mVxWEEcq4xh9w&usqp=CAU'

export default function Input({ info, linkInfo }) {


    const userId = firebase.auth().currentUser.uid
    const [newMessage, setNewMessage] = useState({ text: null, image: info.photoURL ? info.photoURL : defaultPhoto, userId: userId, userName: info.displayName ? info.displayName : 'Anonymous' })
    const [text, setText] = useState('')

    const scrollToBottom = (element) => {
        var $messages = $('#messages')
        // var l = $messages.text().length
        $messages.animate({ scrollTop: 100000 }, 0);
    }

    const onType = (value) => {
        setText(value)
        newMessage.text = value
        setNewMessage({ ...newMessage })
    }

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            setText('')
            firebase.database().ref(`/chats/${linkInfo.chatKey}`).push({ ...newMessage })
            setTimeout(() => {
                scrollToBottom()
            }, 300)

        }
    }

    return (
        <Col lg={12} style={Styles.container}>
            <Row lg={12} style={{ marginLeft: '2px' }}>
                <Form.Control style={Styles.input} value={text} placeholder={'Type something here'} onChange={(e) => { onType(e.target.value) }} onKeyDown={(e) => { onEnter(e) }} />
            </Row>
        </Col>
    )
}



const Styles = ({
    container: {
        position: 'absolute',
        bottom: '0px'
    },
    input: {
        width: '95%'
    }
})





























