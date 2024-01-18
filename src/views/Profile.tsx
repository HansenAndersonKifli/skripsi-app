
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/UserAuthContext'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseSetup';
import { Table } from 'reactstrap';
import EditModal from './admin_page/EditModal';
import EditUsaha from '../components/EditUsaha';

interface IData {
  id: string;
  namaUsaha: string;
  lokasiUsaha: string;
  kategori: string;
  deskripsiUsaha: string;
  noTelp: string;
  usahaUserUID: string;
}

const Profile = () => {
  const { currentUser, signOut } = useContext(AuthContext)
  const [data, setData] = useState<IData[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

    const tableColumnSetting = [
        {
          title: 'No',
          columnName: 'index',
          width: '20px',
        },
        {
          title: 'Nama Usaha',
          columnName: 'namaUsaha',
          width: '150px',
        },
        {
          title: 'Lokasi Usaha',
          columnName: 'lokasiUsaha',
          width: '60px',
        },
        {
          title: 'Kategori',
          columnName: 'kategori',
          width: '50px',
        },
        {
          title: 'No Telp',
          columnName: 'noTelp',
          width: '80px',
        },
        {
          title: 'Deskripsi Usaha',
          columnName: 'deskripsiUsaha',
          width: '100px',
        },
        {
          title: 'Usaha Ditampilkan Oleh Admin?',
          columnName: 'Usaha Ditampilkan Oleh Admin?',
          width: '50px',
        },
        {
          title: 'Opsi',
          columnName: 'opsi',
          width: '50px',
        },
      ];
      
    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "dataUsaha"), where("usahaUserUID", "==", currentUser?.uid)
            );

            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as IData[];
      
            setData(newData);
            // console.log("newData", newData);
        };
    
        fetchData();
      }, []);

    const tableColumn = () => {
        return (
            <>
              <thead className="px-5 py-3">
                <tr>
                  {tableColumnSetting.map((row, index) => {
                    const width = row.width || "";
                    // console.log("width",row.width);
                    return (
                      <th
                        id={`tr-${index}`}
                        key={index}
                        style={{
                          width,
                          verticalAlign: "middle",
                          paddingBottom: "15px",
                          // borderBottom: "0",
                          backgroundColor: "#FFFFFF",
                          fontSize: "13px",
                          textAlign: "center",
                          borderRadius: "100%"
                        }}
                      >
                        {row.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
            </>
          );
    }

    const editData = (item: any) => {
        setOpenModal(true);
        setModalData(item);
        // console.log("item", item);
    }
    const closeModal = () => {
        setOpenModal(false);
    }
    // console.log("openModal", openModal);
    // console.log("modalData", modalData);
    
    const tableBody = () => {
        const index = 0;
        const itemPage = 10;
        return (
            <tbody>
                {data
                .slice(index * itemPage, index * itemPage + itemPage)
                .map((item: any, index: any) => {
                    return (
                    <tr key={index} style={{ border: "0" }}>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {index + 1}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.namaUsaha}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.lokasiUsaha}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.kategori}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.noTelp}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.deskripsiUsaha}
                            </div>
                        </td>
                        <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {item.showToggle}
                            </div>
                        </td>
                        {/* <td>
                            <div
                                className="font-size-12px mb-3"
                                style={{ textAlign: "center" }}
                            >
                                {moment(item.createdDate).format('DD/MM/YYYY')}
                            </div>
                        </td> */}
                        <td>
                            <div
                            className="font-size-12px mb-3"
                            style={{ textAlign: "center" }}
                            >
                                <a href="#"
                                className="text-black"
                                onClick={()=>editData(item)}>
                                    Edit
                                </a>
                            </div>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        );
    }
  return(
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>Halo! {currentUser?.email}</h3>
        {/* <p>Sign In Status: {currentUser && 'active'}</p> */}
          <button style={{ marginLeft: 'auto' }}  onClick={signOut}>Sign Out</button>
      </div>
      <p>Tabel Usaha Anda</p>
      <Table bordered striped hover className="C--table type--2 mb-4">
        {tableColumn()}
        {tableBody()}
      </Table>
      {
        openModal && (
            <EditUsaha
                isOpen={true}
                onClose={closeModal}
                data={modalData}
            />
        )
      }
    </>
  )
}
export default Profile;
