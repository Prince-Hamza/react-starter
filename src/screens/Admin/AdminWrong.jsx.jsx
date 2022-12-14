import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
import { Content } from '../../styles/styles'


import { useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import Menu from './Menu'
import Auth from './Auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

export default function Admin() {

    const [appointments, setAppointments] = useState([])
    const [authenticated, setAuthenticated] = useState(false)

    const init = async () => {
        var resp = await firebase.database().ref(`/chapterup/appointments`).once('value')
        var list = []
        resp.forEach(item => {
            var data = item.val()
            list.push(data)
        })
        setAppointments([...list])
    }

    const effect = () => { init() }

    useEffect(effect, [])


    const updateScreen = (v) => {
        setAuthenticated(v)
    }



    if (authenticated) {
        return (
            <Col lg={12} style={Styles.container}>

                <Row lg={12} style={Styles.header}>
                    <AiOutlineMenu style={{ width: '50px' }} />
                    <div style={{ width: '300px' }}> Chapterup Admin Dashboard </div>
                </Row>

                <Row lg={12} style={{ width: '100%' }} >

                    <Menu />

                    <Col lg={10} style={Styles.mainPage}>
                        <br />
                        {appointments.map((Appointment) => {
                            return (
                                <Col lg={4}>
                                    <Card key={Math.random()} style={{ padding: '20px' }}>
                                        <div style={Styles.name}>
                                            {Appointment.name}
                                        </div>
                                        <div>
                                            {Appointment.email}
                                        </div>


                                        <Col lg={12}>
                                            <Row lg={12} style={{ width: '100%', ...Content.rowLeftStart }}>
                                                <div style={Styles.iconWrap}>
                                                    <GoLocation style={Styles.iconWrap} />
                                                </div>

                                                <div style={{ ...Styles.locationText }}> {`${Appointment.city}, ${Appointment.country}`} </div>
                                            </Row>
                                        </Col>

                                        <br />

                                        <div> scheduled on </div>

                                        <div style={Styles.date}>
                                            {Appointment.scheduled}
                                        </div>

                                    </Card>

                                </Col>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
        )
    } else {
        return (
            <Auth updateScreen={updateScreen} />
        )
    }
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
    name: {
        color: '#222',
        font: 'bold italic 24px times new roman'
    },
    iconWrap: {
        width: '35px',
        height: '30px',
        ...Content.colCentrify
    },
    locationText: {
        width: '200px',
        marginTop: '5px',
        alignText: 'center'
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
        height: 'auto'
    },
    date: {
        color: 'magenta',
        font: 'bold italic 24px times new roman'
    }
})


