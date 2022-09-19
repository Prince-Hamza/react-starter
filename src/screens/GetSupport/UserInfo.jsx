import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function UserInfo({ Data, setData }) {

    const update = (key, value) => {
        Data[key] = value
    }

    return (
        <Col lg={12} xs={12} style={Content.colCentrify} >
            <Col lg={6}>
                <Form.Label> Username </Form.Label>
                <Form.Control type={'text'} onChange={(e) => { update('name', e.target.value) }} />
                <br />
                <Form.Label> Email </Form.Label>
                <Form.Control type={'text'} onChange={(e) => { update('email', e.target.value) }} />
            </Col>
        </Col>
    )
}
