import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import girl from '../../images/Online-therapy.jpg'
import { Content } from '../../styles/styles'


export default function OurStory() {
    return (
        <Col lg={12} style={Styles.story}>

            <br />

            <Col lg={12} style={{ ...Content.colCentrify }}>
                <Row style={{ ...Content.rowCentrify, width: '100%' }} >
                    <div style={Styles.line}> </div>
                    <div style={Styles.storyText} > Our story </div>
                    <div style={Styles.line}> </div>
                </Row>
            </Col>


            <br />

            <Row lg={12} style={Styles.background}>

                <Col lg={5}>
                    <Image style={Styles.image} src={girl} alt={''} />
                </Col>
                <p></p>


                <Col lg={5}>

                    <h4> Why Chapterup  </h4>

                    <h5>Built through Lived Experience and back by Medical Journals</h5>
                    <p>
                        Created by founders with lived experiences to get you through life challenges like separation, divorce, toxic relationships and grief. Backed by medical journals that promote Group Support.
                    </p>

                    <h5>Matched for Safety and Support</h5>
                    <p>
                        Matched with people going through similar life challenges. A safe and supportive online space to receive emotional support, learn coping skills and heal.
                    </p>

                    <h5>Professionally Led</h5>
                    <p>
                        Feel comfortable with your first session before any obligations to join. Membership starts at $29 per month which is significantly cheaper than Therapy sessions.
                    </p>

                    <button style={Styles.Button}>
                        BOOK FREE DISCUSSION
                    </button>
                </Col>
            </Row>
        </Col>
    )
}

const Styles = ({
    story: {
        backgroundColor: '#D9D9D9',
        border: 'solid 1px #D9D9D9'
    },
    storyText: {
        width: '100px',
        marginTop: '12px'
    },
    line: {
        width: '20%',
        height: '1px',
        backgroundColor: 'blue',
        marginTop: '16px',
    },
    background: {
        marginLeft: '0px',
        marginBottom: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: '20px'
    },
    image: {
        width: '100%',
        height: '300px'
    },
    Button: {
        border: 'none',
        outline: 'none',
        backgroundColor: '#9151FF',
        color: 'white',
        width: '250px',
        height: '40px',
        borderRadius: '50px'
    }
})

