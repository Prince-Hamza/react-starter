import React from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Content } from '../../styles/styles'
import { useState } from 'react'

export default function Faq() {

    const [data, setData] = useState([
        {
            quest: 'What type of help can I get in the peer support groups?',
            description: 'ChapterUp runs weekly online zoom peer support discussions with people just like you with mental health lived experiences. There are generally 6 members in each group that offers a supportive, open and honest space for mental health discussions. You can learn practical tips and coping mechanisms through your peers.'
        },
        {
            quest: 'How do I find a peer support groups and is there a commitment?',
            description: 'Once you sign up, we’ll recommend groups that might be a match for you based on our conversation with you. Ideally a 3 month commitment would work best to see benefits and we would encourage a minimum 1 month commitment.'
        },
        {
            quest: 'Does ChapterUp offer one-on-one services?',
            description: 'Yes, we can connect you with one of our mental wellness coaches for one on one session where they will set the price. Our members have had amazing sessions to date based on feedback.'
        },
        {
            quest: 'How much does it cost to join and is there a free trial?',
            description: 'First 15 minute video call to get to know is free aswell as the first group session. We would appreciate a payment of $10 a month to be a member of this amazing community we are building.'
        },
        {
            quest: 'Is there an age requirement to join or sign up?',
            description: 'Individuals must be 18 years of age or older to register for a member account'
        },
        {
            quest: 'Can facilitate a discussion a peer group leader?',
            description: 'Yes, if you are someone who has lived experience and come from a training/leadership background, then we would love to speak to you about leading our support groups'
        },
        {
            quest: 'Can I invite friends or family to join my peer group?',
            description: 'Yes, if you think they can benefit from our mental wellbeing discussions. We will start with a 15 minute discussion to understand their needs before assigning them into a support group.'
        },

    ])

    const [selected, setSelected] = useState()

    return (
        <Col lg={12}>
            <NavBar />
            <Col lg={12} style={Styles.container}>
                <h5> Questions and Answers </h5>
                <Col style={Styles.questSection} lg={6} xs={12}>
                    {data.map((item, index) => {
                        return (
                            <Col lg={12} style={{ marginBottom: '10px', ...Content.colCentrify }}>
                                <Row style={Styles.qRow} >
                                    <div style={Styles.quest} onClick={() => { setSelected(index) }} >
                                        {item.quest}
                                    </div>
                                    <div style={{ width: '5px' }} onClick={() => { setSelected(index) }}>
                                        symbol
                                    </div>
                                </Row>
                                {selected === index &&
                                    <Row lg={12} style={Styles.desc}>
                                        {item.description}
                                    </Row>
                                }
                            </Col>
                        )
                    })}

                </Col>
            </Col>
            <Footer />
        </Col>
    )
}


const Styles = ({
    container: {
        ...Content.colCentrify,
        backgroundColor: 'whitesmoke'
    },
    questSection: {
        padding: '20px'
    },
    qRow: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 0px 8px 1px lightgray',
        cursor: 'pointer'
    },
    quest: {
        backgroundColor: 'white',
        width: '90%',
        height: '100px',
        fontFamily: 'Play, Sans- serif',
        fontSize: '20px',
        fontWeight: '400px',
    },
    desc: {
        backgroundColor: 'white',
        width: '100%',
        height: '500px',
        padding: '15px'
    }
})