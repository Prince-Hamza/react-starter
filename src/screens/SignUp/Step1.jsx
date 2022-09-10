import React, { useState, useContext } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { FormContext } from './FormContext'


export default function Step1() {

    const [gender, setGender] = useState('male')
    const { formData, setFormData } = useContext(FormContext)


    const nextStep = () => {
        formData.step = 2
        formData.percentage = 25
        setFormData({ ...formData })
    }

    return (
        <Col lg={12} style={Content.colCentrify}>
            <br />

            <Form.Control type={'text'} placeholder={'First Name'} />
            <br />

            <Form.Control type={'text'} placeholder={'Last Name'} />
            <br />

            <Form.Control type={'text'} placeholder={'City'} />
            <br />

            <Form.Control type={'text'} placeholder={'Your Email'} />
            <br />

            <Col lg={12} style={{ ...Content.colTopLeft, pading: '15px', marginLeft: '25px' }}>
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
            <Button onClick={() => { nextStep() }}> Next </Button>
        </Col>
    )
}



const Styles = ({
    form: {
        backgroundColor: 'whitesmoke',
        ...Content.colCentrify,
        padding: '15px'
    },
    percentWrap: {
        height: '70px',
        width: '100%',
        backgroundColor: 'whitesmoke'
    }
})


