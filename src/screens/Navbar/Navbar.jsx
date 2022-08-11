import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <Navbar style={Styles.Navbar} collapseOnSelect expand="lg" lg={12} >
            <Container>
                <Image style={Styles.Logo} src={'https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg'} roundedCircle />
                <Navbar.Brand style={Styles.Text}>Chapter Up</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">   </Nav>
                    <Nav>
                        <Nav.Link style={Styles.Text}> Home </Nav.Link>
                        <Nav.Link style={Styles.Text}> About us </Nav.Link>
                        <Nav.Link style={Styles.Text}> Meet our Professionals </Nav.Link>
                        <Nav.Link style={Styles.Text}> Get Support </Nav.Link>
                        <Nav.Link style={Styles.Text}> Sign Up </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/stripe') }}> Stripe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const Styles = ({
    Navbar: {
        height: '120px',
        width: '100%',
        backgroundColor: '#081322',
        boxShadow: '0px 0px 5px 1px lightgray',
        color: 'white'
    },
    Text: {
        color: 'white'
    },
    Logo: {
        width: '90px',
        height: '85px',

    }
})