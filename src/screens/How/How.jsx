import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function How() {

    const navigate = useNavigate()

    return (
        <Row lg={12} style={{ ...Styles.background, ...Content.rowCentrify }}>
            <div style={Styles.cover} >

                <h1> How It Works</h1>

                <Col lg={6} style={Styles.text}>
                    <p> Signup and answer some questions for us to understand your needs
                        We will match you with the right group that will help your healing journey
                        Attend weekly online video discussions, do self-growth exercises and join our chat group
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
                        <Button style={{ font: '16px poppins' }} onClick={() => { navigate('/contact') }} > Tell us how you're feeling </Button>
                    </div>
                </Col>

            </div>
        </Row>
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
    }
})


