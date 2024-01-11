import {ChangeEvent, FormEvent, useState} from 'react';
import { db } from '../../firebase/firebaseSetup';
import "../SignIn/SignIn.css"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const SubmitForm = () => {
    const [namaUsaha, setNamaUsaha] = useState<string>('');
    const [lokasiUsaha, setLokasiUsaha] = useState<string>('');
    const [deskripsiUsaha, setDeskripsiUsaha] = useState<string>('');
    const [noTelp, setNoTelp] = useState<string>('');
    const [kategori, setKategori] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [gambarUsaha, setGambarUsaha] = useState<FileList | null>(null);
    const [galleryImages, setGalleryImages] = useState<File[]>([]);
    const showToggle = "Iya";
    const navigate = useNavigate();
    

    // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) setImage(file);
    // };

    const handleGalleryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) setGalleryImages([...files]);
    };

    const uploadImage = async (file: File, path: string): Promise<string> => {
        const storage = getStorage();
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    };
    
    const handleNamaUsahaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNamaUsaha(e.target.value);
    };
    const handleLokasiUsahaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLokasiUsaha(e.target.value);
    };
    const handleDeskripsiUsahaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDeskripsiUsaha(e.target.value);
    };
    const handleNoTelpChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNoTelp(e.target.value);
    };
    const handleKategoriChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKategori(e.target.value);
    };
    
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!namaUsaha) {
            alert('Tolong Masukkan Nama Usaha');
            return;
        }
        if (!kategori) {
            alert('Tolong Pilih Kategori');
            return;
        }

        if (!deskripsiUsaha) {
            alert('Tolong Masukkan Deskripsi Usaha');
            return;
        }
        if (!lokasiUsaha) {
            alert('Tolong Masukkan Lokasi Usaha');
            return;
        }
        if (!lokasiUsaha.startsWith('Jalan')) {
            alert('Tolong Awali Lokasi Usaha Dengan "Jalan"');
            return;
        }

        if (!noTelp) {
            alert('Tolong Masukkan Nomor Telepon');
            return;
        }


        if (!lokasiUsaha) {
            alert('Tolong Masukkan Lokasi Usaha');
            return;
        }
    
        if (!image || !galleryImages.length) {
          alert('Tolong Masukkan Gambar');
          return;
        }

        // if (!galleryImageUrls || !galleryImages.length) {
        //   alert('Tolong Masukkan Gambar');
        //   return;
        // }
    
        try {
          // Upload main image
          const imageUrl = await uploadImage(image, `images/${namaUsaha}/${image.name}`);
    
          // Upload gallery images
          const galleryImageUrls = await Promise.all(
            galleryImages.map(async (galleryImage) => {
              return uploadImage(
                galleryImage,
                `galleryImages/${namaUsaha}/${galleryImage.name}`
              );
            })
          );
    
          // Save data to Firestore
          const docRef = await addDoc(collection(db, 'dataUsaha'), {
            namaUsaha,
            lokasiUsaha,
            deskripsiUsaha,
            noTelp,
            kategori,
            imageUrl,
            galleryImageUrls,
            showToggle
          });
          navigate('/');
          console.log('Document written with ID: ', docRef.id);
        } catch (error) {
          console.error('Error writing document: ', error);
        }
    };

    // const handleSubmit = async (e: FormEvent) => {
    //     e.preventDefault();

    //     if (!image) {
    //         console.error('Please select an image.');
    //         return;
    //     }

    //     const storage = getStorage();

    //     // Upload image to Firebase Storage
    //     const storageRef = ref(storage, `images/${image.name}`);
    //     await uploadBytes(storageRef, image);

    //     // Get download URL
    //     const imageUrl = await getDownloadURL(storageRef);

    //     // Save text and image URL to Firestore
    //     const docRef = await addDoc(collection(db, 'dataUsaha'), {
    //         namaUsaha,
    //         lokasiUsaha,
    //         deskripsiUsaha,
    //         noTelp,
    //         kategori,
    //         imageUrl,
    //     });
    //     console.log("docRef: ", docRef);

    //     console.log('Document written with ID: ', docRef.id);
    // };
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKategori(e.target.value);
    }

    return(
        <>
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Form</h1>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Nama Usaha</label>
                    <input
                        id="floatingInput"
                        name="namaUsaha"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="Nama Usaha"
                        onChange={handleNamaUsahaChange}
                    />
                </div>

                <div>
                    <label htmlFor="kategori">Kategori:</label>
                    <select
                        id="kategori"
                        name="kategori"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        >
                        <option selected value="Klik untuk melihat pilihan"/>
                        <option value="Makanan dan Minuman">Makanan dan Minuman</option>
                        <option value="Furnitur">Furnitur</option>
                        <option value="Otomotif">Otomotif</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Lain-lain">Lain-lain</option>
                    </select>
                </div>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Deskripsi Usaha</label>
                    <input
                        id="floatingInput"
                        name="deskripsiUsaha"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="Deskripsi Usaha"
                        onChange={handleDeskripsiUsahaChange}
                    />
                </div>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Lokasi Usaha {'('} Awali Dengan "Jalan" {')'}</label>
                    <input
                        id="floatingInput"
                        name="lokasiUsaha"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="Lokasi Usaha"
                        onChange={handleLokasiUsahaChange}
                    />
                </div>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">No Telp</label>
                    <input
                        id="floatingInput"
                        name="noTelp"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="No Telp"
                        onChange={handleNoTelpChange}
                    />
                </div>
                
                <div className="form-floating pb-3">
                    <label htmlFor="floatingPassword">Foto Profil Usaha</label>
                    <input
                        id="floatingPassword"
                        name="image"
                        type="file"  
                        className="form-control"
                        required                                                                                
                        placeholder="Password"
                        onChange={handleImageChange}
                    />
                </div>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingPassword">Foto Tambahan Untuk Galeri{'('}Bisa lebih dari 1{')'}</label>
                    <input
                        id="floatingPassword"
                        name="gambarUsaha"
                        type="file"  
                        className="form-control"
                        accept="image/*"
                        required                                                                                
                        placeholder="Password"
                        multiple onChange={handleGalleryChange}
                    />
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </main>
        </>
    )
}
 
export default SubmitForm