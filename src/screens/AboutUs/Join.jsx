import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function Join() {
    return (
        <Col lg={12} xs={12} style={Styles.theme}>
            <Col lg={12} xs={12} style={{ ...Styles.overLayer, ...Content.colCentrify }}>
                <Col lg={6} xs={12}>
                    <h3 style={Styles.title}>
                        Join us as a lead
                    </h3>
                    <br />
                    <h6 style={{ color: 'white', textAlign: 'center' }} >
                        We are looking for people that are passionate about Mental Wellbeing and want to help people through their healing journey. Join our mission and let’s find a pathway to help live a healthier and happier life. Contact us today to join the team.
                    </h6>
                </Col>
            </Col>
        </Col>
    )
}




const Styles = ({
    theme: {
        position: 'relative',
        height: '600px',
        backgroundImage: `url(https://previews.123rf.com/images/pitinan/pitinan1905/pitinan190503733/124824447-healthcare-people-group-professional-doctor-working-in-hospital-office-or-clinic-with-other-doctors-.jpg)`
    },
    overLayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(25,25,25,0.8)'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        //color: '#FFFFFF',
        fontFamily: 'Saira, Sans-serif',
        fontSize: '57px',
        fontWeight: 800
    },
    description: {
        color: 'white',
        textAlign: 'center'
    }
})