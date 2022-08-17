import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { AppContext } from '../../Context'
import Auth from '../Auth/Auth'
import List from './List'
import Cover from './Cover'
import { Content } from '../../styles/styles'
export default function SelectTopic() {

    const [userInfo, setUserInfo] = useState()

    return (
        <Row lg={12} style={Styles.AppWrapper}>
            <Col lg={12} style={Styles.column2}>
                <Row lg={12} style={Styles.theme} >
                    <Col lg={2} style={{ padding: '0px' }} >   <List />   </Col>
                    <Col lg={10} style={{ padding: '0px' }} >  <Cover />  </Col>
                </Row>
            </Col>
        </Row>
    )
}

const Styles = ({
    theme: {
        backgroundColor: '#222',
        height: window.screen.height
    },
    AppWrapper: {
        ...Content.rowLeftStart,
        marginLeft: '0.1px',
    },
    column2: {
        position: 'relative',
        height: 'auto',
        backgroundColor: 'rgb(50,50,50)'
    }
})