import { useContext, useEffect, useState } from 'react';
import "./HomePage.css";
import { useNavigate, useParams } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseSetup';
import { AuthContext } from '../../context/UserAuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMapMarker } from '@fortawesome/free-solid-svg-icons';


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
  // const [token, setToken] = useState();
  const navigate = useNavigate();
  // const { title } = useParams();
  const [data, setData] = useState<IData[]>([]);


  // if(!token) {
  //   return <Login setToken={setToken}/>
  // }

  const cardsData = [
    {
      imgUrl: 'test foto.png',
      imgTitle: 'Kartu 1',
      desc: 'Deskripsi Kartu 1',
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
        const uid = user.uid;
        console.log("uid", uid)
      } else {
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
    <h2 style={{color: 'blue'}}>Home</h2>

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
    </>
  );
}



export default HomePage;
