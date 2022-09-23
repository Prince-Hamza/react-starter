import React, { useEffect, useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { ChatSystem } from '../../backend/chat/Chat'
const chatSystem = new ChatSystem()

export default function PreviousMessages({ info }) {

    const [list, setList] = useState([])

    const init = async () => {

        //alert(`pm : ${info.chatLink}`)
        //var messages = await chatSystem.getPreviousMessages(info.chatKey)
        //alert(JSON.stringify(messages))

    }


    const effect = () => { init() }

    useEffect(effect, [])


    return (
        <Col lg={12} style={Styles.container}>

            {list.length > 0 && list.map((item) => {
                return (
                    <Col lg={12} style={Styles.container}>
                        <Row lg={12} style={{ width: '100%' }}>

                            <Image roundedCircle style={{ width: '47px', height: '40px', marginRight: '20px', marginLeft: '15px', backgroundColor: 'white' }} src={item.image} />
                            <div style={{ color: 'white', width: '80%', marginTop: '5px' }} > {item.text} </div>
                        </Row>
                    </Col>
                )
            })}


            {!info.length &&
                <Col lg={12} style={Styles.container}  >
                    <div style={Styles.text}> No Mesages to show </div>
                </Col>
            }

        </Col>
    )
}


const Styles = ({
    container: {
        ...Content.colTopSpaceBetween,
        padding: '0px',
        height: 'auto',
    },
    empty: {
        padding: '0px'
    },
    text: {
        font: 'bold 26px times new roman',
        color: 'white'
    }
})