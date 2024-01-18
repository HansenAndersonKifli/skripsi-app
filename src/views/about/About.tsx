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

            <h1 className='mb-3 mt-5'>Cara Login Akun</h1>
            <p>1. Klik menu "Sign In"</p>
            <p>2. Isi Email dan Password yang sudah didaftarkan</p>
            <p>3. Klik tombol submit jika sudah selesai mengisi</p>

            <h1 className='mb-3 mt-5'>Cara Register Akun</h1>
            <p>1. Klik menu "Sign In"</p>
            <p>2. Klik "Sign Up" dibagian bawah tombol submit</p>
            <p>3. Isi Email dan Password</p>
            <p>4. Klik tombol submit jika sudah selesai mengisi</p>

            <h1 className='mb-3 mt-5'>Cara Mendaftarkan Usaha</h1>
            <p>1. Login kedalam website atau Register jika belum mempunyai akun</p>
            <p>2. Menu "Tambahkan Usaha" akan muncul jika sudah login kedalam website</p>
            <p>3. Isi form yang ditampilkan pada layar</p>
            <p>4. Pastikan sudah mengisi field pada form dengan benar</p>
            <p>5. Tekan tombol "Submit" jika sudah selesai mengisi form</p>

            <h1 className='mb-3 mt-5'>Cara Logout Dari Website</h1>
            <p>1. Klik menu "Profile"</p>
            <p>2. Tekan tombol Logout</p>
        </div>
    </>
  );
};

export default withRouter(About);