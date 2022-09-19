import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ThreeChoice from './ThreeChoice'
import { useContext } from 'react'
import { FormContext } from './FormContext'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function Step9() {
    const { formData, setFormData } = useContext(FormContext)
    const [selected, setSelected] = useState()

    const onSelect = (value) => {
        setSelected(true)
        formData.step9_data.selected.push(value)
        setFormData({ ...formData })
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 50
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 95
        setFormData({ ...formData })
    }

    const submit = () => {
        firebase.database().ref('/chapterup/submissions').push({ ...formData })
    }

    return (
        <Col lg={12}>
            <p> {formData.step9_data.q} </p>
            <ThreeChoice
                choice1={'Everyday'}
                choice2={'Almost Everyday'}
                choice3={'None'}
                onSelect={onSelect}
            />

            <Row lg={6}>
                {/* <Button style={{ marginRight: '10px' }} onClick={() => { back(8) }} > Previous </Button>
                <Button onClick={() => { forward(1) }} > Next </Button> */}
                <Button style={{ marginRight: '10px' }} onClick={() => { submit() }} disabled={selected ? false : true} >  Submit  </Button>
            </Row>

        </Col>
    )
}
