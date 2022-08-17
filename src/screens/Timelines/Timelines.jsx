import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Cover from './Cover'
import Posts from './Posts'
import CreatePost from './CreatePost'
import Strip from './Strip'
import List from './List'
import { useState } from 'react'
import Auth from '../Auth/Auth'
import firebase from 'firebase/compat/app'
import { AppContext } from '../../Context'
import { useEffect, useContext } from 'react'
// import { useLocation } from 'react-router-dom'

export default function Timelines() {
    // const { state } = useLocation()
    const { appData, setAppData } = useContext(AppContext)
    const [userInfo, setUserInfo] = useState(firebase.auth().currentUser)

    //if (userInfo) alert(JSON.stringify(userInfo.providerData))

    const updateContext = (userInfo) => {
        if (userInfo) appData.userInfo = userInfo
        if (userInfo) setAppData(appData)
    }


    useEffect(() => {
        // alert(`groupData : ${JSON.stringify(appData.selectedGroup)}`)
    }, [])

    return (
        <Row lg={12}>
            <Row lg={12} style={Styles.AppWrapper}>
                <Col lg={12} style={Styles.column2}>
                    <Row lg={12} >
                        <Col lg={12} style={{ padding: '5px' }} >  <Cover />  </Col>
                    </Row>
                    <Row lg={12}>
                        <Col lg={11} >
                            <Strip />
                            <CreatePost />
                            <Posts />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>

    )
}

const Styles = ({
    AppWrapper: {
        ...Content.rowLeftStart,
        marginLeft: '0.1px'
    },
    column2: {
        position: 'relative',
        width: '96.5%',
        height: 'auto',
        backgroundColor: 'rgb(50,50,50)'
    }
})
