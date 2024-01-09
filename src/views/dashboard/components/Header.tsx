import { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import NavbarMenu from '../components/Navbar';


// import "../../dashboard/App.css";
class Layout extends Component<any, any> {
  //  constructor declaration

  //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)
  componentDidMount = () => {
    
  };

  //  onHandleFunction declaration

  //  render
  render() {

    return (
      <NavbarMenu/>
        
      // <PageWrapper>
      //   <PageHeaderWrapper>
      //     <Helmet>
      //       <title>APPS</title>
      //     </Helmet>
      //     <h2 className="page-title-global pl-3">Nama Website</h2>
      //     {/* <NavbarMenu/> */}
      //     <div className="nav-area">
      //         <NavbarMenu />
      //     </div>
          
      //   </PageHeaderWrapper>
      //   <hr className="my-0" />

      // </PageWrapper>

    );
  }
}

export default Layout;
