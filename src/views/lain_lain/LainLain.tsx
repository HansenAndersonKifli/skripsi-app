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

const LainLain: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Gantilah 'collectionName' dengan nama koleksi di Firestore Anda
      const collectionName = 'usaha';
      
      const q = query(collection(db, "dataUsaha"), where("kategori", "==", "Lain-Lain"), where("showToggle", "==", "Iya"));

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

  const handleCardClick = (id: string) => {
    navigate(`/card-detail/${id}`);
  };

  return (
    <div>
      <h2>Lain-Lain</h2>
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

export default withRouter(LainLain);