import React from 'react'
import { Col } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function PageFace() {
    return (
        <Col lg={12} xs={12} style={Styles.theme}>
            <Col lg={12} xs={12} style={{ ...Styles.overLayer, ...Content.colCentrify }}>
                <Col lg={6} xs={12}>
                    <h3 style={Styles.title}>
                        Helping you heal towards your next chapter
                    </h3>
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