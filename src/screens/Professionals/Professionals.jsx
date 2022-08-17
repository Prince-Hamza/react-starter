import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { Image } from 'react-bootstrap'
import Center from '../../components/Center'
import { Content } from '../../styles/styles'
import Button from '../../components/Button'
const photos = ['http://www.chapterup.com/wp-content/uploads/elementor/thumbs/Reinholds-pphqu481r7z0tmw8wp4owwvhcjem1n6p17acsnv3dc.jpg', 'http://www.chapterup.com/wp-content/uploads/elementor/thumbs/Suha-pphquujj2kz1upu0n0i8uq8dzbsw1636gtjy8es2j4.jpg', 'http://www.chapterup.com/wp-content/uploads/elementor/thumbs/Willow-pphqvbgmhlm7np5fw7tj3lyoo9hhvpycj5aove2zf4.jpg']

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
                        <Col lg={2} style={{ ...Content.colCentrify, textAlign: 'center' }}>
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
        marginBottom:'25px'
    },
    Button: {
        backgroundColor: 'white',
        color: 'black',
        font: '16px poppins',
        marginBottom:'15px'
    }
})
