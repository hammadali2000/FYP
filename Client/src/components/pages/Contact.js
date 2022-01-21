import React from 'react';
import Navbar from "../Navbar";
// import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../contact.css';

export default function Contact() {
  return(
   <div>   
        <Navbar />
        <div className="main-div"> 
                
                <div className="image">
                    <h3>Contact Us</h3>
                    <img className="contact-image" src="https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" alt=""/>
                </div>
                <div className="contact-div">    
                    
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control className="email-password-input" type="email" placeholder="Enter your email address" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="email-password-input" type="email" placeholder="Enter Subject here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="desc-input" as="textarea" rows={3} />
                            <Form.Text className="text-muted">
                            Please enter the details of your request. A member of our support staff will respond as soon as possible
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Attachments  (Optional)</Form.Label><br/>
                            <Form.Control className="input-file" type="file" size="lg" />
                        </Form.Group><br />
                    
                        <Button className="button-submit" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
        </div>
    </div>
  )
}
