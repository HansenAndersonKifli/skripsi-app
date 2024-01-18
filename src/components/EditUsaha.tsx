import { DocumentData, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router";
import { Modal } from "reactstrap";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../firebase/firebaseSetup";
import IcnClose from "../assets/icon/IcnClose";

interface ModalProps {
    data: any; // Tipe data sesuaikan dengan data yang akan diedit
    onClose: () => void;
    isOpen: boolean;
  }

const EditUsaha: React.FC<ModalProps> = ({data, onClose, isOpen}) => { 
    const [namaUsaha, setNamaUsaha] = useState<string>('');
    const [editedNamaUsaha, setEditedNamaUsaha] = useState(data.namaUsaha);
    const [lokasiUsaha, setLokasiUsaha] = useState<string>('');
    const [editedLokasiUsaha, setEditedLokasiUsaha] = useState(data.lokasiUsaha);
    const [deskripsiUsaha, setDeskripsiUsaha] = useState<string>('');
    const [editedDeskripsiUsaha, setEditedDeskripsiUsaha] = useState(data.deskripsiUsaha);
    const [noTelp, setNoTelp] = useState<string>('');
    const [editedNoTelp, setEditedNoTelp] = useState(data.noTelp);
    const [kategori, setKategori] = useState<string>('');
    const [editedKategori, setEditedKategori] = useState(data.kategori);
    const [showToggle, setShowToggle] = useState<string>('');
    const [editedShowToggle, setEditedShowToggle] = useState(data.showToggle);
    const [image, setImage] = useState<File | null>(null);
    const [gambarUsaha, setGambarUsaha] = useState<FileList | null>(null);
    const [galleryImages, setGalleryImages] = useState<File[]>([]);
    // console.log("data: ", data);

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
    
        try {

          const dataUsahaRef = doc(db, "dataUsaha", data.id);
          const docRef = await updateDoc(dataUsahaRef, {
            namaUsaha: editedNamaUsaha,
            lokasiUsaha: editedLokasiUsaha,
            deskripsiUsaha: editedDeskripsiUsaha,
            noTelp: editedNoTelp,
            kategori: editedKategori,
            showToggle: editedShowToggle
          })
          // console.log("dataid", data.id)
          console.log('Document updated with ID: ', docRef);
        } catch (error) {
            console.error('Error writing document: ', error);
        }
        onClose()
        window.location.reload();

    };

    return(
        <>
            <p>a</p>
            <Modal
                isOpen={isOpen}
                backdrop={true}
                toggle={onClose}
                centered
                className="popup-container"
                size="md"
            >
                <div className="d-flex justify-content-between px-4 pt-4 pb-3">
                    <div className="font-weight-bold">EDIT</div>
                        <span className="pointer">
                        <IcnClose onClick={onClose} width={'1em'} height={'1em'} color={'#999'} />
                        </span>
                    </div>
                    <hr className="mt-1 mb-0"/>
                    <main className="edit-form w-100 m-auto">
                        <div className="form-floating pb-3">
                        <label htmlFor="floatingInput">Nama Usaha</label>
                        <input
                            id="floatingInput"
                            name="namaUsaha"
                            type="text"  
                            className="form-control"
                            value={editedNamaUsaha}
                            required                                                                                
                            placeholder={data.namaUsaha}
                            onChange={(e) => setEditedNamaUsaha(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="kategori">Kategori:</label>
                        <select
                            id="kategori"
                            name="kategori"
                            value={editedKategori}
                            required
                            onChange={(e) => setEditedKategori(e.target.value)}
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
                            value={editedDeskripsiUsaha}
                            required                                                                                
                            placeholder="Deskripsi Usaha"
                            onChange={(e) => setEditedDeskripsiUsaha(e.target.value)}
                        />
                    </div>

                    <div className="form-floating pb-3">
                        <label htmlFor="floatingInput">Lokasi Usaha</label>
                        <input
                            id="floatingInput"
                            name="lokasiUsaha"
                            type="text"  
                            className="form-control"
                            value={editedLokasiUsaha}
                            required                                                                                
                            placeholder="No Telp"
                            onChange={(e) => setEditedLokasiUsaha(e.target.value)}
                        />
                    </div>

                    <div className="form-floating pb-3">
                        <label htmlFor="floatingInput">No Telp</label>
                        <input
                            id="floatingInput"
                            name="noTelp"
                            type="text"  
                            className="form-control"
                            value={editedNoTelp}
                            required                                                                                
                            placeholder="No Telp"
                            onChange={(e) => setEditedNoTelp(e.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button 
                            className="btn btn-primary w-100 py-2" 
                            type="submit" 
                            onClick={handleSubmit}
                            >
                            Submit
                        </button>
                    </div>
                </main>
            </Modal>
        </>
    )
    }
    export default EditUsaha;