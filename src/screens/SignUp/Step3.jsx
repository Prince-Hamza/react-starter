import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ThreeChoice from './ThreeChoice'
import { useContext } from 'react'
import { FormContext } from './FormContext'

export default function Step3() {
    const { formData, setFormData } = useContext(FormContext)

    const onSelect = (value) => {
        alert(value)
        alert(JSON.stringify(formData.step3_data))
        formData.step3_data.selected.push(value)
        setFormData({ ...formData })
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 37
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 66
        setFormData({ ...formData })
    }


    return (
        <Col lg={12}>
            <p> {formData.step3_data.q} </p>
            <ThreeChoice
                choice1={'Everyday'}
                choice2={'Almost Everyday'}
                choice3={'None'}
                onSelect={onSelect}
            />

            <Row lg={6}>
                <Button style={{ marginRight: '10px' }} onClick={() => { back(2) }} > Previous </Button>
                <Button onClick={() => { forward(4) }} > Next </Button>
            </Row>

        </Col>
    )
}
