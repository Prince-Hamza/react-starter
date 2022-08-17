import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import Center from '../../components/Center'
import GoogleAuthButton from '../../components/GoogleAuthButton'
import { Content } from '../../styles/styles'
import { webAuth } from '../../backend/auth/firebaseAuth'
import { useState } from 'react'
import { AppContext } from '../../Context'
import { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const auth = new webAuth()
const googleIcon = `https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png`
const emailIcon = `https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png`

export default function Auth({ setUserInfo }) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const { appData, setAppData } = useContext(AppContext)

    const googleLogin = () => { auth.googleLogin() }

    const success = (action, resp) => {
        toast(`${action} successfull`)
        appData.userInfo = resp.user.providerData[0]
        setAppData({ ...appData })
    }

    const continueWithEmail = async () => {
        var resp, resp2
        resp = await auth.EmailLogin(email, pass)
        if (resp.user) success('Login', resp)
        if (resp.error) resp2 = await auth.EmailSignUp(email, pass)
        if (resp2 && resp2.user) success('Signup')
        if (resp2 && resp2.error) alert(`error : ${resp.error}`)
    }

    return (
        <Col lg={12} style={{ ...Content.colCentrify, ...Styles.theme }} >
            <Col lg={4}>
                <Form.Label style={{ marginTop: '50px', color: 'white' }}> Email</Form.Label>
                <Form.Control style={Styles.input} type='text' placeholder='example@gmail.com' onChange={(e) => { setEmail(e.target.value) }} />
                <br />
                <Form.Label style={{ color: 'white' }} > Password</Form.Label>
                <Form.Control style={{ ...Styles.input, marginBottom: '20px' }} type='password' onChange={(e) => { setPass(e.target.value) }} />
            </Col>
            <br />
            <Col lg={4}>
                <GoogleAuthButton icon={emailIcon} onClick={(e) => { continueWithEmail() }} > Continue via Email </GoogleAuthButton>
                <br />
                <Row lg={12} style={{ ...Content.rowCentrify, color: 'white' }} >  OR  </Row>
                <br />
                <GoogleAuthButton icon={googleIcon} onClick={(e) => { googleLogin() }}> Continue via Google </GoogleAuthButton>
            </Col>
        </Col>
    )
}


const Styles = ({
    theme: {
        height: '1250px',
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        overflow: 'hidden',
    },
    input: {
        width: '100%',
        height: '35px',
    }
})