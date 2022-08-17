import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { AppContext } from '../../Context'
import Auth from '../Auth/Auth'
import SelectTopic from '../SelectTopic/SelectTopic'

export default function Community() {

    const { appData, setAppData } = useContext(AppContext)

    return (
        <Col lg={12}>
            {!appData.userInfo.uid && <Auth setUserInfo={setAppData} />}
            {appData.userInfo.uid && <SelectTopic />}
        </Col>
    )
}
