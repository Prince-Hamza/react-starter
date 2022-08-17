import schemeJson from './scheme.json'
import firebase from 'firebase/compat/app'
import database from 'firebase/compat/database'

export const setScheme = () => {
    //var uid = firebase.auth().currentUser.uid
    firebase.database().ref(`/chapterup/users/abc123/`).update({ ...schemeJson.user })
    firebase.database().ref(`/chapterup/groups/group123/`).update({ ...schemeJson.group })
}
