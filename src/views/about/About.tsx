import React, {  } from 'react';
import { withRouter } from '../../components/WithRouter';

const About = () => {
  

  return (
    <>
        <div className="container">
            <h1 className='mb-3'>Tentang Kami</h1>
            <p>Toko Lokal merupakan website yang memberikan informasi detail mengenai suatu usaha seperti alamat, nomor telepon, map dan deskripsi dari usaha tersebut. Website kami berusaha untuk membantu UMKM mempromosikan produk atau jasa mereka secara digital dan menghubungkan orang lain dengan UMKM.

            </p>
            
            <p>Pengguna dapat menambahkan usaha mereka kedalam website dengan mengisi informasi pada form yang diberikan agar dapat ditampilkan diwebsite dan dapat dilihat oleh pengguna lain.

            </p>

            <h1 className='mb-3'>Cara Mendaftarkan Usaha</h1>
        </div>
    </>
  );
};

export default withRouter(About);