import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function Contact() {
    return (
        <Row lg={12} style={{ ...Content.rowCentrify, padding: '20px', marginBottom:'150px' }} >

            <Col lg={5} xs={12} style={Content.colCentrify}>
                <Col lg={12} xs={12} style={Content.colTopLeft}>

                    <div style={Styles.title}> Contact Now </div>
                    <br />
                    <Row lg={12}>
                        <Col style={{ color: '#8D51FF' }}>
                            Email
                        </Col>
                        <Col>
                            hello@chapterup.com
                        </Col>
                    </Row>
                    <br />
                    <strong style={{ width: '80%' }} >
                        If you or someone you know is in immediate help, there are several places you can turn to for help.
                    </strong>
                    <br />
                    <strong>
                        USA:
                    </strong>
                    <div> National Suicide Prevention Hotline: Call 1-800-273-8255 </div>
                    <div> Crisis Text Line: Text Home to 741-741 </div>
                    <div> Emergency – 911</div>

                    <br />

                    <strong>
                        Australia:
                    </strong>
                    <div> National Suicide Prevention Hotline: Call 1-800-273-8255 </div>
                    <div> Crisis Text Line: Text Home to 741-741 </div>
                    <div> Emergency – 911</div>
                    <br />
                    <Button style={Styles.Button} >                        Join Now                    </Button>


                </Col>
            </Col>


            <br />

            <Col lg={5} xs={12}>
                <Image style={{ width: '100%', height: '420px' }} src={'http://www.chapterup.com/wp-content/uploads/2021/11/66bcfa_ec354b929ae542bb841e1ad024fd24fb_mv2.webp'} />
            </Col>

        </Row>
    )
}

const Styles = ({
    title: {
        font: '2.4rem Roboto Sans-serif',
        fontWeight: '600',
        lineHeight: '1.1666em',
        color: '#8D51FF'
    },
    Button: {
        width: '140px',
        height: '40px'
    }
})
