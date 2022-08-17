import firebase from 'firebase/compat/app'
import "firebase/compat/database"

export class Community {

    createCommunity = async (community) => {
        await firebase.database().ref(`users/${community.owner}/Groups`).push({ ...community })
        await firebase.database().ref(`${community.type}/${community.owner}_${community.name}`).set({ ...community })
    }

    getCommunities = async (community) => {
        var resp = await firebase.database().ref(`/${community.type}`).once('value')
        var dataList = []
        resp.forEach((group) => {
            var groupData = group.val()
            var keys = Object.keys(groupData.Posts)
            groupData.Posts = keys.map((k) => { return groupData.Posts[k] })
            console.log(`group data :${JSON.stringify(groupData,null,4)}  \n`)
            dataList.push(groupData)
        })
        return dataList
    }
}