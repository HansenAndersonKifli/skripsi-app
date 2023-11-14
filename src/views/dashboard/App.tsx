import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from '../routes/home';
import MakananDanMinuman from '../makanan_dan_minuman/MakananDanMinuman';
import About from '../routes/About';
import HomePage from '../home/HomePage';
import CardDetail from '../home/components/CardDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="home" element={<HomePage />} /> */}
          <Route path="about" element={<About />} />
          <Route path="card-detail" element={<CardDetail />} />
          <Route path="makanan-dan-minuman" element={<MakananDanMinuman />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;


// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import PageWrapper from '../../components/page_wrapper';
// import PageHeaderWrapper from '../../components/page_header_wrapper';
// import { Helmet } from 'react-helmet';
// import NavbarMenu from './components/Navbar';


// import "./App.css";
// import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from '../routes/home';
// import MakananDanMinuman from '../makanan_dan_minuman/MakananDanMinuman';
// class Dashboard extends Component<any, any> {
//   //  constructor declaration

//   //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)
//   componentDidMount = () => {
    
//   };

//   //  onHandleFunction declaration

//   //  render
//   render() {

//     return (
//       // <PageWrapper>
//       //   <PageHeaderWrapper>
//       //     <Helmet>
//       //       <title>APPS</title>
//       //     </Helmet>
//       //     <h2 className="page-title-global pl-3">Nama Website</h2>
//       //     {/* <NavbarMenu/> */}
//       //     <div className="nav-area">
//       //         <NavbarMenu />
//       //     </div>
          
//       //   </PageHeaderWrapper>
//       //   <hr className="my-0" />

//       // </PageWrapper>

//       <>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="makanan-dan-minuman" element={<MakananDanMinuman />} />
//           </Route>
//         </Routes>
//       </>
//     );
//   }
// }

// export default Dashboard;

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         {/* <img src={logo} className="App-logo" alt="logo" /> */}
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }