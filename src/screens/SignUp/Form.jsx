import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function InfoForm() {

    const [gender, setGender] = useState('male')

    return (
        <Col lg={12} style={Content.colCentrify}>
            <Col lg={6} style={Content.colCentrify}>

                <br />
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

                <Col lg={12} style={{ ...Content.colTopLeft, pading: '15px', marginLeft:'25px' }}>
                    <Row style={{ width: '100%' }}>
                        <Form.Control style={{ width: '5px', height: '22px' }} type={'radio'} checked={true} />
                        <Form.Label style={{ width: '100px' }} checked={gender === 'male' ? true : false} onChange={() => { setGender('male') }} > Male </Form.Label>
                    </Row>

                    <Row>
                        <Form.Control style={{ width: '5px', height: '22px' }} type={'radio'} checked={true} />
                        <Form.Label style={{ width: '100px' }} checked={gender === 'male' ? true : false} onChange={() => { setGender('female') }} > Female </Form.Label>
                    </Row>
                </Col>

                <br />

                <Form.Control type={'text'} placeholder={'Phone Number'} />
                <br />
                <Button> Next </Button>
            </Col>
        </Col>

    )
}
