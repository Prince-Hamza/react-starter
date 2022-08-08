import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from 'react-bootstrap';

function BasicExample() {
    const arr = [0, 1, 2, 3]
    return (
        <Container>
            <Row lg={12}>
                {arr.map(() => {
                    return (
                        <Col key={Math.random()} lg={4} style={{ marginBottom: '50px' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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

