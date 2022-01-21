// import React from 'react';
// import '../../App.css';

// function Reports() {
//     return (
//         <div className="home">
//             <h1>Reports</h1>
            
//         </div>
//     )
// }

// export default Reports

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
import { IconContext } from 'react-icons';


function Reports() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
        <h1>Reports Page</h1>
      </IconContext.Provider>
    
  );
}

export default Reports;
