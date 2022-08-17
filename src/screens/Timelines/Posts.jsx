import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../Context'
import Post from './Post'
import { GroupPosts } from '../../backend/database/Timeline'

export default function Posts() {

    const { appData, setAppData } = useContext(AppContext)
    const [posts, setPosts] = useState([])
    const [once, setOnce] = useState(true)




    useEffect(() => {

        const getInfo = async () => {
            var uid = appData.userInfo.uid.split('.').join('_')
            var groupName = appData.selectedGroup.name
            var groupId = `${uid}_${groupName}`
            var groupPosts = new GroupPosts()
            var postsInfo = await groupPosts.getGroupPosts(`/Topics/${groupId}/Posts`)
            setOnce(false)
            setPosts([...postsInfo])
        }

        
        setPosts(appData.selectedGroup.Posts)
    },[])

    return (
        <Col lg={12} style={Styles.container}>
            {posts.map((post) => {
                return (
                    <Post info={post} />
                )
            })}
        </Col>
    )
}

const Styles = ({
    container: {
        height: 'auto',
    }
})