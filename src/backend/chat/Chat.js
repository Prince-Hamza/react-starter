import firebase from "firebase/compat/app"
import database from 'firebase/compat/database'



function randomRange(min, max) {
    return Math.trunc(Math.floor((Math.random() * (max - min + 1)) + min))
}

export class ChatSystem {


    constructor() {
        this.once = true
    }


    getChatList = async (uid) => {
        var path = uid.split('.').join('_')
        var chatLinksList = await firebase.database().ref(`/users/${path}/chats`).once('value')
        var linksList = []
        chatLinksList.forEach((item) => { linksList.push(item.val()) })
        return linksList
    }

    getTimestamp = () => { return new Date(Date.now()).toDateString() }

    createConversationKey = async (community) => {
        var uid = firebase.auth().currentUser.uid
        var groupKey = randomRange(1, 1000000000)
        community.chatKey = groupKey
        await firebase.database().ref(`/users/${uid}/chats`).push({ ...community })
        await firebase.database().ref(`/chats/info@${groupKey}`).update({ created: this.getTimestamp(), createdBy: uid })
        return { success: true }
    }

    getPreviousMessages = async (chatKey) => {
        var list = []
        var resp = await firebase.database().ref(`chats/${chatKey}`).once('value')
        resp.forEach((item) => { list.push(item.val()) })
        return list
    }

    onMessage = (path, fn) => {
        var cRef = this
        if (this.once) {
            firebase.database().ref(path).limitToLast(1).on('child_added', (messageResp) => {
                cRef.once = false
                var message = messageResp.val()
                fn(message)
                // alert(`list : ${JSON.stringify(res.val())}`)
                //res.forEach((item) => { list.push(item.val()) })
            })
        }
    }



}  