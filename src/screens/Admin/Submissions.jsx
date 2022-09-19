import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Menu from './Menu'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function Submissions({ updateScreen }) {


    const [submissions, setSubmissions] = useState([])
    const [selected, setSelected] = useState(0)

    const init = async () => {
        var items = []
        var resp = await firebase.database().ref(`chapterup/submissions`).once('value')
        resp.forEach((item) => { items.push(item.val()) })
        setSubmissions(items)
    }

    const effect = () => { init() }

    useEffect(effect, [])

    return (
        <Col lg={12} style={Styles.background}>

            <Row lg={12} style={{ width: '100%' }} >

                <Menu />

                <Col lg={8} style={Content.colTopCenter} >
                    <Col lg={8} style={{ ...Content.colCentrify }}>
                        <br />
                        <br />
                        <br />

                        <Col lg={12} style={Content.colCentrify}>
                            <h4 style={{ color: 'white' }}> Form Submissions </h4>
                        </Col>
                        <br />
                    </Col>



                    {submissions.length > 0 &&
                        <Col lg={6} style={Styles.card}>
                            {submissions.map((item, index) => {
                                return (
                                    <Col lg={12} key={Math.random()} style={{ color: 'white', marginBottom: '50px' }} >
                                        <h5 style={{ color: 'white' }}> {item.step1_data.firstName} {item.step1_data.lastName} </h5>
                                        <div > {item.step1_data.email} </div>
                                        <br />
                                        <br />
                                        {index === selected &&
                                            <Col lg={12}>
                                                <h6> {item.step2_data.q} </h6>
                                                <div> {item.step2_data.selected && item.step2_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step3_data.q} </h6>
                                                <div> {item.step3_data.selected && item.step3_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step4_data.q} </h6>
                                                <div> {item.step4_data.selected && item.step4_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step5_data.q} </h6>
                                                <div> {item.step5_data.selected && item.step5_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step6_data.q} </h6>
                                                <div> {item.step6_data.selected && item.step6_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step7_data.q} </h6>
                                                <div> {item.step7_data.selected && item.step7_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step8_data.q} </h6>
                                                <div> {item.step8_data.selected && item.step8_data.selected[0]} </div>
                                                <br />
                                                <h6> {item.step9_data.q} </h6>
                                                <div> {item.step9_data.selected && item.step9_data.selected[0]} </div>
                                                <br />
                                            </Col>
                                        }
                                    </Col>
                                )
                            })}
                        </Col>
                    }

                </Col>
            </Row >
        </Col >
    )
}

const Styles = ({
    background: {
        height: window.screen.height - 50,
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        backgroundSize: 'cover',
        marginLeft: '0px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0px'
    },
    card: {
        backgroundColor: '#0E1D31',
        height: 'auto',
        border: 'solid 0.1px yellow',
        padding: '40px',
        paddingTop: '10px',
        boxShadow: '0px 0px 8px 1px rgb(34,40,69)',
        ...Content.colCenterLeft,
    },
    label: {
        color: 'white',
        font: 'bold italic 18px times new roman'
    },
    Button: {
        width: '150px',
        backgroundColor: '#0E1D31',
        border: 'solid 1px yellow'
    },
    input: {
        width: '300px'
    }
})

