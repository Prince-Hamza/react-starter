import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Center from '../../components/Center'
import { useNavigate } from 'react-router-dom'
//import menuBarPic from '../../images/admin/menuBar.PNG'

export default function Menu() {

    const navigate = useNavigate()

    return (
        <Col lg={2} xs={12} style={Styles.menubar}>
            <br />
            <Row style={Styles.menuItem} onClick={() => { navigate(`/admin/appointments`) }} >
                <Center>  Appointments  </Center>
            </Row>

            <Row style={Styles.menuItem} onClick={() => { navigate(`/admin/submissions`) }} >
                <Center> Submissions </Center>
            </Row>

            <Row style={Styles.menuItem} onClick={() => { navigate(`/adminChat`) }} >
                <Center> Messenger </Center>
            </Row>

            <Row style={Styles.menuItem} onClick={() => { navigate(`/admin/security`) }} >
                <Center> Security </Center>
            </Row>
        </Col>
    )
}


const Styles = ({
    container: {
        // backgroundColor: '#F5F6F7'
    },
    header: {
        background: 'linear-gradient(90deg,rgba(183,5,222,1) 100%, rgba(218,22,148,1) 0%)',
        height: '100px',
        color: 'white',
        ...Content.rowCentrify
    },
    menubar: {
        height: window.screen.height - 50,
        background: 'linear-gradient(90deg,rgba(183,5,222,1) 100%, rgba(218,22,148,1) 0%)',
        padding: '1px',
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        overflow:'hidden',
        ...Content.colTopCenter
    },
    menuItem: {
        width: '100%',
        height: '70px',
        marginBottom: '5px',
        //background: 'linear-gradient(90deg,rgba(170,0,210,1) 100%, rgba(200,10,130,1) 10%)',
        backgroundColor:'rgba(50,50,50,0.3)',
        cursor: 'pointer',
        color: 'white',
        ...Content.rowCentrify
    },
    mainPage: {
        height: 'auto'
    },
    date: {
        color: '#222',
        font: 'bold italic 24px times new roman'
    }
})
