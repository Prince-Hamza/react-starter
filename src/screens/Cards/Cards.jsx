import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Col, Row, Container } from 'react-bootstrap'
import { Content } from '../../styles/styles'

function BasicExample() {
    const arr = [0, 1, 2]
    return (
        <Container>
            <Col lg={12} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4> Join a Group </h4>
            </Col>
            <br />

            <Row style={Content.rowCentrify} lg={8}>
                {arr.map(() => {
                    return (
                        <Col key={Math.random()} lg={4} style={{ marginBottom: '50px', ...Content.colCentrify }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
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