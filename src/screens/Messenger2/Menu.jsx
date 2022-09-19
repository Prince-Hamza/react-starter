import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Center from '../../components/Center'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
    
    const navigate = useNavigate()

    return (
        <Row lg={12} style={Styles.Menu}>

            <Col lg={3} style={Styles.history}>
                <p style={{ cursor: 'pointer' }}> History </p>
            </Col>

            <Col lg={9}>
                <Row lg={12} style={{ ...Content.rowCentrify }}>
                    <Col lg={9} style={{ height: '100%' }}>
                        <Center>
                            <div style={{ cursor: 'pointer' }}> Chats </div>
                        </Center>
                    </Col>
                    <Col lg={3}>
                        <div style={{ cursor: 'pointer' }} onClick={() => { navigate('/create-messenger-group') }} >
                            + Create Group
                        </div>
                    </Col>
                </Row>


            </Col>

        </Row>
    )
}

const Styles = ({
    Menu: {
        backgroundColor: '#222',
        color: 'white',
        border: 'solid 1px white'
    },
    history: { ...Content.colCentrify }
})



