import firebase from 'firebase/compat/app'
import "firebase/compat/database"

export class GroupPosts {

    postInGroup = async (groupPath, postData) => {
        await firebase.database().ref(groupPath).push({ ...postData })
    }

    getGroupPosts = async (groupPath) => {
        alert(`path : ${groupPath}`)
        var resp = await firebase.database().ref(groupPath).once('value')
        var dataList = []
        resp.forEach((item) => { 
            alert(`p : ${JSON.stringify(item)}`)
            dataList.push(item.val()) 
        })
        return dataList
    }
}