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
import { ChatSystem } from '../../backend/chat/Chat'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const auth = new webAuth()
const chatSystem = new ChatSystem()
const googleIcon = `https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png`
const emailIcon = `https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png`

export default function Auth({ userInfo, setUserInfo, setChatLinkInfo }) {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const { appData, setAppData } = useContext(AppContext)


  /*  */ const googleLogin = () => { }

  const continueWithEmail = async () => {
    var resp, resp2
    resp = await auth.EmailLogin(email, pass)

    if (resp.user) {
      toast(`Login Successfull`);
      auth.additionalInfo('Anonymous')
      setUserInfo(resp.user.providerData[0])
      var uid = firebase.auth().currentUser.uid
      var res = await chatSystem.createConversationKey({ partner1: 'Administa', partner2: '' })
      setChatLinkInfo({ chatKey: res.chatKey })
    }

    if (resp.error) resp2 = await auth.EmailSignUp(email, pass)

    if (resp2 && resp2.user) {
      toast(`Signup Successful`);
      auth.additionalInfo('Anonymous')
      setUserInfo(resp.user.providerData[0])
      var resk = await chatSystem.createConversationKey(userInfo)
      setChatLinkInfo({ chatKey: resk.chatKey })
    }

    if (resp2 && resp2.error) alert(`error : ${resp2.error}`)

  }

  return (
    <Col lg={12} style={Content.colCentrify} >
      <Col lg={10}>
        <Form.Label style={{ marginTop: '50px' }}> Email</Form.Label>
        <Form.Control style={Styles.input} type='text' placeholder='example@gmail.com' onChange={(e) => { setEmail(e.target.value) }} />
        <br />
        <Form.Label> Password</Form.Label>
        <Form.Control style={Styles.input} type='password' onChange={(e) => { setPass(e.target.value) }} />
      </Col>
      <br />
      <GoogleAuthButton icon={emailIcon} onClick={(e) => { continueWithEmail() }} > Continue via Email </GoogleAuthButton>
      <br />
      <div> --------- OR --------- </div>
      <br />
      <GoogleAuthButton icon={googleIcon} onClick={(e) => { auth.googleLogin() }}> Continue via Google </GoogleAuthButton>
      <ToastContainer />
    </Col>
  )
}


const Styles = ({
  input: {
    width: '100%',
    height: '35px'
  }
})