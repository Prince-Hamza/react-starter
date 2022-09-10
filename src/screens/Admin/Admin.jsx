import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
import { Content } from '../../styles/styles'
import Center from '../../components/Center'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { useEffect } from 'react'

export default function Admin() {

    const init = async () => {
        var resp = await firebase.database().ref(`/chapterup/appointments`).once('value')
        resp.forEach((item) => {
            var data = item.val()
            alert(data)
        })
    }

    const effect = () => { init() }

    useEffect(effect, [])


    return (
        <Col lg={12} style={Styles.container}>


            <Row lg={12} style={Styles.header}>
                <AiOutlineMenu style={{ width: '50px' }} />
                <div style={{ width: '300px' }}> Chapterup Admin Dashboard </div>
            </Row>

            <Row lg={12} style={{ border: 'dashed 1px red', width: '100%' }} >

                <Col lg={2} xs={12} style={Styles.menubar} >

                    <Row style={Styles.menuItem} >
                        <Center> Appointments </Center>
                    </Row>

                    <Row style={Styles.menuItem} >
                        <Center> Sumissions </Center>
                    </Row>

                    <Row style={Styles.menuItem} >
                        <Center> Messenger </Center>
                    </Row>

                    <Row style={Styles.menuItem} >
                        <Center> Security </Center>
                    </Row>
                </Col>

                <Col lg={10} style={Styles.mainPage}>

                </Col>

            </Row>

        </Col>
    )
}

const Styles = ({
    container: {
        backgroundColor: '#F5F6F7'
    },
    header: {
        background: 'linear-gradient(90deg,rgba(183,5,222,1) 100%, rgba(218,22,148,1) 0%)',
        height: '100px',
        color: 'white',
        ...Content.rowCentrify
    },
    menubar: {
        height: window.screen.height,
        background: 'linear-gradient(90deg,rgba(183,5,222,1) 100%, rgba(218,22,148,1) 0%)',
        padding: '1px',
        ...Content.colTopCenter
    },
    menuItem: {
        width: '100%',
        height: '70px',
        marginBottom: '1px',
        background: 'linear-gradient(90deg,rgba(170,0,210,1) 100%, rgba(200,10,130,1) 10%)',
        cursor: 'pointer',
        color: 'pointer',
        ...Content.rowCentrify
    },
    mainPage: {
        height: 'auto',
        backgroundColor: 'red',
        border: 'dashed 1px #222'

    }
})
