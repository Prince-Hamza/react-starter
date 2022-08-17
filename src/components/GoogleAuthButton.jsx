import React from 'react'
import { Content } from '../styles/styles'
import { Button, Image } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

export default function GoogleAuthButton({ icon, style, children, onClick }) {
    return (
        <Col lg={12} style={{ ...Styles.Button, ...Content.colCenterLeft, ...style }} onClick={(e) => { onClick(e) }}>
            <section style={Content.rowCentrify}>
                <img style={Styles.logo} src={icon} alt={''} />
                <p style={{ color: '#222', marginTop: '15px' }}> {children} </p>
            </section>
        </Col>
    )
}


const Styles = ({
    Button: {
        padding: '10px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        color: 'white',
        height: '40px',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0px 0px 8px 1px lightgray'
    },
    logo: {
        width: '30px',
        height: '30px',
        border: 'solid 3px',
        marginRight: '20px',
    }
})