import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Col, Row, Container } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import cardImage1 from '../../images/cards/ci1.jpg'
import cardImage2 from '../../images/cards/ci2.jpg'
import cardImage3 from '../../images/cards/ci3.jpg'

function BasicExample() {
    const info = [
        {
            image: cardImage1,
            title: 'Divorce & Separation',
            description: 'Separating from someone you’ve loved is never easy. This can be a painful part of life but connecting with those that have gone through the same experience can assist with moving on to the next chapter'
        },
        {
            image: cardImage2,
            title: 'Narcissistic Relationships',
            description: 'Some days can be mentally exhausting and challenging. Speaking up can help shape your journey together. Learn tools to build resilience and look forward to better days ahead.'
        },
        {
            image: cardImage3,
            title: 'Grief',
            description: 'Grief is a complicated emotion, it’s the body’s natural response to trauma and loss. A support group can help with the overwhelming array of emotions you might be feeling. Please know you’re not alone.'
        }
    ]
    return (
        <Container>
            <Col lg={12} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4> Join a Group </h4>
            </Col>
            <br />

            <Row style={Content.rowSpaceAround} lg={8}>
                {info.map((item) => {
                    return (
                        <Col key={Math.random()} lg={4} style={{ marginBottom: '50px', ...Content.colCentrify }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <p style={Styles.join}> JOIN </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default BasicExample;

const Styles = ({
    join: {
        color: '#9151FF',
        font: '16px poppins'
    }
})