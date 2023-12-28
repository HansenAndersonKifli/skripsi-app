import { menuItems, menuItems2 } from './MenuItems';
import MenuItems from './Menu';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseSetup';
import { AuthContext } from '../../../context/UserAuthContext';
import { useContext } from 'react';
import './Navbar.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {
  Nav,
  Navbar,
  Card,
  Col,
  Row,
  Button,
  NavDropdown
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>

//navbar & dropdown menu
const NavbarMenu = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext)
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign out successful
        navigate("/");
        console.log("Signed out successfully")
      }).catch((error) => {
      // error
        console.log("error")
      });
  }

  return (
    <>
      <Navbar
        className="navbar navbar-dark bg-dark"
        collapseOnSelect
        expand="full"
        // bg={GetMode()}
        // variant={GetMode()}
      >
        <Navbar.Brand href="#home">Nama</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* dropdown menu nya */}
            {
              currentUser ? (
                //uda login
                <Nav.Link>
                  {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                      <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                      />
                    );
                  })}
                </Nav.Link>
                // <>
                //   <Nav.Link href="/">Home</Nav.Link> 
                //   <Nav.Link href="/kategori">Kategori</Nav.Link> 
                //   <Nav.Link href="/about">About</Nav.Link> 
                //   <Nav.Link href="/profile">Profile</Nav.Link> 
                // </>
              ) : (
                //blm login
                <Nav.Link>
                  {menuItems2.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                      <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                      />
                    );
                  })}
                </Nav.Link>
                // <>
                //   <Nav.Link href="/">Home</Nav.Link> 
                //   <Nav.Link href="/kategori">Kategori</Nav.Link> 
                //   <Nav.Link href="/about">About</Nav.Link> 
                //   <Nav.Link href="/sign-in">Sign In</Nav.Link> 
                // </>
              )
            }
            {/* <NavDropdown title="Other" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    {/* <Nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">UMKM GO!</a>
      <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>

      <div className="collapse navbar-collapse" id="navbars">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Nav> */}
    {/* <nav>
      {
        currentUser ? (
          <ul className="menus pt-1">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        ) : (
          <ul className="menus pt-1">
            {menuItems2.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        )
      }

    </nav> */}
      {/* // <ul className="menus pt-1">
      //   {menuItems.map((menu, index) => {
      //     const depthLevel = 0;
      //     return (
      //       <MenuItems
      //         items={menu}
      //         key={index}
      //         depthLevel={depthLevel}
      //       />
      //     );
      //   })}
      // </ul> */}

    
    {/* <div>
      <button onClick={handleLogout}>
              Logout
      </button>
    </div> */}
    </>
  );
};

export default NavbarMenu;