import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper';
import PageHeaderWrapper from '../../components/page_header_wrapper';
import { Helmet } from 'react-helmet';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import "./HomePage.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

// class HomePage extends Component<any, any> {
//   componentDidMount = () => {
    
//   };

//   render() {

//     return (
//          <h2>homepage</h2>
        
      
//     );
//   }
// }

function HomePage() {
  const navigate = useNavigate();
  const { title } = useParams();
  const cardsData = [
    {
      imgUrl: 'logo192.png',
      imgTitle: 'Toko Mebel Sanjaya',
      desc: 'Toko Furniture teranjay sejagad raya boss',
      loc: 'jl. abc'
    },
    {
      imgUrl: 'gambar2.jpg',
      imgTitle: 'Kartu 2',
      desc: 'Deskripsi Kartu 2',
      loc: 'jl. abc'
    },
    {
      imgUrl: 'gambar3.jpg',
      imgTitle: 'Kartu 3',
      desc: 'Deskripsi Kartu 3',
      loc: 'jl. abc'
    },
  ];

  const handleCardClick = () => {
    // Ganti '/path/halaman-tujuan' dengan path tujuan Anda
    navigate('/card-detail');
  };

  // Sekarang Anda dapat menggunakan 'title' di sini sesuai kebutuhan.

  return (
    // <div>
    //   <h1>{title}</h1>
    //   {/* ... */}
    // </div>
    <>
    <h2>test</h2>

    {/* <Row className="w-100 m-0 pl-3 pr-3 pb-3">
      <Col md={4} lg={4} sm={12} xs={12} className="m-0 p-0 pt-3 pr-1 pl-3">
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imgUrl} alt={card.imgTitle} className="card-image" />
              <div className="card-content">
                <h2>{card.imgTitle}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>  
      </Col>
    </Row> */}

    {/* <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgUrl} alt={card.imgTitle} className="card-image" />
            <div className="card-content">
              <h2>{card.imgTitle}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
    </div> */}

    <div className="cards-container" onClick={handleCardClick}>
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgUrl} alt={card.imgTitle} className="card-image" />
          <div className="card-content">
            <h2>{card.imgTitle}</h2>
            <p>{card.loc}</p>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
}


// const HomePage = ({items}: {items: any}) => {
//   return(
//     <h2> {items.title} </h2>

//   )
// };

export default HomePage;
