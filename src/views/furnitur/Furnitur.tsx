// import React, { Component, useContext, useEffect } from 'react';
// import PageWrapper from '../../components/page_wrapper';
// import PageHeaderWrapper from '../../components/page_header_wrapper';
// import { Helmet } from 'react-helmet';
// import "../makanan_dan_minuman/MakananDanMinuman.css";
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../firebase/firebaseSetup';
// import { IDataDoc, IKategoriData, IUsahaDataState } from '../makanan_dan_minuman/MakananDanMinuman.interfaces';
// import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { AuthContext } from '../../context/UserAuthContext';
// import { withRouter } from '../../components/WithRouter';
// import CardComponent from '../../components/CardComponent';
// import firebase from 'firebase/compat/app';

// class Furnitur extends Component<any, IUsahaDataState> {
//   constructor(props: any){
//     super(props);
//     this.state = {
//       dataDisplay: [],
//     }
//   }

//   //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)
//   componentDidMount = async () => {
//       //getData pake query
//       const q = query(collection(db, "dataUsaha"), where("kategori", "==", "Furnitur"));

//       const querySnapshot = await getDocs(q);
//       // const querySnapshot = await getDocs(q);

//       let snapshotData: any[] = [];
//       // querySnapshot.forEach((doc) => {
//       //   // doc.data() is never undefined for query doc snapshots
//       //   console.log(doc.id, " => ", doc.data());
//       //   snapshotData.push({
//       //     id: doc.id,
//       //     data: doc.data()
//       //   })
//       // });

//       querySnapshot.forEach((doc) => {
//         console.log("Firestore Data:", doc.id, doc.data());
//         // Pastikan struktur doc.data sesuai dengan ekspektasi.
//       });

//       const dataDisplay: IDataDoc[] = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data() as IKategoriData[],
//       }));
//       this.setState({ dataDisplay });
    
//       // this.setState({
//       //   dataDisplay: snapshotData
//       // });

//     //   console.log("snapshotData:", snapshotData);
//       // console.log("dataDisplay:", this.state.dataDisplay);
//       // console.log("doc: ", this.state.dataDisplay.doc)
//   };

  
//   handleCardClick = (item: any) => {
//     // <Navigate to="/card-detail"/>;
//     this.props.navigate('/card-detail', { state: { id: item } });
//     // console.log("item: ", item);
//     // console.log("button clicked");
//   };

//   renderCard = () => {
//     const dataDisplay = this.state;
//     // console.log("dataDisplay return; ", this.state.dataDisplay);
//     return (
//       <>
//         {this.state.dataDisplay.map((item: any, index: any) => 
//           <div className="cards-container" onClick={()=>this.handleCardClick(item.id)}>
//             <div className="card">
//               <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
//               <div className="card-body">
//                 <h3 className="card-title">{item.data.namaUsaha}</h3>
//                 <p className="card-text">{item.data.lokasiUsaha}</p>
//               </div>
//             </div>

//           </div>
//             // <CardComponent id={item.id} key={index}/>
//         )}
//       </>
//     )
//   }

//   render() {

//     const { dataDisplay } = this.state;
//     // console.log('Actual Data Display:', dataDisplay);

//     return (
//       <>
//         <h2>Furnitur</h2>
//         <div>

//           {/* {this.renderCard()} */}
//           {/* {this.renderTest()} */}
//           {/* <button className="btn btn-primary w-100 py-2" onClick={this.handleCardClick}>Sign in</button> */}

//           <div className="data-container">
//             {/* {dataDisplay.map((doc) =>
//               doc.map((item, index) => (
//                 <CardComponent key={doc.id + index} data={item} />
//               ))
//             )} */}
//             {/* {dataDisplay.map((doc) =>
//               doc.data && Array.isArray(doc.data) ? (
//                 doc.data.map((item) => (
//                   <CardComponent
//                     key={doc.id}
//                     data={{
//                       id: doc.id,
//                       namaUsaha: item.namaUsaha,
//                       lokasiUsaha: item.lokasiUsaha,
//                       kategori: item.kategori,
//                     }}
//                   />
//                 ))
//               ) : console.log("null")
//             )} */}
//             {/* {dataDisplay &&
//               Array.isArray(dataDisplay) &&
//               dataDisplay.map((doc) => {
//                 console.log('Mapped Doc:', doc);
//                 return doc.data &&
//                   Array.isArray(doc.data) &&
//                   doc.data.map((item) => {
//                     console.log('Mapped Item:', item);
//                     return (
//                       <CardComponent
//                         key={doc.id}
//                         id= {doc.id}
//                         data={{
//                           namaUsaha: item.namaUsaha,
//                           lokasiUsaha: item.lokasiUsaha,
//                           kategori: item.kategori,
//                         }}
//                       />
//                     );
//                   });
//               })} */}
//               {/* {dataDisplay &&
//                 Array.isArray(dataDisplay) &&
//                 dataDisplay.map((doc) => (
//                   <CardComponent
//                     key={doc.id}
//                     data={doc.data}
//                     onClick={() => this.handleCardClick(doc.id)}
//                   />
//                 ))} */}
//           </div>

//         </div>
//       </>
      
//     );
//   }
// }



// // export default myParams(Furnitur);
// export default withRouter(Furnitur);
// // export default Furnitur;
  
// YourComponent.tsx
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

const Furnitur: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Gantilah 'collectionName' dengan nama koleksi di Firestore Anda
      const collectionName = 'usaha';
      
      const q = query(collection(db, "dataUsaha"), where("kategori", "==", "Furnitur"), where("showToggle", "==", "Iya"));

      const querySnapshot = await getDocs(q);
      // const querySnapshot = await getDocs(collection(db, collectionName));

      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IData[];

      setData(newData);
    };

    fetchData();
  }, []);

  // const handleCardClick = (id: string) => {
  //   <Navigate to="/card-detail"/>;
  //   console.log('Card clicked with id:', id);
  // };

  const handleCardClick = (id: string) => {
    // <Navigate to="/card-detail"/>;
    // this.props.navigate('/card-detail', { state: { id: id } });
    navigate(`/card-detail/${id}`);
    // navigate(`/card-detail/${id}`, { state: { id: id } });
    // console.log("item: ", item);
    // console.log("button clicked");
  };

  return (
    <div>
      <h2>Data Usaha</h2>
      {/* <div>
        {data.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
          >
            <h3>{item.namaUsaha}</h3>
            <p>Lokasi: {item.lokasiUsaha}</p>
            <p>Kategori: {item.kategori}</p>
          </div>
        ))}
      </div> */}
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

export default withRouter(Furnitur);
