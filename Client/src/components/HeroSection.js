import React from 'react';
import '../App.css';
import { Button } from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import './HeroSection.css';
import { generatePath } from 'react-router';

function HeroSection() {
  return (
    <div>
        <div className='hero-container '>
            <div className="left-content">
                <h1>
                  A Revolution! That's all <br/>You need for product Searching</h1>
                  <p>Now do all product searching work easily throught<br/>
                  just one application and without wasting time on<br/>
                  doing it manually</p>
                  <div className='hero-btns'>
                  
                    <Button
                      className='btns'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                    >
                      GET STARTED
                    </Button>
                  
                  </div>
            </div>

            <div className="right-content">
              <Image className="right-image" src={require('../images/graph.png')} alt=""/>
            </div>
        </div>

        <div className="lower-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,197.3C672,181,768,171,864,186.7C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        </div>
    </div>

    
  );
}

export default HeroSection;
