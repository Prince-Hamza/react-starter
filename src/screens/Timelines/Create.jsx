import React from 'react'
import { Row, Col, Form, Button, Image, ProgressBar } from 'react-bootstrap'
import { AppContext } from '../../Context'
import { Content } from '../../styles/styles'
import { FirebaseStorage } from '../../backend/storage/uploadToFirebase'
import { useState, useContext } from 'react'
import { Community } from '../../backend/database/community'
import { ToastContainer, toast } from 'react-toastify'

export default function Create() {
    const [community, setCommunity] = useState({ name: '', type: '', cover: '', owner: '' })
    const { appData, setAppData } = useContext(AppContext)
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

    const createCommunity = async () => {
        community.cover = imageUrl
        community.owner = appData.userInfo.uid
        if (community.owner.includes('.')) community.owner = community.owner.split('.').join('_')
        setCommunity(community)
        const groupsClass = new Community()
        await groupsClass.createCommunity(community)
        toast(`${community.type} created successfully`)
    }

    return (
        <Row lg={12} style={Styles.appWrapper}>


            <Col lg={11} style={Styles.column2}>
                <Col lg={4} style={Styles.card}>

                    <p style={{ color: 'white' }}> Create a group or topic for community discussion </p>
                    <input id="sf" type="file" multiple={'multiple'} style={{ display: 'none' }} onChange={(e) => { onFileStatus(e.target.files) }} />

                    <Form.Group>
                        <Form.Label style={Styles.label}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(e) => { community.name = e.target.value; setCommunity(community) }} />
                    </Form.Group>

                    <br />

                    <Form.Group>
                        <Form.Label style={Styles.label}>Community Type</Form.Label>
                        <Row lg={12} >
                            <Form.Check style={{ width: '30px' }} checked={community.type === 'Groups ' ? true : false} onChange={() => { community.type = 'Groups'; setCommunity({ ...community }) }} />
                            <Form.Label style={{ ...Styles.label, width: '100px' }} > Group </Form.Label>
                        </Row>
                        <Row lg={12} >
                            <Form.Check style={{ width: '30px' }} checked={community.type === 'Topics' ? true : false} onChange={() => { community.type = 'Topics'; setCommunity({ ...community }) }} />
                            <Form.Label style={{ ...Styles.label, width: '100px' }} > Topic </Form.Label>
                        </Row>
                    </Form.Group>

                    <br />

                    <Form.Group>
                        <Form.Label style={{ ...Styles.label, marginRight: '20px' }} >Cover Picture</Form.Label>
                        <Button type="submit" onClick={() => { chooseFile() }}>Choose from computer </Button>
                    </Form.Group>

                    <br />

                    {imageUrl && <Image style={Styles.image} src={imageUrl} />}
                    {percent && <ProgressBar striped variant="success" now={percent} />}

                    <br />

                    {imageUrl && <Button type="submit" onClick={() => { createCommunity() }}> Create </Button>}
                    <ToastContainer position='bottom-center' />
                </Col>
            </Col>
        </Row>
    )
}


const Styles = ({
    appWrapper: {
        ...Content.rowLeftStart,
        marginLeft: '0.1px'
    },
    column2: {
        position: 'relative',
        width: '96.5%',
        height: window.screen.height,
        backgroundColor: 'rgb(50,50,50)',
        padding: '15px',
    },
    card: {
        backgroundColor: '#222',
        boxShadow: '0px 0px 6px 1px #222',
        padding: '15px'
    },
    label: {
        color: 'white'
    },
    image: {
        width: '100%',
    }
})

