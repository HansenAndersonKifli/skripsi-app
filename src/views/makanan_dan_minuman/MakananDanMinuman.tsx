// import React, { Component } from 'react';
// import PageWrapper from '../../components/page_wrapper';
// import PageHeaderWrapper from '../../components/page_header_wrapper';
// import { Helmet } from 'react-helmet';
// import "./MakananDanMinuman.css";
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../firebase/firebaseSetup';
// import { IUsahaDataState } from './MakananDanMinuman.interfaces';
// import { Navigate } from 'react-router-dom';
// // import "../home/HomePage.css";


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

// // interface snapshotData {
// //   namaUsaha: String,
// //   lokasiUsaha: String,
// //   kategori: String
// // }

// const cardsData = [
//   {
//     imgUrl: 'test foto.png',
//     imgTitle: 'Toko Mebel Sanjaya',
//     desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
//     loc: 'jl. abc'
//   },
//   {
//     imgUrl: 'indolabel.png',
//     imgTitle: 'Kartu 2',
//     desc: 'Deskripsi Kartu 2',
//     loc: 'jl. abc'
//   },
//   {
//     imgUrl: 'test foto2.png',
//     imgTitle: 'Kartu 3',
//     desc: 'Deskripsi Kartu 3',
//     loc: 'jl. abc'
//   },
// ];

// class MakananDanMinuman extends Component<any, IUsahaDataState> {
//   constructor(props: any){
//     super(props);
//     this.state = {
//       dataDisplay: [],
//     }
//   }

//   //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)
//   componentDidMount = async () => {
//       //getData pake query
//       const q = query(collection(db, "dataUsaha"), where("kategori", "==", "MakananDanMinuman"));
//       // const querySnapshot = await getDocs(q);
//       const querySnapshot = await getDocs(q);

//       let snapshotData: any[] = [];
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         snapshotData.push({
//           id: doc.id,
//           data: doc.data()
//         })
//       });
      
    
//       this.setState({
//         dataDisplay: snapshotData
//       });

//       console.log("snapshotData:", snapshotData);
//       console.log("dataDisplay:", this.state.dataDisplay);
//   };

  
//   handleCardClick = () => {
//     // navigate('/card-detail');
//     <Navigate to='/card-detail'/>
//   };

//   renderCard = () => {
//     const dataDisplay = this.state;
//     console.log("dataDisplay return; ", this.state.dataDisplay);
//     return (
//       <>
//           {/* <div className="cards-container" onClick={this.handleCardClick}>
//             {this.state.dataDisplay.map((item: any, index: any) => 
//             <div className="card">
//               <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
//               <div className="card-body">
//                 <h3 className="card-title">{item.data.namaUsaha}</h3>
//                 <p className="card-text">{item.data.lokasiUsaha}</p>
//               </div>
//             </div>

// )}
//           </div> */}
//           <div className="cards-container">
//             {data.map((card, index) => (
//               <div className="card" onClick={()=>handleCardClick(card.id)}>
//                 <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
//                   <image href={card.imageUrl} className="card-image" width="100%" 
//             height="100%" />
//                 </svg>
//                 <div className="card-body">
//                   <h3 className="card-title">{card.namaUsaha}</h3>
//                   <p className="card-text">{card.kategori}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         {/* <div className="cards-container" onClick={this.handleCardClick}>
//           {this.state.dataDisplay.map((item: any, index: any) => (
//             <div className="card">
//               <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
//               <rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
//               </svg>
//               <div className="card-body">
//                 <h3 className="card-title">{item.data.namaUsaha}</h3>
//                 <p className="card-text">{item.data.lokasiUsaha}</p>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </>
//     )
//   }

//   render() {

//     return (
//       <>
//         <h2>makanan</h2>
//         <div>

//         {this.renderCard()}
//         </div>
//       </>
      
//     );
//   }
// }

// export default MakananDanMinuman;

import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseSetup';
import { Navigate, useNavigate } from 'react-router';
import { withRouter } from '../../components/WithRouter';

interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  imageUrl: string;
}

const MakananDanMinuman: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "dataUsaha"), where("kategori", "==", "Makanan dan Minuman"), where("showToggle", "==", "Iya"));

      const querySnapshot = await getDocs(q);

      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IData[];

      setData(newData);
      console.log("newData: ", newData)
    };

    fetchData();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/card-detail/${id}`);
  };

  return (
    <div>
      <h2>Makanan Dan Minuman</h2>
      <div className="cards-container">
        {data.map((card, index) => (
          <div className="card" onClick={()=>handleCardClick(card.id)}>
            <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
              <image href={card.imageUrl} className="card-image" width="100%" 
        height="100%" />
            </svg>
            <div className="card-body">
              <h3 className="card-title">{card.namaUsaha}</h3>
              <p className="card-text">{card.kategori}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(MakananDanMinuman);