import React from 'react'
import { useState } from 'react'
import { Content } from '../../styles/styles'
import { useContext } from 'react'
import { AppContext } from '../../Context'
import { Row, Col, Form, Button, Image, ProgressBar } from 'react-bootstrap'
import { FirebaseStorage } from '../../backend/storage/uploadToFirebase'
import { ToastContainer, toast } from 'react-toastify'
import { GroupPosts } from '../../backend/database/Timeline'

export default function CreatePost() {
    const { appData, setAppData } = useContext(AppContext)
    const [post, setPost] = useState({ postedBy: null, displayName: null, text: null, image: null, timestamp: null })
    const [imageUrl, setImageUrl] = useState()
    const [percent, setPercent] = useState()


    const chooseFile = () => { document.getElementById('sf').click() }
    const onProgress = (percentage) => { setPercent(percentage) }
    const onUpload = (downloadUrl) => { setImageUrl(downloadUrl) }
    const onUploadFail = (error) => { console.log(`upload failed : ${error}`) }

    function random() { return Math.trunc(Math.random() * (100000000 - 1) + 1) }

    const onFileStatus = (files) => {
        const storage = new FirebaseStorage(files)
        storage.uploadFile(`${appData.userInfo.uid}/${random()}`, files[0], onUpload, onUploadFail, onProgress)
    }


    const groupPost = async () => {

        setPost({
            displayName: appData.userInfo.uid,
            postedBy: appData.userInfo.uid.includes('.') ? appData.userInfo.uid.split('.').join('_') : appData.userInfo.uid,
            text: post.text,
            image: imageUrl ? imageUrl : null,
            timestamp: new Date(Date.now()).toDateString()
        })

        var groupId = appData.userInfo.uid + '_' + appData.selectedGroup.name
        groupId = groupId.split('.').join('_')

        var groupPosts = new GroupPosts()
        groupPosts.postInGroup(`/Topics/${groupId}/Posts`, post)
        toast('Posted Successfully')

    }


    return (
        <Col lg={6} style={{ ...Styles.postCard, ...Content.colTopCenter }}>

            <ToastContainer position='bottom-center' autoClose={true} />

            <div style={Styles.headingWrap} >
                <p style={{ color: 'white' }}> Create Post</p>
            </div>


            <div lg={12} style={Styles.postHeader}>
                <Image roundedCircle style={Styles.postProfilePic} src={"https://www.verywellmind.com/thmb/TX6Na6eZCY4l5Jl_YrJpLZa3oYE=/2578x2578/smart/filters:no_upscale()/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg"} alt="" />
                <Col>
                    <h5 style={{ color: 'white' }}> {appData.userInfo.displayName ? appData.userInfo.displayName : 'Anonymous'} </h5>
                    {/* <h6 style={{ color: 'white' }}>  22 Paris </h6> */}
                </Col>
            </div>

            <Row style={{ ...Content.rowEndCenter, width: '100%', marginBottom: '5px' }}>
                <Button type="submit" style={Styles.postButton} onClick={() => { chooseFile() }}> Upload Pictures </Button>
            </Row>

            <input style={Styles.postText} type="text" placeholder={'What you wish to say'} onChange={(e) => { post.text = e.target.value; setPost(post) }} />
            <input id="sf" type="file" multiple={'multiple'} style={{ display: 'none' }} onChange={(e) => { onFileStatus(e.target.files) }} />

            <br />
            <Col lg={12}>
                {percent && <ProgressBar striped variant="success" now={percent} />}
            </Col>
            <br />
            {imageUrl && <Image style={Styles.image} src={imageUrl} />}



            <Row style={{ ...Content.rowEndCenter, width: '100%' }}>
                <Button type="submit" style={Styles.postButton} disabled={appData.selectedGroup.name ? false : true} onClick={() => { groupPost() }}> Post </Button>
            </Row>


        </Col>
    )
}



const Styles = ({
    postCard: {
        height: 'auto',
        backgroundColor: 'rgb(45,45,45)',
        marginBottom: '20px',
        padding: '15px',
        boxShadow: '0px 0px 8px 1px rgb(30,30,30)',
    },
    postProfilePic: {
        width: '30px',
        height: '30px',
        marginBottom: '15px',
        backgroundSize: 'cover',
        marginRight: '20px'
    },
    postHeader: {
        ...Content.rowLeftStart,
        width: '99%',
        marginBottom: '15px'
    },
    headingWrap: {
        ...Content.colTopLeft,
        width: '100%'
    },

    picUploadWrap: {
        ...Content.rowEndCenter,
        width: '100%'
    },
    postText: {
        width: '99%',
        height: '100px',
        outline: 'none',
        border: 'none',
        backgroundColor: 'rgb(65,70,70)',
        color: 'white',
        marginBottom: '5px'
    },
    postButton: {
        width: '150px',
        height: '40px',
        backgroundColor: 'rgb(30,30,30)',
        border: 'none'
    },
    image: {
        width: '100%',
    }

})


