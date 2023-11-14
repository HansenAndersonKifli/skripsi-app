import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import PageWrapper from '../../../components/page_wrapper';
import PageHeaderWrapper from '../../../components/page_header_wrapper';
import { Helmet } from 'react-helmet';
import NavbarMenu from '../components/Navbar';


// import "../../dashboard/App.css";
import { Route, Routes } from 'react-router-dom';
class Layout extends Component<any, any> {
  //  constructor declaration

  //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)
  componentDidMount = () => {
    
  };

  //  onHandleFunction declaration

  //  render
  render() {

    return (
      <PageWrapper>
        <PageHeaderWrapper>
          <Helmet>
            <title>APPS</title>
          </Helmet>
          <h2 className="page-title-global pl-3">Nama Website</h2>
          {/* <NavbarMenu/> */}
          <div className="nav-area">
              <NavbarMenu />
          </div>
          
        </PageHeaderWrapper>
        <hr className="my-0" />

      </PageWrapper>

    );
  }
}

export default Layout;
