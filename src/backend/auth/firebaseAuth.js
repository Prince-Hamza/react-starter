import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import sha256 from 'crypto-js/sha256'
import Cookies from 'js-cookie'
import axios from 'axios'

export class webAuth {

    EmailSignUp = async (email, pass) => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, pass);
            const user = response.user
            return { user: user }
        } catch (ex) {
            return { error: ex }
        }
    }

    EmailLogin = async (email, pass) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, pass)
            const user = response.user
            return { user: user }
        } catch (ex) {
            return { error: ex }
        }
    }

    AnonymousLogin = async () => {
        const response = await firebase.auth().signInAnonymously();
        const Id = response.user.uid
        console.log('Resp : ' + Id);
        return Id
    }

    googleLogin = () => {

    }

    setLoginSession = async (email, password) => {
        // executed after successful login
        var authSha = sha256(`${email}___${password}`)  // 3 underscores
        try {
            await firebase.database().ref(`sessions/${authSha}`).update({ email: email, password: password })
        } catch (ex) {
            alert(ex)
        }

        alert('update successful')
        Cookies.set('sessionEncSha256', authSha)
        return { success: true }
    }

    getLoginSession = async () => {
        var sha256 = Cookies.get('sessionEncSha256')
        var resp = await firebase.database().ref(`/sessions/${sha256}`).once('value')
        var data = resp.val()
        if (data === null) return { error: 'Session expired or not found' }
        var emailLogin = await this.EmailLogin(data.email, data.password)
        return emailLogin
    }


    additionalInfo = async (userName) => {
        var uid = firebase.auth().currentUser.uid
        console.log(`additional info: uid : ${uid}`);
        var userResp = await axios.get(`https://hutils.loxal.net/whois`)
        var userInfo = userResp.data
        await firebase.database().ref(`users/${uid}`).update({ displayName: userName ? userName : 'Anonymous', city: userInfo.city, country: userInfo.country })
    }


}



/*
usage 
    const handleAuth = async () => {
        const method = authMode === 'Login' ? auth.EmailLogin : auth.EmailSignUp
        const Id = await method(email, pass)
        if (Id) toast(`${authMode === 'Login' ? 'Successfully Logged In' : 'Successfully signed up'}`)
        navigate('/dashboard')
    }
*/