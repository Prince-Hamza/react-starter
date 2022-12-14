import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import Calendar from 'react-calendar'
import './calendar.css'


export default function CalendarWrapper({value , onChange}) {
    return (
        <Col lg={12}>
            <br />
            <Calendar style={{ border: 'none' }} onChange={onChange} value={value} />
        </Col>
    )
}
