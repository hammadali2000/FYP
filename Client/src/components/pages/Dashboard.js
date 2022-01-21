import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Button, Dropdown } from 'react-bootstrap';
import { SidebarData } from "../SidebarData";
import "../Dashboard.css";
import { IconContext } from "react-icons";
import Login from "./Login";
import Axios from "axios";
import { useHistory } from "react-router";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  Axios.defaults.withCredentials = true;
   const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
   const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };
   const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  };
  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      uname: username,
      pass: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].uname);
      }
    });
  }, []);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar2">
        <Link to="#" className="menu-bars2">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <img src="images/logo.png" className="nav-image2" />
        <div className="main-div">
          <div>
            <h1>Welcome</h1>
          </div>

          <div>
            {/* <NavDropdown style={{color:'white'}} className="login-name" title={loginStatus}  id="basic-nav-dropdown">
              <NavDropdown.Item className="item-name" href="#action/3.1"> My Profile </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="item-name" href="#action/3.4" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown> */}

              <Dropdown>
                <Dropdown.Toggle className="login-name" id="dropdown-basic">
                  {loginStatus}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="item-name" href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item className="item-name" onClick={handleLogout} href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>

        </div>
       
      </div>
      <nav className={sidebar ? "nav-menu2 active" : "nav-menu2"}>
        <ul className="nav-menu-items2" onClick={showSidebar}>
          <li className="navbar-toggle2">
            <Link to="/Profile" className="menu-bars2">
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
    </IconContext.Provider>
  );
}

export default Dashboard