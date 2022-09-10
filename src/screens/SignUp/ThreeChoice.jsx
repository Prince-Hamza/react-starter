import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Selector from './Selector'
import { Content } from '../../styles/styles'

export default function ThreeChoice({ choice1, choice2, choice3, onSelect }) {
    return (
        <Col lg={12} style={{ width: '100%', ...Content.colCentrify }}>
            <Row lg={12} style={{ ...Content.rowCentrify, width: '100%' }}>
                <Col lg={6}>
                    <Selector text={choice1} onChange={onSelect} />
                </Col>
                <Col lg={6}>
                    <Selector text={choice2} onChange={onSelect} />
                </Col>
            </Row>
            <br />
            <Col lg={6} style={{ ...Content.colTopLeft, marginBottom: '10px' }}>
                <Selector text={choice3} onChange={onSelect} />
            </Col>
        </Col>
    )
}
