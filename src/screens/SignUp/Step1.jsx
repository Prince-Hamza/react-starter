import React, { useState, useContext } from 'react'
import { Col, Row, Form, InputGroup, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { FormContext } from './FormContext'


export default function Step1() {

    const [gender, setGender] = useState()
    const { formData, setFormData } = useContext(FormContext)


    const nextStep = () => {
        formData.step = 2
        formData.percentage = 25
        formData.step1_data.gender = gender
        setFormData({ ...formData })
    }

    return (
        <Col lg={12} style={Content.colCentrify}>
            <br />

            <Form.Control type={'text'} placeholder={'First Name'} onChange={(e) => { formData.step1_data.firstName = e.target.value }} />
            <br />

            <Form.Control type={'text'} placeholder={'Last Name'} onChange={(e) => { formData.step1_data.lastName = e.target.value }} />
            <br />

            <Form.Control type={'text'} placeholder={'City'} onChange={(e) => { formData.step1_data.city = e.target.value }} />
            <br />

            <Form.Control type={'text'} placeholder={'Your Email'} onChange={(e) => { formData.step1_data.email = e.target.value }} />

            <br />

            <Col lg={12} style={{ ...Content.colTopLeft, pading: '15px', marginLeft: '25px' }}>
                <Row style={{ width: '50px' }}>
                    <InputGroup.Checkbox style={{ width: '50px'}} type={'checkbox'} checked={gender === 'male' ? true : false} onChange={() => { setGender('male') }} />
                    <Form.Label style={{ width: '90px' }} > Male </Form.Label>
                </Row>

                <Row style={{ width: '50px' }}>
                    <InputGroup.Checkbox style={{ width: '5px', height: '22px' }} type={'checkbox'} checked={gender === 'female' ? true : false} onChange={() => { setGender('female') }} />
                    <Form.Label style={{ width: '100px' }}> Female </Form.Label>
                </Row>
            </Col>

            <br />

            <Form.Control type={'text'} placeholder={'Phone Number'} onChange={(e) => { formData.step1_data.phoneNumber = e.target.value }} />

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


