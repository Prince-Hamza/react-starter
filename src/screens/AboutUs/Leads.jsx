import React, { useState } from 'react'
import { Col, Row, Button, Image } from 'react-bootstrap'
import Center from '../../components/Center'
import { Content } from '../../styles/styles'
import pro1 from '../../images/professionals/pro1.jpg'
import pro2 from '../../images/professionals/pro2.jpg'
import pro3 from '../../images/professionals/pro3.jpg'
const photos = [pro1, pro2, pro3]

export default function Leads() {

    const [info] = useState([{ photo: photos[0], name: 'Marie', para: 'Is a Mental Wellness Coach that assists you with finding practical solutions to any difficulties you might be facing' }, { photo: photos[1], name: 'Gave', para: 'Has been trained as a Life Coach and brings helps you build life goals and execute on them' }, { photo: photos[2], name: 'Kendall', para: 'Focusses on energy healing practices to bring the trapped negative energy to the surface and release them' }])

    return (
        <Col lg={12} xs={12} style={Styles.theme}>
            <br />
            <Center>
                <h3 style={{ color: 'white' }}> Meet some of our Leads </h3>
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
                            {/* <Button style={Styles.Button}> BOOK ONE ON ONE SESSION </Button> */}
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
    },
    Button: {
        backgroundColor: 'white',
        color: 'black',
        font: '16px poppins',
    }
})
