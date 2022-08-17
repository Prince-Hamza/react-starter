import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Content } from '../../styles/styles'
import { Form } from 'react-bootstrap'
import { Community } from '../../backend/database/community'
import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../Context'

export default function List() {
    const navigate = useNavigate()
    const { appData, setAppData } = useContext(AppContext)
    const [groupList, setGroupList] = useState([])



    useEffect(() => {
        const getInfo = async () => {
            const communityJson = ({ owner: appData.userInfo.uid, type: 'Topics' })
            communityJson.owner = appData.userInfo.uid
            if (communityJson.owner.includes('.')) communityJson.owner = communityJson.owner.split('.').join('_')

            var community = new Community(communityJson)
            var groups = await community.getCommunities(communityJson)
            setGroupList([...groups])
            appData.groups = groups
            appData.selectedGroup = groups[0]
            setAppData({ ...appData })
        }

        if (!groupList.length) getInfo()

    }, [])




    const onSelect = (item) => {
        appData.selectedGroup = item
        setAppData({ ...appData })
        alert(appData.selectedGroup.Posts.length)
       navigate(`/community/${item.owner}_${item.name}`)
    }


    return (
        <Col lg={12} style={Styles.container} >
            <br />
            <button style={Styles.create} onClick={() => { navigate('/create') }} > + create </button>
            <br />
            <Form.Label style={Styles.topicHeading}> Topics </Form.Label>
            <br />
            <Form.Group style={{ ...Content.colCentrify, width: '100%' }}>
                {groupList.map((item) => {
                    return (
                        <Form.Label key={Math.random()} style={Styles.topicList} onClick={() => { onSelect(item) }} > {item.name}   </Form.Label>
                    )
                })}
            </Form.Group>
        </Col>
    )
}

const Styles = ({
    container: {
        ...Content.colTopCenter,
        marginleft: '15px',
        //backgroundColor: 'rgb(40,40,40)',
        backgroundColor: '#101B2C',
        height: window.screen.height,
        width: '100%',
        padding: '0px',
    },
    create: {
        width: '80%',
        height: '40px',
        border: 'none',
        borderRadius: '50px',
        outline: 'none',
        backgroundColor: 'whitesmoke',
        color: '#222',
        cursor: 'pointer',
        boxShadow: '0px 0px 6px 1px lightgray',
        marginBottom: '10px'
    },
    topicHeading: {
        color: 'lightgray',
        font: 'bold 18px poppins'
    },
    topicList: {
        color: 'white',
        font: '14px poppins',
        marginBottom: '15px',
        cursor: 'pointer'
    }
})