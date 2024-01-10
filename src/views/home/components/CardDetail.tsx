// import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
// import { Col, Row, Table } from 'reactstrap';
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


import { DocumentData, addDoc, collection, deleteDoc, doc, documentId, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { auth, db } from "../../../firebase/firebaseSetup";
import { Col, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "leaflet/dist/leaflet.css";
import './CardDetail.css'
import GalleryComponent from "../../../components/GalleryComponent";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../../context/UserAuthContext";
import { v4 as uuid } from "uuid";

interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  deskripsiUsaha: string;
  noTelp: string;
}

interface Rating {
  userId: string;
  rating: number;
  timestamp: number;
}

interface Comment {
  userId: string;
  comment: string;
  timestamp: number;
  user: string;
  commentId: string;
}
interface temp {
  userId: string;
  comment: string;
  timestamp: number;
  user: string;
  commentId: string;
  id: string;
}

const CardDetail: React.FC = () => { 
// function CardDetail(){ 
  const [data, setData] = useState<DocumentData| null>(null);
  const { id } = useParams();
  const idString = String(id);
  let snapshotData: any[] = [];
  // console.log("idString: ", idString);
  const [gallery, setGallery] = useState<any[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [rating, setRating] = useState(0);
  const [uid, setUid] = useState('');
  const [address, setAddress] = useState<string>("");
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [la, setLa] = useState<number>(0);
  const [lo, setLo] = useState<number>(0);

  const {currentUser} = useContext(AuthContext);
  const currentUid = String(currentUser?.uid);

  const [temp, setTemp] = useState<temp[]>([]);
  const initialState = {
    isLoading: true
  }
  const userEmail = currentUser?.email;

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUid(uid);
        // console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });
  }, [])

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

      // const querySnapshot = await getDocs(collection(db, 'dataUsaha'));
      // const data = querySnapshot.docs.map((doc) => doc.data());
      // setData(data);
      // const docRef = doc(db, "dataUsaha", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedData = docSnap.data();
        setData(fetchedData);
        setAddress(docSnap?.data()?.lokasiUsaha);
      } else {
        console.log('No such document!');
      }
      // console.log("docSnap: ", docSnap.data());
      // console.log("initialState.isLoading",initialState.isLoading)
      
      console.log("data?.lokasiUsaha: ", data?.lokasiUsaha);
      
      
      
      // console.log("docSnap: ", docSnap.data());
      // setData(newData);
    };
    fetchComments();
    // fetchRatings();
    fetchData().then(()=>{fetchGalleryData()});
  }, [id]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        // const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent("Jalan Dokter Makaliwe Gang II, RW 08, Grogol, Grogol Petamburan, West Jakarta, Special Capital Region of Jakarta, Java, 11450, Indonesia")}`);
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        const dataMap = await response.json();
        console.log("dataMap: ", dataMap);

        if (dataMap.length > 0) {
          const { lat, lon } = dataMap[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
          setLa(parseFloat(lat));
          setLo(parseFloat(lon));
          console.log("success");
        } else {
          console.warn('Address not found:', address);
          // Handle case where address is not found, set default coordinates or show a message.
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [address]);

  const Recenter = ({la,lo}: any) => {
    const map = useMap();
    useEffect(() => {
        map.setView([la, lo]);
    }, [la, lo]);
    return null;
  }

  const RecenterAutomatically = ({lat,lng}: any) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
   }

  console.log("position la", la);
  console.log("position lo", lo);

  const fetchComments = async () => {
    const commentsRef = collection(db, 'comments');
    const commentsQuery = query(commentsRef, where('idUsaha', '==', idString));
    const commentsSnapshot = await getDocs(commentsQuery);
    const commentsData = commentsSnapshot.docs.map((doc) => doc.data() as Comment);
    setComments(commentsData);
  };

  const submitComment = async () => {
    const userId = uid;
    const cId = uuid();
    const commentsRef = collection(db, 'comments');
    await addDoc(commentsRef, {
      idUsaha: id,
      userId,
      comment,
      timestamp: Date.now(),
      user: currentUser?.email,
      commentId: cId,
    });
    fetchComments();
    setComment('')
  };

  const deleteComment = async (id: string) => {
    const docId = id;
    
    const commentsRef = collection(db, 'comments');
    const commentsQuery = query(commentsRef, where('commentId', '==', docId));
    const commentsSnapshot = await getDocs(commentsQuery);
    // const commentsData = commentsSnapshot.docs.map((doc) => doc.data() as temp);
    const commentsData = commentsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))

    // setTemp(commentsData);
    console.log("commentsData", commentsData[0].id)
    // const getdocRef = doc(db, 'comments');
    // const docSnap = await getDoc(getdocRef);
    // const commentsRef = collection(db, 'comments', docId);
    // const commentRef = doc(db, 'comments', docId);

    // const docRef = doc(db, 'comments', getdocRef.id);
    await deleteDoc(doc(db, "comments", commentsData[0].id));
    fetchComments()
    // await deleteDoc(commentRef);
    // console.log("docref comment: ", commentRef)
  }
  
  const fetchGalleryData = () => {
    if(data?.galleryImageUrls){

      const galleryItems = data?.galleryImageUrls.map((url: string) => ({
        original: url,
        thumbnail: url, 
      }));
      const fetchedGallery = galleryItems;
      setGallery(fetchedGallery);
      // console.log("galleryItems", galleryItems);
    }
  }
  const renderImgGallery = () => {
    /*
        items utk img diganti dari API
    */
    return (
      <ImageGallery
        items={data?.galleryImageUrls}
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
  console.log("address: ", address);

  return(
    <>
      {/* <p>{data?.namaUsaha}</p> */}

      <div className="cards-container1" >
        {/* {data.map((item, index) => (
          <div className="card-title">
          <div className="card-content">
              <h1>{item?.namaUsaha}</h1>
              <h3 className='mt-3 pt-3'>Kategori : {item?.kategori}</h3>
          </div>
          </div>
        ))} */}
          <div className="card-title">
            {/* <img src={data?.imageUrl} alt={data?.namaUsaha} className="card-image" /> */}
            {data?.imageUrl ? (<img src={data?.imageUrl} alt={data?.namaUsaha} className="card-image" />) 
            : 
            (<img src="/local-store-5762254_1280.png" alt={data?.namaUsaha} className="card-image" />)}
            <div className="card-content">
                <h1>{data?.namaUsaha}</h1>
                <h3 className='mt-3 pt-3'>Kategori : {data?.kategori}</h3>
            </div>
          </div>
      </div>

      <div className="product-container">
        <div className="left-column">
          <MapContainer
            // center={[-6.929229662187814, 108.87359457507492]}
            // center={[la, lo]}
            center={position || [0, 0]}
            zoom={13}
            style={{ 
              height: '400px', 
              width: '100%', 
              // marginTop: '50px'
            }}
            scrollWheelZoom={false}
          >
            <RecenterAutomatically lat={la} lng={lo} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Marker position={[-6.929229662187814, 108.87359457507492]}> */}
            <Marker position={[la, lo]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
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

          {/* <Row className="m-0" >
            <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
              <p>Website</p>
            </Col>
            <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
              <div>
                : www apalah gtu
              </div>
            </Col>
          </Row> */}
        </div>
        <div className="right-column">
          {
            data?.galleryImageUrls ? (
              <GalleryComponent galleryImageUrls={data?.galleryImageUrls} />

            ) : console.log("null")
          }
        </div>
      </div>
      
      {/* <div >
        <Row>
        <Col md={4} lg={4} sm={6} xs={6} className="m-0 p-0 pt-3">
          <div >
            <MapContainer
              // center={[-6.929229662187814, 108.87359457507492]}
              // center={[la, lo]}
              center={position || [0, 0]}
              zoom={13}
              style={{ 
                height: '400px', 
                width: '100%', 
                // marginTop: '50px'
              }}
              scrollWheelZoom={false}
            >
              <RecenterAutomatically lat={la} lng={lo} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-6.929229662187814, 108.87359457507492]}>
              <Marker position={[la, lo]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
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
        <Col md={4} lg={4} sm={6} xs={6} className="m-0 p-0 pt-3">
          {
            data?.galleryImageUrls ? (
              <GalleryComponent galleryImageUrls={data?.galleryImageUrls} />

            ) : console.log("null")
          }
        </Col>
        </Row>
      </div> */}

      {/* <div className="outer">
        <Row className="m-0" >
          
          <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3">
            <div className="left-detail">

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
            
            </div>
          </Col>
          
          <Col md={6} lg={6} sm={12} xs={12} className="m-0 p-0 pt-3 pl-3">  
          center & marker position diganti dari API
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
      </div> */}

      {/* {renderImgGallery()}; */}
      
      {/* <div>
        <ImageGallery
          items={gallery}
          // showPlayButton={true}
          showFullscreenButton={true}
          // slideInterval={1000}
          // slideOnThumbnailOver={true}
          showIndex={true}
          onPlay={() => {
            alert("slideshow is now playing!");
          }}
        />
      </div> */}
      {/* {
        data?.galleryImageUrls ? (
          <GalleryComponent galleryImageUrls={data?.galleryImageUrls} />

        ) : console.log("null")
      } */}
      {/* <GalleryComponent galleryImageUrls={data?.galleryImageUrls} /> */}
      <div >
        <h2>Comments</h2>
        <div className="flex flex-col pt-12">
          <ul>
            {comments.map((comment) => (
              <>
              {/* console.log("commentUserId") */}
                <div className="border rounded-md p-4">
                  <p>{comment.user}</p>
                  <p>{comment.comment}</p>
                  <p>{comment.commentId}</p>
                  {/* <li key={comment.timestamp}>{comment.comment}</li> */}
                  {comment.userId === currentUid ?
                  (<button onClick={()=>deleteComment(comment.commentId)}>Hapus Komen</button>)
                  :
                  null
                }
                  {/* <button>Hapus Komen</button> */}
                </div>
              </>
              ))}
          </ul>
        </div>
      </div>
      {/* <div>
        <h2>Ratings</h2>
        <ul>
          {ratings.map((rating) => (
            <li key={rating.timestamp}>{rating.rating}</li>
          ))}
        </ul>
      </div> */}
      <div className="comment-section">
        <textarea 
          placeholder="Tambahkan komentar..."
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
        />
        <button onClick={submitComment}>Tambahkan Komentar</button>
      </div>
      {/* <div>
        <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
        <button onClick={submitRating}>Add Rating</button>
      </div> */}
    </>
  )
}
export default CardDetail;