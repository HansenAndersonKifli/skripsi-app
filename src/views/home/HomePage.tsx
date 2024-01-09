import React, { Component, useContext, useEffect, useState } from 'react';
import PageWrapper from '../../components/page_wrapper';
import PageHeaderWrapper from '../../components/page_header_wrapper';
import { Helmet } from 'react-helmet';
import "./HomePage.css";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseSetup';
import Login from '../SignIn/SignIn';
import { AuthContext } from '../../context/UserAuthContext';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import Pagination from '../../components/pagination/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMapMarker } from '@fortawesome/free-solid-svg-icons';

//   const cardsData = [
//     {
//       imgUrl: 'test foto.png',
//       imgTitle: 'Toko Mebel Sanjaya',
//       desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
//       loc: 'jl. abc'
//     },
//     {
//       imgUrl: 'indolabel.png',
//       imgTitle: 'Kartu 2',
//       desc: 'Deskripsi Kartu 2',
//       loc: 'jl. abc'
//     },
//     {
//       imgUrl: 'test foto2.png',
//       imgTitle: 'Kartu 3',
//       desc: 'Deskripsi Kartu 3',
//       loc: 'jl. abc'
//     },
//   ];

// class HomePage extends Component<any, any>{
//   constructor(props: any){
//     super(props);
//     this.state = {

//     }
//   }

//   onCardClick = () => {
//     // navigate('/card-detail');
//     <Navigate to='/card-detail' />
//   };

//   render() {
//     return (
//       <>
//       <div className="cards-container" onClick={this.onCardClick}>
//         {cardsData.map((card, index) => (
//           <div className="card">
//             <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
//               <image href={card.imgUrl} className="card-image" width="100%" 
//         height="100%" />
//             </svg>
//             <div className="card-body">
//               <h3 className="card-title">{card.imgTitle}</h3>
//               <p className="card-text">{card.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       </>
//    );
//   }
// }

interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  deskripsiUsaha: string;
  noTelp: string;
  imageUrl: string;
}

function HomePage() {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const { title } = useParams();
  const [data, setData] = useState<IData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;


  // if(!token) {
  //   return <Login setToken={setToken}/>
  // }

  const cardsData = [
    {
      imgUrl: 'test foto.png',
      imgTitle: 'Toko Mebel Sanjaya',
      desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
      loc: 'jl. abc'
    },
    {
      imgUrl: 'indolabel.png',
      imgTitle: 'Kartu 2',
      desc: 'Deskripsi Kartu 2',
      loc: 'jl. abc'
    },
    {
      imgUrl: 'test foto2.png',
      imgTitle: 'Kartu 3',
      desc: 'Deskripsi Kartu 3',
      loc: 'jl. abc'
    },
  ];

  // console.log("auth: ", auth);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });
  }, [])

  useEffect(()=>{
    const fetchData = async () => {
      //getData
      const q = query(collection(db, "dataUsaha"), where("showToggle", "==", "Iya"));
      // const querySnapshot = await getDocs(collection(db, "dataUsaha"));
      const querySnapshot = await getDocs(q);;
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log("doc: ", doc.data());
      });

      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IData[];

      setData(newData);
      console.log("newData: ", newData);
    }
    fetchData()
    // make sure to catch any error
    .catch(console.error);

  
  }, []);


  const currentUser = useContext(AuthContext);
  console.log("currentUser: ", currentUser.currentUser?.email);

  //pergi ke detail yg dipilih
  const handleCardClick = (id: string) => {
    navigate(`/card-detail/${id}`);
  };

  return (
    <>
    <h2>Home</h2>

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

    {/* isi cardnya */}
    {/* <div className="cards-container" onClick={handleCardClick}>
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
    </div> */}

    <div className="cards-container">
      {data.map((card, index) => (
        <div className="card" onClick={()=>handleCardClick(card.id)}>
          <svg className="bd-placeholder-img card-img-top" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            {card.imageUrl ? 
              (<image href={card.imageUrl} className="card-image" width="100%" height="100%" />) 
              : (<image href="/local-store-5762254_1280.png" className="card-image" width="100%" height="100%" />)
            }
            {/* <image href={card.imageUrl} className="card-image" width="100%" height="100%" /> */}
          </svg>
          <div className="card-body">
            <h3 className="card-title">{card.namaUsaha}</h3>
            <div className='mb-2'>
              <span>
                <FontAwesomeIcon icon={faMapMarker} className='mr-2'/> {card.lokasiUsaha}
              </span>
                {/* <p className="card-text">{card.lokasiUsaha}</p> */}
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faIcons} className='mr-2'/> {card.kategori}
              </span>
            </div>
            {/* <p className="card-text">{card.kategori}</p> */}
          </div>
        </div>
      ))}
    </div>
    {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page:any) => setCurrentPage(page)} 
        siblingCount={1}      /> */}
    </>
  );
}


// const HomePage = ({items}: {items: any}) => {
//   return(
//     <h2> {items.title} </h2>

//   )
// };

export default HomePage;
