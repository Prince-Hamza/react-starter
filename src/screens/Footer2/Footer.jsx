import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { useNavigate } from 'react-router-dom'

export default function Footer({ Top }) {
    const navigate = useNavigate()

    return (
        <Row lg={12} style={{ ...Styles.footer, top:  '900px', zIndex: 1 }} >
            <Row lg={10} style={Content.rowCentrify} >

                <Col lg={3} style={{ ...Content.colCentrify, marginBottom: '25px' }} >
                    <Image style={{ width: '220px', height: '114px' }} src={'http://www.chapterup.com/wp-content/uploads/2021/10/cropped-ChapterUp-2.png'} />
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

                <Col lg={3} >
                    <div style={Styles.heading} > Social Media </div>
                    <Row>
                        <i class="fab fa-facebook-f"> </i>
                    </Row>
                </Col>

            </Row>

        </Row >
    )
}


const Styles = ({
    footer: {
        ...Content.rowCentrify,
        position: 'absolute',
        left: '0px',
        width: '99.2%',
        height: '270px',
        backgroundColor: '#FFFFFF',
        zIndex: 1

    },
    heading: {
        color: '#8D51FF',
        font: 'bold 1.4rem poppins',
        textTransform: 'uppercase',
        letterSpacing: '1.4px'
    }
})