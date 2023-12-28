// import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
// import { Col, Row, Table } from 'reactstrap';
// import PageRegion from '../../../components/page_region';
// import BackNavigation from '../../../components/back_navigation';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import "./CardDetail.css";
// import "leaflet/dist/leaflet.css";
// // import Comment from '../../../components/CommentForm';
// import { DocumentData, addDoc, collection, getDocs, query, where } from "firebase/firestore"; 
// import { db } from '../../../firebase/firebaseSetup';
// import { useLocation, useParams } from 'react-router';
// import { withRouter } from '../../../components/WithRouter';


// const cardData = [
//   //ganti pake icon
//     {
//       imgUrl: 'logo192.png',
//       title: 'Toko Mebel Sanjaya',
//       category: 'Furniture',
//       desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
//       phone: '08xxxxxxxxxx',
//       address: 'jl. xxxx',
//       contact: ''
//     }
//   ];

// //kumpulan gambar utk detail
// const imgGallery = [
//   {
//     original: "indolabel.png",
//     thumbnail: "indolabel.png"
//   },
//   {
//     original: "logo192.png",
//     thumbnail: "logo192.png"
//   },
//   {
//     original: "logo512.png",
//     thumbnail: "logo512.png"
//   },
// ]

// const imgData = [
// {
//     imgUrl: 'logo192.png',
// }
// ];

// interface snapshotData{
//   first: string,
//   last: string,
//   born: number
// }

// interface DetailPageParams {
//   id: string;
// }

// interface DetailPageProps {
//   match: {
//     params: DetailPageParams;
//   };
// }

// class CardDetail extends Component<any, any> {

//   constructor(props: any){
//     super(props);
//     this.state = {
//       snapshotData: [],
//       id: ''
//       // querySnapshot: []
//     }
//   }
  
//   componentDidMount() {
//     // Mendapatkan ID dari URL


//     // console.log("Id: ", this.props.id);
//   }
//   // onTestClick = async () => {
//   //     //getData pake query
//   //   const q = query(collection(db, "users"), where("born", ">=", 2000));
//   //   // const querySnapshot = await getDocs(q);
//   //   const querySnapshot = await getDocs(q);
//   //   // console.log("test123: ", querySnapshot);
//   //   querySnapshot.forEach((doc) => {
//   //     // doc.data() is never undefined for query doc snapshots
//   //     console.log(doc.id, " => ", doc.data());
//   //   });

//   //   this.setState({
//   //     snapshotData: querySnapshot
//   //   });

//   //   console.log("snapshotData:", this.state.snapshotData);
//   //   return querySnapshot;
//   // }

//   onTestClick = async () => {
//     //getData pake query
//     // const q = query(collection(db, "users"), where("born", ">=", 2000));
//     // // const querySnapshot = await getDocs(q);
//     // const querySnapshot = await getDocs(q);
//     // console.log("test123: ", querySnapshot);
//     // querySnapshot.forEach((doc) => {
//     //   // doc.data() is never undefined for query doc snapshots
//     //   console.log(doc.id, " => ", doc.data());
//     // });

//     //addData
//     try {
//       const docRef = await addDoc(collection(db, "dataUsaha"), {
//         namaUsaha: "Vanz",
//         lokasiUsaha: "jl. xxxx",
//         kategori: "Furnitur"
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }

//     //getData
//     // const querySnapshot = await getDocs(collection(db, "users"));
//     // querySnapshot.forEach((doc) => {
//     //   // console.log(`${doc.id} => ${doc.data()}`);
//     //   console.log("doc: ", doc.data());
//     // });
//   }

//   // onTestClick2 = () => {
//   //   this.state.snapshotData.forEach((doc: any) => {
//   //     // doc.data() is never undefined for query doc snapshots
//   //     console.log("test2: ",doc.id, " => ", doc.data());
//   //   });
//   //   console.log("snapshotData", this.state.snapshotData);
//   // }
  
//   renderDetailHead = () => {
//     return (
//         <>
//         <div className="cards-container1" >
//             {cardData.map((card, index) => (
//                 <div className="card-title" key={index}>
//                 <img src={card.imgUrl} alt={card.title} className="card-image" />
//                 <div className="card-content">
//                     <h1>{card.title}</h1>
//                     <h3 className='mt-3 pt-3'>Kategori : {card.category}</h3>
//                 </div>
//                 </div>
//             ))}
//         </div>

//         {/* <div className="img-container">
//         {imgData.map((card, index) => (
//             <div className="card" key={index}>
//             <img src={card.imgUrl} className="card-image" />
            
//             </div>
//         ))}
//         </div> */}
//         </>
//     )
//   }

//   renderDetailShop = () => {
//     return (
//       <div className="cards-container1" >
//         {cardData.map((card, index) => (
//             <div className="card-detail" key={index}>
//             <div className="card-content-detail">
//                 <h2>Informasi Detail</h2>
//                 <Row className="m-0" >
//                   <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
//                     <div>
//                       Deskripsi
//                     </div>
//                   </Col>
//                   <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
//                     <div>
//                       : {card.desc}
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className="m-0" >
//                   <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
//                     <p>No. telp</p>
//                   </Col>
//                   <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
//                     <div>
//                       : {card.phone}
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className="m-0" >
//                   <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
//                     <p>Alamat</p>
//                   </Col>
//                   <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
//                     <div>
//                       : {card.address}
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className="m-0" >
//                   <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
//                     <p>No. telp</p>
//                   </Col>
//                   <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
//                     <div>
//                       : {card.phone}
//                     </div>
//                   </Col>
//                 </Row>
//                 {/* <p>{card.address}</p>
//                 <p>{card.phone}</p>
//                 <p>{card.contact}</p> */}
//             </div>
//             </div>
//         ))}
//       </div>
//     )
//   }

//   OpenStreetMap = () => {
//     return (
//       /*
//         center & marker position diganti dari API
//       */
//       <div>
//       <MapContainer
//         center={[-6.929229662187814, 108.87359457507492]}
//         zoom={13}
//         style={{ height: '400px', width: '400px', marginTop: '50px'}}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={[-6.929229662187814, 108.87359457507492]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//       </div>
//     );
//   };

//   renderImgGallery = () => {
//     /*
//         items utk img diganti dari API
//     */
//     return (
//       <ImageGallery
//         items={imgGallery}
//         // showPlayButton={true}
//         showFullscreenButton={true}
//         // slideInterval={1000}
//         // slideOnThumbnailOver={true}
//         showIndex={true}
//         onPlay={() => {
//           alert("slideshow is now playing!");
//         }}
//       />
//     )
//   }

//   render() {

//     return (
//         <>
//          {/* <h2>detail</h2> */}

//          {/* <PageRegion className="pt-2 pb-2 width-100-px"> */}
//             {/* <BackNavigation label="&nbsp;" onClick={this.goBack} /> */}
//           {/* </PageRegion> */}
//           {this.renderDetailHead()}
          
//           <div>
//             <Row className="m-0" >
//               <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3">
//                 {this.renderDetailShop()}
                
//               </Col>
//               <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3 pl-3">
//                 {this.OpenStreetMap()}  
                
//               </Col>
//             </Row>
//           </div>

//           {this.renderImgGallery()}
//           {/* <Comment/> */}
//             <button className="btn btn-primary w-100 py-2" type="submit" onClick={this.onTestClick}>test</button>
//             {/* <button className="btn btn-primary w-100 py-2" type="submit" onClick={this.onTestClick2}>test2</button> */}
//        </>
//     );
//   }
// }

// export default withRouter(CardDetail);


import { DocumentData, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebase/firebaseSetup";
import { Col, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "leaflet/dist/leaflet.css";
import './CardDetail.css'


interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  deskripsiUsaha: string;
  noTelp: string;
}


const CardDetail: React.FC = () => { 
// function CardDetail(){ 
  const [data, setData] = useState<DocumentData| null>(null);
  const { id } = useParams();
  const idString = String(id);
  let snapshotData: any[] = [];
  console.log("idString: ", idString);

  //gambar harus pake /gambar.png kalo ga jadi nya broken
  //gambar broken karna pake param :id
  const imgGallery = [
    {
      original: "/indolabel.png",
      thumbnail: "/indolabel.png"
    },
    {
      original: "/logo192.png",
      thumbnail: "/logo192.png"
    },
    {
      original: "/logo512.png",
      thumbnail: "/logo512.png"
    },
  ]

  const cardsData = [
    {
      imgUrl: '/test foto.png',
      imgTitle: 'Toko Mebel Sanjaya',
      desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
      loc: 'jl. abc'
    },
    {
      imgUrl: '/indolabel.png',
      imgTitle: 'Kartu 2',
      desc: 'Deskripsi Kartu 2',
      loc: 'jl. abc'
    },
    {
      imgUrl: '/test foto2.png',
      imgTitle: 'Kartu 3',
      desc: 'Deskripsi Kartu 3',
      loc: 'jl. abc'
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      
      // const q = query(collection(db, "dataUsaha"), where(firebase.firestore.FieldPath.documentId(), "==", id));
      // const q = query(collection(db, "dataUsaha"), where(documentId(), '==', id));
      
      // const querySnapshot = await getDocs(q);
      const docRef = doc(db, 'dataUsaha', idString);
      
      // const docRef = doc(db, "dataUsaha", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedData = docSnap.data();
        setData(fetchedData);
      } else {
        console.log('No such document!');
      }

      console.log("docSnap: ", docSnap.data());
      // setData(newData);
    };
    fetchData();
  }, [id]);
  
  const renderImgGallery = () => {
    /*
        items utk img diganti dari API
    */
    return (
      // <div className="my-gallery"> {/* Gunakan kelas CSS di sini */}
      //   <ImageGallery
      //     items={imgGallery}
      //     showFullscreenButton={true}
      //     showIndex={true}
      //     onPlay={() => {
      //       alert('Slideshow is now playing!');
      //     }}
      //   />
      // </div>
      <ImageGallery
        items={imgGallery}
        // showPlayButton={true}
        showFullscreenButton={true}
        // slideInterval={1000}
        // slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    )
  }

  return(
    <>
      <p>{data?.namaUsaha}</p>

      <div className="cards-container" >
          <div className="card-title">
          {/* <img src={card.imgUrl} alt={card.title} className="card-image" /> */}
          <div className="card-content">
              <h1>{data?.namaUsaha}</h1>
              <h3 className='mt-3 pt-3'>Kategori : {data?.kategori}</h3>
          </div>
          </div>
      </div>

      <div>
        <Row className="m-0" >
          <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3">
          <div className="card-detail">
            <div className="card-content-detail">
              <h2>Informasi Detail</h2>
              <Row className="m-0" >
                <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                  <div>
                    Deskripsi
                  </div>
                </Col>
                <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                  <div>
                    : {data?.deskripsiUsaha}
                  </div>
                </Col>
              </Row>
              <Row className="m-0" >
                <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                  <p>No. telp</p>
                </Col>
                <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                  <div>
                    : {data?.noTelp}
                  </div>
                </Col>
              </Row>
              <Row className="m-0" >
                <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                  <p>Alamat</p>
                </Col>
                <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                  <div>
                    : {data?.lokasiUsaha}
                  </div>
                </Col>
              </Row>
            </div>

            
          </div>
          
          </Col>
          <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3 pl-3">  
          {/* center & marker position diganti dari API */}
          <div>
            <MapContainer
              center={[-6.929229662187814, 108.87359457507492]}
              zoom={13}
              style={{ height: '400px', width: '400px', marginTop: '50px'}}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-6.929229662187814, 108.87359457507492]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          </Col>
        </Row>
      </div>

      {/* {renderImgGallery()}; */}
      <div>
        <ImageGallery
          items={imgGallery}
          // showPlayButton={true}
          showFullscreenButton={true}
          // slideInterval={1000}
          // slideOnThumbnailOver={true}
          showIndex={true}
          onPlay={() => {
            alert("slideshow is now playing!");
          }}
        />
      </div>
       {/* <Gallery items={imgGallery} /> */}
    </>
  )
}
export default CardDetail;