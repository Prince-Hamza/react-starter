import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export default function Cover() {

    const { appData, setAppData } = useContext(AppContext)

    return (
        <Col lg={12} style={{ ...Styles.defaultCover }}>
            <Col lg={6} >
                <p >
                    Communities enable you to discuss topics with colleagues and like minded people which helps you build a better perspective of your health.
                </p>
                <p>
                    start a new topic or choose one to get started.
                </p>
            </Col>
        </Col>
    )
}

const Styles = ({
    defaultCover: {
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        left: '0px',
        backgroundSize: 'cover',
        height: window.screen.height,
        width: '100%',
        textAlign: 'center',
        color:'white',
        ...Content.colCentrify
    },
    coverOverlayer: {
        top: '0%',
        left: '0%',
        width: '100%',
        height: '700px',
        backgroundColor: 'rgb(18,18,226,0.43)',
        ...Content.colCentrify
    },
    profilePic: {
        width: '200px',
        height: '200px',
        border: 'solid 2px white',
        marginBottom: '10px'
    },
    names: {
        border: 'dashed',
        width: '300px',
        ...Content.rowCentrify
    },
    strip: {
        height: '50px',
        backgroundColor: 'rgb(45,45,45)',
        color: 'white',
        marginBottom: '15px',
        marginTop: '700px'
    }
})