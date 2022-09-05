import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function InfoForm() {

    const [gender, setGender] = useState('male')

    return (
        <Col lg={12} style={Content.colCentrify}>

            <div className='Percentage' >

            </div>

            <Form.Control type={'text'} placeholder={'First Name'} />
            <br />

            <Form.Control type={'text'} placeholder={'Last Name'} />
            <br />

            <Form.Control type={'text'} placeholder={'City'} />
            <br />

            <Form.Control type={'text'} placeholder={'Your Email'} />
            <br />

            <Row>
                <Form.Label checked={gender === 'male' ? true : false} onChange={() => { setGender('male') }} > Male </Form.Label>
                <Form.Control type={'radio'} />
            </Row>

            <Row>
                <Form.Label checked={gender === 'male' ? true : false} onChange={() => { setGender('female') }} > Female </Form.Label>
                <Form.Control type={'radio'} />
            </Row>

            <Form.Control type={'text'} placeholder={'Phone Number'} />
            <br />
            <Button> Next </Button>


        </Col>
    )
}
