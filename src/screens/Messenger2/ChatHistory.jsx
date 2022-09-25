import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import { ChatSystem } from '../../backend/chat/Chat'
import { Col, Image, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
const chatSystem = new ChatSystem()
const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrej4M_I8J8reVuRw4Ds2C1mVxWEEcq4xh9w&usqp=CAU'

export default function ChatHistory({ setMessages, setChatLinkInfo }) {

    const [chatsList, setChatsList] = useState([])
    const [selectedConvo, setSelectedConvo] = useState({})


    const getPreviousMessages = async (info) => {
        var chats = await chatSystem.getPreviousMessages(info.chatKey)
        setMessages([...chats])
    }



    const handleClick = (item) => {
        setChatLinkInfo({ ...item })
        getPreviousMessages(item)
    }

    const getUserData = async (uid) => {
        var uinfo = await firebase.database().ref(`/users/${uid}`).once('value')
        var info = uinfo.val()
        return { uid: uid, ...info }
    }

    const init = async () => {
        var uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "administa"
        var list = await chatSystem.getChatList('Administa')

        var userData = list.map((item) => {
            return getUserData(item.partner2)
        })
        var xList = await Promise.all(userData)
        console.log(`list : ${JSON.stringify(xList)}`)


        setChatsList([...xList])
        setSelectedConvo(list[0])
        setChatLinkInfo({ ...list[0] })
        getPreviousMessages(list[0])
    }

    const effect = () => { init() }
    useEffect(effect, [])


    return (
        <Col lg={12}>
            {chatsList.map((item) => {
                return (
                    <Row lg={12} style={Styles.listRow} onClick={() => { handleClick(item) }}>
                        <Image roundedCircle style={Styles.image} src={item.photoURL ? item.photoURL : defaultPhoto} />
                        <div style={Styles.text}> {item.displayName}  </div>
                    </Row>
                )
            })}
        </Col>
    )
}

const Styles = ({
    listRow: {
        ...Content.rowCentrify,
        height: '80px',
    },
    image: {
        width: '70px',
        height: '47px',
    },
    text: {
        color: 'white',
        width: '200px'
    }
})