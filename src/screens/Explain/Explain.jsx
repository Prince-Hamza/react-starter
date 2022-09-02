import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Explain() {
    return (
        <Row lg={12} style={Styles.background}>
            <Col lg={5}>
                <Image style={Styles.image} src={'https://www.chapterup.com/wp-content/uploads/2022/06/Online-therapy.jpg'} alt={''} />

            </Col>

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
    )
}

const Styles = ({
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