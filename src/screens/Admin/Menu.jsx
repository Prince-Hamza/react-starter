import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Center from '../../components/Center'

export default function Menu() {
    return (
        <Col lg={2} xs={12} style={Styles.menubar}>
            <Row style={Styles.menuItem} >
                <Center> <div style={{ color: '' }} > Appointments </div>  </Center>
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
        height: 'auto'
    },
    date: {
        color: '#222',
        font: 'bold italic 24px times new roman'
    }
})
