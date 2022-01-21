import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { container ,Card, Button, Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../Detail.css';

export default function Detail() {
    return(
    <div className="">
    <Container className=" text-center">
        <h1>Services</h1>
        <Row className="mt-5 detail-main">
            <Col xs={12} lg={4} md={4}>
                <Card className="card-details" style={{ width: '18rem' }}>
                    <i class="fas fa-chart-pie mt-3"></i>
                    <Card.Body>
                        <Card.Title className="title">Graphical Analysis</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


            <Col xs={12} lg={4} md={4}>
                <Card className="card card-details" style={{ width: '18rem' }}>
                    <i class="fas fa-search mt-3"></i>
                    <Card.Body>
                        <Card.Title className="title">Keyword Research</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


            <Col xs={12} lg={4} md={4}>
                <Card className="card card-details" style={{ width: '18rem' }}>
                    <i class="fas fa-chart-bar mt-3"></i>
                    <Card.Body>
                        <Card.Title className="title">Product Recommend</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div> 
  );
}