import {ChangeEvent, FormEvent, useState} from 'react';
import { db } from '../../firebase/firebaseSetup';
import "../SignIn/SignIn.css"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';

const SubmitForm = () => {
    const [text, setText] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      };
    
      const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setImage(e.target.files[0]);
        }
      };

      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (!image) {
          console.error('Please select an image.');
          return;
        }

        const storage = getStorage();

        // Upload image to Firebase Storage
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
    
        // Get download URL
        const imageUrl = await getDownloadURL(storageRef);
    
        // Save text and image URL to Firestore
        const docRef = await addDoc(collection(db, 'dataUsaha'), {
          text,
          imageUrl,
        });
    
        console.log('Document written with ID: ', docRef.id);
      };
    

    return(
        <>
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Form</h1>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Nama Usaha</label>
                    <input
                        id="floatingInput"
                        name="nama"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="Nama Usaha"
                        onChange={handleTextChange}
                    />
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
                        onChange={handleTextChange}
                    />
                </div>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Lokasi Usaha</label>
                    <input
                        id="floatingInput"
                        name="lokasiUsaha"
                        type="text"  
                        className="form-control"
                        required                                                                                
                        placeholder="Lokasi Usaha"
                        onChange={handleTextChange}
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
                        onChange={handleTextChange}
                    />
                </div>
                
                <div className="form-floating pb-3">
                    <label htmlFor="floatingPassword">Gambar</label>
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
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
            </form>
        </main>
        </>
    )
}
 
export default SubmitForm