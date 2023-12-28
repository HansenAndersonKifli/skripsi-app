import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseSetup";
import React, { useEffect, useState } from "react";
import { IKategoriData } from "../views/makanan_dan_minuman/MakananDanMinuman.interfaces";

// interface IKategoriData {
//   // id: string;
//   namaUsaha: string;
//   lokasiUsaha: string;
//   kategori: string;
// }

interface CardProps {
  id: string;
  data: IKategoriData;
  // data: {
  //   namaUsaha: string;
  //   lokasiUsaha: string;
  //   kategori: string;
  // };
}

const CardComponent: React.FC<CardProps> = ({ data }) => {
  // render() {
    // const { data } = this.props;
    useEffect(() => {
      console.log('Data in Card:', data);
    }, [data]);
    console.log("data: ", data);
    return (
      <div className="card">
        {/* <div className="card-body">
          <h5 className="card-title">{data.namaUsaha}</h5>
          <p className="card-text">Lokasi: {data.lokasiUsaha}</p>
          <p className="card-text">Kategori: {data.kategori}</p>
        </div> */}
      </div>
    );
  // }
}


// interface CardProps {
//   dataDisplay: {
//     // id: string;
//     data: IKategoriData
//   };
//   // onClick: () => void;
// }

// class CardComponent extends React.Component<CardProps> {
//   render() {
//     const { dataDisplay } = this.props;
//     return (
//       <div className="card" >
//         {/* <img src={data.imageUrl} alt={data.title} /> */}
//         <div className="card-body">
//           <h5 className="card-title">{dataDisplay.data.namaUsaha}</h5>
//           <p className="card-text">{dataDisplay.data.lokasiUsaha}</p>
//         </div>
//       </div>
//     );
//   }
// }


// const CardComponent: React.FC<CardProps> = ({ dataDisplay }) => {
//   return (
//     // <div className="card" onClick={onClick}>
//     <div className="card">
//       {/* <img src={dataDisplay.imageUrl} alt={dataDisplay.title} /> */}
//       <div className="card-body">
//         <h5 className="card-title">{dataDisplay.data.namaUsaha}</h5>
//         <p className="card-text">{dataDisplay.data.kategori}</p>
//       </div>
//     </div>
//   );
// };

export default CardComponent;

// class CardComponent extends React.Component { 
//     // console.log("cardcomponent: ", props);
    
//     render (){
//       // const { data } = this.props;
//       return (

//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">title</h5>
//             <p className="card-text">desc</p>
//           </div>
//         </div>
//       );
//     }
      

    
// }

// export default CardComponent;