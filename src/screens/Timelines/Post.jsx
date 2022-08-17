import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function Post({ info }) {
    return (
        <Col lg={6} style={{ ...Styles.postCard, ...Content.colTopCenter }}>

            <div lg={12} style={Styles.postHeader}>
                <Image roundedCircle style={Styles.postProfilePic} src={"https://www.verywellmind.com/thmb/TX6Na6eZCY4l5Jl_YrJpLZa3oYE=/2578x2578/smart/filters:no_upscale()/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg"} alt="" />
                <Col>
                    <h5 style={{ color: 'white' }}> {info.postedBy}  </h5>
                    {/* <h6 style={{ color: 'white' }}>  22 Paris </h6> */}
                </Col>
            </div>

            <p style={Styles.postText} type="text" >
                {info.text}
            </p>

            {info.image && <Image style={Styles.postPic} src={info.image} />}

        </Col>
    )
}

const Styles = ({
    postCard: {
        height: 'auto',
        backgroundColor: 'rgb(45,45,45)',
        marginBottom: '20px',
        padding: '15px',
        boxShadow: '0px 0px 8px 1px rgb(30,30,30)'
    },
    postProfilePic: {
        width: '30px',
        height: '30px',
        marginBottom: '15px',
        backgroundSize: 'cover',
        marginRight: '20px'
    },
    postHeader: {
        ...Content.rowLeftStart,
        width: '99%',
        marginBottom: '15px'
    },
    postTextWrap: {
        ...Content.colCentrify,
        width: '100%'
    },
    postText: {
        width: '99%',
        height: 'auto',
        outline: 'none',
        border: 'none',
        
        color: 'white'
    },
    postPicWrap: {
        ...Content.colCentrify,
        width: '100%',
        marginBottom: '15px'
    },
    postPic: {
        width: '99%',
    }

})
