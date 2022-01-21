import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../Dashboard.css';
import "./Profile.css";
import { IconContext } from 'react-icons';
import Axios from "axios";
import { useHistory } from "react-router";


function Profile() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [loginStatus, setLoginStatus] = useState("");

  return (
   
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar2'>
            
          
          <Link to='#' className='menu-bars2'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src='images/logo.png' className="nav-image2"/>
        </div>
        <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar}>
            <li className='navbar-toggle2'>
              <Link to='/Profile' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </ul>
        </nav>


        <Container>
          <Row className="main-row mt-5">
            
            <Col xs={12} lg={6} md={6}>
              <div>
                <img className="image" src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="form">
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled type="text" placeholder={loginStatus} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control disabled type="email" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control disabled type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control disabled type="password" placeholder="********" />
                  </Form.Group>

                  <Button className="save-button" type="button">
                    Save Details
                  </Button>
              </Form>
              </div>
            </Col>


            <Col xs={12} lg={6} md={6}>
              2 of 2
            </Col>

          </Row>
        </Container>


      </IconContext.Provider>
    
  );
}

export default Profile;
