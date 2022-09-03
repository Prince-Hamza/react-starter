import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { Image } from 'react-bootstrap'
import Center from '../../components/Center'
import { Content } from '../../styles/styles'
import Button from '../../components/Button'
import Footer from '../Footer/Footer'
import pro1 from '../../images/professionals/pro1.jpg'
import pro2 from '../../images/professionals/pro2.jpg'
import pro3 from '../../images/professionals/pro3.jpg'

const photos = [pro1, pro2, pro3]

export default function Professionals() {

    const [info] = useState([{ photo: photos[0], name: 'Reinholds', para: 'Has been trained as a Life Coach that specialise in healing from separation and divorce' }, { photo: photos[1], name: 'Suha', para: 'Is a licenced therapist and can help you with solution focussed grief therapy, CBT therapy and healing fractured self' }, { photo: photos[2], name: 'Willow', para: 'Has a Masters in Psychology and is mental wellness coach that helps you build towards your next chapter' }])

    return (
        <Col lg={12} xs={12} style={Styles.theme}>
            <Center>
                <h3 style={{ color: 'white' }}> Meet out talented Mental Health Wellbeing Professionals</h3>
            </Center>

            <br />

            <Row lg={12} style={Content.rowCentrify}>
                {info.map((pro) => {
                    return (
                        <Col key={Math.random()} lg={2} style={{ ...Content.colCentrify, textAlign: 'center' }}>
                            <Image roundedCircle src={pro.photo} />
                            <br />
                            <h5 style={{ color: 'white' }}> {pro.name} </h5>
                            <p style={{ color: 'white' }} > {pro.para} </p>
                            <br />
                            <Button style={Styles.Button}> BOOK ONE ON ONE SESSION </Button>
                        </Col>
                    )
                })}
            </Row>
        </Col>
    )
}

const Styles = ({
    theme: {
        backgroundColor: '#8D51FF',
        marginBottom: '25px'
    },
    Button: {
        backgroundColor: 'white',
        color: 'black',
        font: '16px poppins',
        marginBottom: '15px'
    }
})
