import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Center from '../../components/Center'
import { Content } from '../../styles/styles'
import { Image } from 'react-bootstrap'
import StarRating from 'react-star-rating'


export default function Reviews() {

    const [ReviewNum, setReviewNum] = useState([{}, {}, {}, {}])
    const [shadow, setShadow] = useState(['0px 0px 0px 0px white', '', '', ''])

    const toggleShadow = (index) => {
        var newShadow = shadow[index].includes('white') ? '0px 0px 8px 1px lightgray' : '0px 0px 0px 0px white'
        shadow[index] = newShadow
        setShadow([...newShadow])
    }

    return (
        <Row lg={10} xs={7} key={Math.random()} style={Content.rowCentrify}>

            <Center>
                <h4 style={{ color: '#9151FF' }} > See what our members have to say  </h4>
            </Center>

            <br />

            {ReviewNum.map((review, index) => {
                return (
                    <Col lg={5} xs={8} style={{ ...Content.colCentrify }} >
                        <div style={{ ...Styles.Card, ...Content.colCentrify, boxShadow: shadow[index] }} onMouseOver={() => { toggleShadow(index) }} onMouseLeave={() => { toggleShadow(index) }}>

                            <p>  I was looking for a supportive group that understood the journey of separation and ChapterUp helped me at my time of need. </p>

                            <Row style={{ ...Content.rowSpaceBetween, width: '100%' }}>
                                <Col>
                                    <Image roundedCircle src={'http://www.chapterup.com/wp-content/uploads/elementor/thumbs/Dani-pphqk7z65d9ssxru375wafy0ebnhfkj1qkzwchhh8g.jpeg'} />
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}


const Styles = ({
    Card: {
        width: '600px',
        height: '200px',
        padding: '10px',
        marginRight: '10px',
        marginBottom: '10px'
    }
})