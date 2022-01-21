// import React from 'react';
// import '../../App.css';

// function Product() {
//     return (
//         <div className="home">
//             <h1>Product</h1>
            
//         </div>
//     )
// }

// export default Product

// import React from 'react'
// import '../../App.css';

// function Profile() {
//     return (
//         <div className="home">
//             <h1>Profile here</h1>
            
//         </div>
//     )
// }

// export default Profile


import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis} from 'recharts';
import "./Product.css";

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];


function products() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  // const [file, setFile] = useState(initialState: null);

  const onInputChange = (e) => {
    console.log(e.target.value)
  };

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
        <h1 className="heading">Products Page</h1>

        <div className='searchdiv'>
            <Form.Label>Search Product</Form.Label>
            <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Product Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button className='searchbutton' variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
            </InputGroup>
        </div>
        
        <div className='graph-container'>
        <ResponsiveContainer className='graph' width="100%" aspect={3}>
            <LineChart data={pdata} width={500} height={300} margin={{top:5, right:100, left:20, bottom:5}}>
              <XAxis dataKey='name' interval={'preserveStartEnd'}/>
              <YAxis />
              <Line dataKey="student" />
            </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer className='graph' width="100%" aspect={3}>
            <LineChart data={pdata} width={500} height={300} margin={{top:5, right:100, left:20, bottom:5}}>
              <XAxis dataKey='name' interval={'preserveStartEnd'}/>
              <YAxis />
              <Line dataKey="student" />
            </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer className='graph' width="100%" aspect={3}>
            <LineChart data={pdata} width={500} height={300} margin={{top:5, right:100, left:20, bottom:5}}>
              <XAxis dataKey='name' interval={'preserveStartEnd'}/>
              <YAxis />
              <Line dataKey="student" />
            </LineChart>
        </ResponsiveContainer>
        </div>
        
      </IconContext.Provider>
    
  );
}

export default products;
