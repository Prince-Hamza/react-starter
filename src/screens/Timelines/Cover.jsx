import React from 'react'
import {  Col, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export default function Cover() {
    const { appData, setAppData } = useContext(AppContext)
    const cover = appData.selectedGroup.cover ? appData.selectedGroup.cover : ''
    
    return (
        <Col lg={12} style={{ ...Styles.defaultCover, backgroundImage: `url('${cover}')` }}>
            <Col lg={12} style={Styles.coverOverlayer}>

                <Image roundedCircle style={Styles.profilePic} src={'https://www.verywellmind.com/thmb/TX6Na6eZCY4l5Jl_YrJpLZa3oYE=/2578x2578/smart/filters:no_upscale()/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg'} />

                <h4 style={{ color: 'white' }} > {appData.selectedGroup.name} </h4>
                <h6 style={{ color: 'white' }} > Topic created by {appData.userInfo.displayName ? appData.userInfo.displayName : 'Anonymous'} </h6>

            </Col>
        </Col>
    )
}

const Styles = ({
    defaultCover: {
        // position: 'absolute',
        left: '0px',
        backgroundSize: 'cover',
        height: '700px',
        width: '100%',
    },
    coverOverlayer: {
        // position: 'absolute',
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