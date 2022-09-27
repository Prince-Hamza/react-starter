import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Button from '../../components/Button'
import program from '../../images/program.png'
import { useNavigate } from 'react-router-dom'

export default function Program() {
    const navigate = useNavigate()

    return (
        <Row lg={12} style={Content.rowCentrify}>
            <Col lg={3} style={Content.colCenterLeft}>
                <Image style={Styles.image} src={program} />
            </Col>
            <Col lg={3} xs={10} style={{ ...Content.colCentrify }}>
                <h5 style={{ color: '#9151FF' }} > 6 week program to Heal from challenging life events         </h5>
                <p> 1.  Attend a structured program to heal from separation, divorce and toxic relationships</p>
                <p> 2.  Attend a structured program to heal from separation, divorce and toxic relationships</p>
                <p> 3.  Attend a structured program to heal from separation, divorce and toxic relationships</p>
                <Button style={{ marginBottom: '15px' }} onClick={() => { navigate('/getsupport') }} > Sign up for more info </Button>
            </Col>
        </Row>
    )
}


const Styles = ({
    image: {
        width: '360px',
        height: '240px'
    }
})