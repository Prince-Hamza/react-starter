import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { useNavigate } from 'react-router-dom'
import chapterUp from '../../images/chapterup.png'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <Row lg={12} style={Content.rowCentrify} >
            <Row lg={12} style={Content.rowCentrify} >

                <Col lg={3} style={{ ...Content.colCentrify, marginBottom: '25px' }} >
                    <Image style={{ width: '220px', height: '114px' }} src={chapterUp} />
                </Col>


                <Col lg={3} >
                    <div style={Styles.heading} > Pages </div>
                    <br />
                    <h6> Group </h6>
                    <h6> About Us </h6>
                    <h6> Booking </h6>
                    <h6> Contact Us </h6>
                    <br />
                </Col>

                <Col lg={3} >
                    <div style={Styles.heading} > Help </div>
                    <br />
                    <h6> Faq </h6>
                    <h6> Terms & conditions </h6>
                    <h6> Privacy </h6>
                    <br />
                </Col>

                <Col lg={2} style={{ ...Content.colCentrify, border: 'dashed' }} >
                    <div style={Styles.heading} > Social Media </div>
                    <Row>
                        <FaFacebookF style={Styles.icon} />
                        <BsInstagram style={Styles.icon} />
                        <FaLinkedinIn style={Styles.icon} />
                    </Row>
                </Col>

            </Row>

        </Row>
    )
}


const Styles = ({
    heading: {
        color: '#8D51FF',
        font: 'bold 1.4rem poppins',
        textTransform: 'uppercase',
        letterSpacing: '1.4px',
        marginBottom:'10px'
    },
    icon: {
        width: '50px',


    }
})