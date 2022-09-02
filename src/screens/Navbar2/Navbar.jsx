import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import './mobile.css'

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <Navbar className='primaryNavbar2' collapseOnSelect expand="lg" lg={12} xs={12} >
            <Container>
            <Image style={Styles.Logo} src={logo} roundedCircle />
                <Navbar.Toggle style={{ color: 'white', backgroundColor: 'white' }} variant='light' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mt-3" >   </Nav>
                    <Nav style={Styles.mobileMenu}>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/') }}> Home </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/aboutus') }} > About us </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/getsupport') }} > Get Support </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/professionals') }}> Meet our Professionals </Nav.Link>
                        <Nav.Link style={Styles.Text}> Sign Up </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/community') }}> Community</Nav.Link>
                        {/* <Nav.Link style={Styles.Text} onClick={() => { navigate('/stripe') }}> Stripe</Nav.Link> */}
                        {/* <Nav.Link style={Styles.Text} onClick={() => { navigate('/subscription') }}> StripeSubscribe </Nav.Link> */}
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
        width: '120px',
        height: '125px',
        marginRight: '15px',
        color: 'white'
    },
    mobileMenu: {
        padding: '10px'
    }
})