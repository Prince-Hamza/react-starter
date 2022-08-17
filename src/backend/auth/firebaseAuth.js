import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

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

    loginSession = () => {
        // dummy email password
        // convert sha5
        // put in cookies and database
        // 
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