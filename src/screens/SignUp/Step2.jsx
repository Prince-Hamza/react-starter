import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Selector from './Selector'
import { useContext } from 'react'
import { FormContext } from './FormContext'
import { Content } from '../../styles/styles'

export default function Step2() {

    const { formData, setFormData } = useContext(FormContext)

    const onSelect = (text) => {
        formData.step2_data.selected = text
        setFormData(formData)
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 12
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 37
        setFormData({ ...formData })
    }


    return (
        <Row style={{ width: '100%', ...Content.rowCentrify }}>
            <p> What brings you to seek support</p>
            <Col lg={6} style={Content.colTopLeft}>
                <Selector text={'Grief'} onChange={onSelect} />
                <Selector text={'Separation & Divorce'} onChange={onSelect} />
                <Selector text={'Poor relationships'} onChange={onSelect} />
            </Col>
            <Col lg={6} style={{ ...Content.colTopLeft, marginBottom: '10px' }}>
                <Selector text={'Anxiety'} onChange={onSelect} />
                <Selector text={'Depression'} onChange={onSelect} />
                <Selector text={'Career stress'} onChange={onSelect} />
            </Col>
            <br />
            <br />
            <Row lg={6}>
                <Button style={{ marginRight: '10px' }} onClick={() => { back(1) }} > Previous </Button>
                <Button onClick={() => { forward(3) }} > Next </Button>
            </Row>

        </Row>
    )
}
