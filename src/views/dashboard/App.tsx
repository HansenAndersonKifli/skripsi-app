import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from '../routes/home';
import MakananDanMinuman from '../makanan_dan_minuman/MakananDanMinuman';
import HomePage from '../home/HomePage';
import CardDetail from '../home/components/CardDetail';
// import LoginAndRegister from '../login_dan_register/LoginDanRegister';
// import Profile from '../profile/profile';
import { useContext, useEffect } from 'react';
import Signup from '../SignIn/SignUp';
import Login from '../SignIn/SignIn';
// import ProtectedRoute from '../../components/ProtectedRoute';
import { AuthContext } from '../../context/UserAuthContext';
import RequireAuth from '../../firebase/RequireAuth';
import Profile from '../Profile';
import Furnitur from '../furnitur/Furnitur';
import CardDetail2 from '../home/components/CardDetail2';
import SubmitForm from '../submit_form/SubmitForm';
import AdminPage from '../admin_page/AdminPage';
import Otomotif from '../otomotif/Otomotif';
import Elektronik from '../elektronik/Elektronik';
import LainLain from '../lain_lain/LainLain';
import SearchedPage from '../../components/searched_page/SearchedPage';
import About from '../about/About';
// import { AuthContext } from '../../context/AuthContext';
// import RequireAuth from '../../components/require-auth';

const App = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if the current user exists on the initial render.
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate('/')
  //   }
  // }, [currentUser])

  

  return (
    <>
    {/* router */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="home" element={<HomePage />} /> */}
          <Route path="/admin-page" element={currentUser?.email == "admin@gmail.com" ? <AdminPage />: <Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/card-detail/:id" element={<CardDetail />} />
          <Route path="/search/:search" element={<SearchedPage />} />
          <Route path="/card-detail" element={<CardDetail2 />} />
          <Route path="/makanan-dan-minuman" element={<MakananDanMinuman />} />
          <Route path="/furnitur" element={<Furnitur />} />
          <Route path="/otomotif" element={<Otomotif />} />
          <Route path="/elektronik" element={<Elektronik />} />
          <Route path="/lain-lain" element={<LainLain />} />
          {/* <Route path="makanan-dan-minuman" element={
            <RequireAuth>
              <MakananDanMinuman />
            </RequireAuth>}
          /> */}
          <Route path="/profile" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>}
          />
          <Route path="/tambahkan-usaha" element={
            <RequireAuth>
              <SubmitForm />
            </RequireAuth>}
          />
          {/* <Route path="profile" element={currentUser ? <Profile />: <Home />} /> */}
          {/* <Route
              path="makanan-dan-minuman"
              element={
                <ProtectedRoute>
                  <MakananDanMinuman />
                </ProtectedRoute>
              }
            /> */}
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Login />} />
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