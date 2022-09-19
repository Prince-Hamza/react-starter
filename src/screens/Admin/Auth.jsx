import React, { useEffect, useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { useNavigate } from 'react-router-dom'

export default function Auth() {

    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [inputName, setInputUsername] = useState()
    const [inputPassword, setInputPassword] = useState()

    const init = async () => {
        var resp = await firebase.database().ref(`/chapterup/admin/auth`).once('value')
        var data = resp.val()
        setUsername(data.username)
        setPassword(data.password)
    }

    const effect = () => { init() }

    const validate = () => {
        if (inputName === username && inputPassword === password) navigate('/admin/appointments')
    }

    useEffect(effect, [])

    return (
        <Col style={Styles.background}>
            <Col lg={4} style={Styles.card}>

                <Col lg={12} style={Content.colCentrify}>
                    <h4 style={{ color: 'white' }} > Admin Dashboard</h4>
                </Col>

                <br />

                <Form.Label style={Styles.label} >  User name </Form.Label>
                <Form.Control type={'text'} onChange={(e) => { setInputUsername(e.target.value) }} />

                <br />
                <Form.Label style={Styles.label} >  Password </Form.Label>
                <Form.Control type={'password'} onChange={(e) => { setInputPassword(e.target.value) }} />
                <br />
                <Button style={Styles.Button} disabled={username ? false : true} onClick={() => { validate() }} >
                    Login
                </Button>


            </Col>
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
        padding: '0px',
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
    }
})

