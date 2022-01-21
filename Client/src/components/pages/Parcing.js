import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import '../Parcing.css';

export default function Parcing() {
  return(
    <Container className="main-container">
    <Row className="col1">
      <Col className="col1">
          <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">STANDARD</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>20/mo</Card.Title>
              <Card.Text className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
          </Card>

      </Col>
      
      <Col className="col2">
      <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">DIAMOND</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>100/mo</Card.Title>
              <Card.Text className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
          </Card>
      </Col>
      
      <Col className="col3">
          <Card className="standard-card" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="card-title">PLATINUM</Card.Title>
              <Card.Title className="card-pricing mt-3"><span className="currency">$</span>55/mo</Card.Title>
              <Card.Text className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
            </Card.Body>
            <div className="text-center mt-3">
              <Button className="buy-button">Buy Now</Button>
            </div>
            <Card.Text className="mt-4 card-bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Card.Text>
          </Card>
      </Col>
    </Row>
  </Container>
  )
}
