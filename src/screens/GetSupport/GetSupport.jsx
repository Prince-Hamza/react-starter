import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Button from '../../components/Button'
import NavBar from '../Navbar/Navbar'
import SetupCall from './SetupCall'
import UserInfo from './UserInfo'
import axios from 'axios'
import firebase from 'firebase/compat/app'


export default function GetSupport() {

    const [Data, setData] = useState({})
    const [value, onChange] = useState(new Date())

    const saveAppointment = async () => {
        Data.scheduled = value.toDateString()
        var userResp = await axios.get(`https://hutils.loxal.net/whois`)
        var info = Object.assign(Data, userResp.data)
        await firebase.database().ref('/chapterup/appointments').push({ scheduled: value.toDateString(), ...info })
        alert('meeting scheduled successfully')
    }

    return (
        <Col lg={12} >
            <NavBar />
            <Row lg={12} style={{ ...Styles.background, ...Content.rowCentrify }}>
                <div style={Styles.cover}>

                    <h1> Schedule a free consultation</h1>

                    <Col lg={6} style={Styles.text}>
                        <p>
                            We offer free 15-min consultations to every potential ChapterUp member. This helps us match you with a Mental Wellbeing Coach to fit your needs and include you in the right Support Group to give you the experience that fits your needs. Can’t wait for you to join our safe and supportive community.
                        </p>

                        <br />

                        <div style={Styles.textLines} >
                            <p> ✔️ Schedule a free 15 minute consultation and share your needs</p>
                            <p> ✔️ Confirm which group you will be part of (upto 6-8 people) and attend first discussion</p>
                            <p> ✔️ Confirm if you should consider one on one sessions with a mental wellness coach or healer</p>
                            <p> ✔️ Build your custom plan to join our community</p>
                        </div>

                        <br />

                        <div style={{ width: '100%', ...Content.colCentrify }}>
                            <Button style={{ font: '16px poppins' }} > Tell us how you're feeling </Button>
                        </div>
                    </Col>

                </div>
            </Row>

            <UserInfo Data={Data} setData={setData} />
            <SetupCall Data={Data} setData={setData} value={value} onChange={onChange} />

            <Col lg={12} style={Content.colCentrify}>
                <Col lg={6}>
                    <Button onClick={() => { saveAppointment() }} >
                        Schedule
                    </Button>

                    <br />

                    <h6> What does it cost</h6>

                    <p>
                        Our initial consultation is free. At this point we work with you to either organise an initial one on one with a therapist or healer or include you in a supportive group. We will confirm the standard one on one sessions with you at our consultation. You can join the initial group session free. If you’d like to continue to be part of our group we would appreciate a payment of $29 on a monthly basis to be able to pay our kind hosts.
                    </p>
                </Col>
            </Col>


        </Col>
    )
}

const Styles = ({
    background: {
        backgroundImage: `url(https://previews.123rf.com/images/ismagilov/ismagilov1906/ismagilov190601368/124819427-diverse-business-team-working-with-gadgets-over-abstract-city-background-with-double-exposure-of-for.jpg)`,
        height: '800px',
        color: 'white'
    },
    cover: {
        ...Content.colCentrify,
        backgroundColor: 'rgba(22,22,23,0.7)',
        width: '100%',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        font: '22px poppins'
    },
    textLines: {
        ...Content.colTopLeft
    },
    schedule: {
        fontFamily: 'apple - system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#333',
        backgroundColor: '#fff'
    }
})
