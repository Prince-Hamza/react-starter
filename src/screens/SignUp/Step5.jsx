import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ThreeChoice from './ThreeChoice'
import { useContext } from 'react'
import { FormContext } from './FormContext'

export default function Step5() {
    const { formData, setFormData } = useContext(FormContext)

    const onSelect = (value) => {
        formData.step3_data.selected = value
        setFormData({ ...formData })
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 50
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 25
        setFormData({ ...formData })
    }


    return (
        <Col lg={12}>
            <p> {formData.step5_data.q} </p>
            <ThreeChoice
                choice1={'Everyday'}
                choice2={'Almost Everyday'}
                choice3={'None'}
                onSelect={onSelect}
            />

            <Row lg={6}>
                <Button style={{ marginRight: '10px' }} onClick={() => { back(4) }} > Previous </Button>
                <Button onClick={() => { forward(6) }} > Next </Button>
            </Row>

        </Col>
    )
}
