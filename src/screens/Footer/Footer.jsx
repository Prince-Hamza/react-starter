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

    const goto = (url) => {
        window.location.replace(url)
    }

    return (
        <Row lg={12} style={Content.rowCentrify}>
            <Row lg={12} style={{ ...Content.rowLeftStart, marginTop: '50px' }}>
                <Col lg={3} style={{ ...Content.colCentrify, marginBottom: '25px' }} >
                    <Image style={{ width: '220px', height: '114px' }} src={chapterUp} />
                </Col>


                <Col lg={3} >
                    <div style={Styles.heading} > Pages </div>
                    <br />
                    <h6 style={Styles.label} onClick={() => { navigate('/group') }} > Group </h6>
                    <h6 style={Styles.label} onClick={() => { navigate('/aboutus') }} > About Us </h6>
                    <h6 style={Styles.label} onClick={() => { navigate('/getsupport') }} > Booking </h6>
                    <h6 style={Styles.label} onClick={() => { navigate('/contact') }} > Contact Us </h6>
                    <br />
                </Col>

                <Col lg={3} >
                    <div style={Styles.heading} > Help </div>
                    <br />
                    <h6 style={Styles.label}> Faq </h6>
                    <h6 style={Styles.label}> Terms & conditions </h6>
                    <h6 style={Styles.label} onClick={() => { navigate('/privacy') }} > Privacy </h6>
                    <br />
                </Col>

                <Col lg={2} style={{ ...Content.colCentrify }} >
                    <div style={Styles.heading} > Social Media </div>
                    <Row>
                        <FaFacebookF style={Styles.icon} onClick={() => { goto('https://www.linkedin.com/company/chapterup/') }} />
                        <BsInstagram style={Styles.icon} onClick={() => { goto('https://www.instagram.com/accounts/login/?next=%2Fchapter_up%2F') }} />
                        <FaLinkedinIn style={Styles.icon} onClick={() => { goto('https://web.facebook.com/NextChapterUp?_rdc=1&_rdr') }} />
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
        marginBottom: '10px'
    },
    icon: {
        width: '50px',
        cursor: 'pointer'
    },
    label: {
        cursor: 'pointer',
        marginBottom: '15px'
    }
})