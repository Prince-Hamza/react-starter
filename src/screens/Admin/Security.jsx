import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Menu from './Menu'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function Security({ updateScreen }) {


    const [firebaseUsername, setFirebaseUsername] = useState()
    const [firebasePassword, setFirebasePassword] = useState()

    const [currentUsername, setCurrentUsername] = useState()
    const [currentPassword, setCurrentPassword] = useState()

    const [newUsername, setNewUsername] = useState()
    const [newPassword, setNewPassword] = useState()


    const update = () => {
        if (firebaseUsername === currentUsername && firebasePassword === currentPassword) {
            firebase.database().ref(`chapterup/admin/auth`).update({
                username: newUsername,
                password: newPassword
            })
            alert(`admin credentials updated successfully`)
        }
    }

    const init = async () => {
        var resp = await firebase.database().ref(`/chapterup/admin/auth`).once('value')
        var data = resp.val()
        setFirebaseUsername(data.username)
        setFirebasePassword(data.password)
    }

    const effect = () => {
        init()
    }


    useEffect(effect, [])

    return (
        <Col lg={12} style={Styles.background}>

            <Row lg={12} style={{ width: '100%' }} >

                <Menu />

                <Col lg={8} style={Content.colTopCenter} >
                    <Col lg={8} style={{ ...Content.colCentrify }}>
                        <br />
                        <br />
                        <br />
                        <Col lg={12} style={Content.colCentrify}>
                            <h4 style={{ color: 'white' }} > Admin Dashboard</h4>
                        </Col>

                        <br />

                        <Form.Label style={Styles.label} >  Current Username </Form.Label>
                        <Form.Control style={Styles.input} type={'text'} onChange={(e) => { setCurrentUsername(e.target.value) }} />

                        <br />

                        <Form.Label style={Styles.label} >  Current Password </Form.Label>
                        <Form.Control style={Styles.input} type={'password'} onChange={(e) => { setCurrentPassword(e.target.value) }} />

                        <br />

                        <Form.Label style={Styles.label} >  New Username </Form.Label>
                        <Form.Control style={Styles.input} type={'text'} onChange={(e) => { setNewUsername(e.target.value) }} />

                        <br />

                        <Form.Label style={Styles.label} >  New Password </Form.Label>
                        <Form.Control style={Styles.input} type={'password'} onChange={(e) => { setNewPassword(e.target.value) }} />

                        <br />

                        <Button style={Styles.Button} disabled={firebaseUsername && firebasePassword && currentUsername && currentPassword && newUsername && newPassword ? false : true} onClick={() => { update() }}>
                            Login
                        </Button>

                    </Col>
                </Col>
            </Row>

        </Col>
    )
}

const Styles = ({
    background: {
        height: window.screen.height - 50,
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        backgroundSize: 'cover',
        marginLeft: '0px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0px'
    },
    card: {
        backgroundColor: '#0E1D31',
        height: '350px',
        border: 'solid 0.1px yellow',
        padding: '40px',
        paddingTop: '10px',
        ...Content.colCenterLeft
        // boxShadow:'0px 0px 8px 1px rgb(34,40,69)'
    },
    label: {
        color: 'white',
        font: 'bold italic 18px times new roman'
    },
    Button: {
        width: '150px',
        backgroundColor: '#0E1D31',
        border: 'solid 1px yellow'
    },
    input: {
        width: '300px'
    }
})

