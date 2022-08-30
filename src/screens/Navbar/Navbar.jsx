import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';
import './mobile.css'

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <Navbar className='primaryNavbar'  collapseOnSelect expand="lg" lg={12} xs={12} >
            <Container>
                <Image style={Styles.Logo} src={'https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg'} roundedCircle />
                <Navbar.Brand style={Styles.Text}>Chapter Up</Navbar.Brand>
                <Navbar.Toggle style={{ color: 'white', backgroundColor: 'white' }} variant='light' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mt-3" >   </Nav>
                    <Nav style={Styles.mobileMenu}>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/') }}> Home </Nav.Link>
                        <Nav.Link style={Styles.Text}> About us </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/professionals') }}> Meet our Professionals </Nav.Link>
                        <Nav.Link style={Styles.Text}> Get Support </Nav.Link>
                        <Nav.Link style={Styles.Text}> Sign Up </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/community') }}> Community</Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/stripe') }}> Stripe</Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/subscription') }}> StripeSubscribe </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const Styles = ({
    Navbar: {
        backgroundColor: '#081322',
        boxShadow: '0px 0px 5px 1px lightgray',
        color: 'white',
    },
    Text: {
        color: 'white'
    },
    Logo: {
        width: '90px',
        height: '85px',
        marginRight:'15px'
    },
    mobileMenu: {
        padding:'10px'
    }
})