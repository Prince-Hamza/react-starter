import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Center from '../../components/Center'
import { Content } from '../../styles/styles'
import { Image } from 'react-bootstrap'
import StarRating from 'react-star-rating'


export default function Reviews() {
    return (
        <Row lg={12} style={Content.rowCentrify}>

            <Center>
                <h4 style={{ color: '#9151FF' }} > See what our members have to say  </h4>
            </Center>

            <br />

            <Col lg={6} style={Content.colCentrify} >
                <div style={{ ...Styles.Card, ...Content.colCentrify }}>
                    <Row>
                        <p>
                            I was looking for a supportive group that understood the journey of separation and ChapterUp helped me at my time of need.
                        </p>
                    </Row>
                    <Row style={{ ...Content.rowSpaceBetween, width: '100%' }}>
                        <Col>
                            <Image roundedCircle src={'http://www.chapterup.com/wp-content/uploads/elementor/thumbs/Dani-pphqk7z65d9ssxru375wafy0ebnhfkj1qkzwchhh8g.jpeg'} />
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                </div>
            </Col>
            <Col lg={6}>
            </Col>
        </Row>
    )
}


const Styles = ({
    Card: {
        width: '600px',
        height: '200px',
        border: 'dashed 1px #222',
        backgroundColor: ''
    }
})