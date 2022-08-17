import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Center from '../../components/Center'

export default function Menu({ email }) {
    alert(email)
    return (
        <Row lg={12} style={Styles.Menu}>
            {email === 'admin@gmail.com' && <Col lg={6} style={Content.colCentrify}>
                <p style={{ color: '#222', cursor: 'pointer' }}> History </p>
            </Col>}
            <Col lg={email === 'admin@gmail.com' ? 6 : 12}>
                <Center>
                    <p style={{ cursor: 'pointer' }} > Chats </p>
                </Center>
            </Col>
        </Row>
    )
}

const Styles = ({
    Menu: {

    }
})
