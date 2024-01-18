import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseSetup';
import { Navigate, useNavigate, useParams } from 'react-router';
import { withRouter } from '../../components/WithRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMapMarker } from '@fortawesome/free-solid-svg-icons';

interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  imageUrl: string;
}

const SearchPage: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const navigate = useNavigate();
  const { search } = useParams();
  const searchString = String(search);
  console.log("searchString", searchString);

  useEffect(() => {
    const fetchData = async () => {
        const q = query(collection(db, "dataUsaha"), where("namaUsahaLowercase", ">=", searchString), where("namaUsahaLowercase", "<=", searchString + '\uf8ff'), where("showToggle", "==", "Iya")
        );

        
        // const q = query(collection(db, "dataUsaha"), where("namaUsaha", "==", searchString)
        //   , where("showToggle", "==", "Iya")
        // );

        const querySnapshot = await getDocs(q);
        if(!querySnapshot){
          alert('Usaha yang dicari tidak ada!');
        }
        // const querySnapshot = await getDocs(collection(db, collectionName));
        // console.log("querySnapshot", querySnapshot);
        const newData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as IData[];

        setData(newData);
        // console.log("data", data);
    };

    fetchData();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/card-detail/${id}`);
  };

  return (
    <div>
      <h2>Hasil Pencarian : "{searchString}"</h2>
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
              {/* <p className="card-text">{card.kategori}</p> */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(SearchPage);