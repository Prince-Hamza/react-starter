import firebase from 'firebase/compat/app'
import "firebase/compat/storage";


export class FirebaseStorage {
    constructor(files) {
        this.files = files
    }

    uploadFile = async (path , fileObject, onComplete, onError, onProgress) => {
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child('images/mountains.jpg').put(fileObject)
        uploadTask.on('state_changed',
            (info) => { onProgress((info.bytesTransferred / info.totalBytes) * 100) },
            onError,
            async () => {
                var uri = await uploadTask.snapshot.ref.getDownloadURL()
                onComplete(uri)
            },
        )



        // ref.put(fileObject)
        // .then(async (snapshot) => {
        //     var url = await ref.getDownloadURL()
        //     alert(`upload successful | download url : ${url}`)
        // })
        // .catch((ex) => {
        //     alert(`err : ${JSON.stringify(ex)}`)
        // })
    }

    onProgress = (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }

}