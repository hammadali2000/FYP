import React, { useState } from "react";
// import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { container, row, Form, Button } from "react-bootstrap";
import "../Signup.css";
import Axios from "axios";
import Navbar from '../Navbar';

export default function SignUp() {
  const [nameReg, setNameReg] = useState("");
  const [username, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [conpassReg, setConPassReg] = useState("");
  Axios.defaults.withCredentials = true;
  
  const createUser = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: nameReg,
      uname: username,
      email: emailReg,
      pass: passReg,
      conpass: conpassReg,
    }).then((response) => {
      console.log("response");
    });
  };

  return (
    <div>
    <Navbar />
      <div className="container main-divs">
          <div className="image-divs">
            <img className="images" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=338&ext=jpg" alt="" />
            <br />
            </div>
          <div className="signup-divs">
            <h3 className="signup-text">Signup To MTP</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="email-password-input"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={(e) => {
                    setNameReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="email-password-input"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => {
                    setUsernameReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="email-password-input"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="email-password-input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="email-password-input"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConPassReg(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="button-div">
                <Button className="button-signup" type="submit" onClick={createUser}>
                  Signup
                </Button>
              </div>
              <Form.Group style={{textAlign: "left"}} className="mt-2" controlId="formBasicPassword">
                        <Form.Label>
                          Already have an account ?{" "}
                          <span className="link"> Login here</span>
                        </Form.Label>
              </Form.Group>
            </Form>
          </div>
        
      </div>
    </div>
  );
}
