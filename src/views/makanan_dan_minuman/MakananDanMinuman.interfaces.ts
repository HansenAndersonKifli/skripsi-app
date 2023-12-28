export interface IKategoriData {
    namaUsaha: string;
    lokasiUsaha: string;
    kategori: string;
}

export interface IDataDoc {
    id: string;
    data: IKategoriData[];
}

export interface IUsahaDataState {
    dataDisplay: IDataDoc[];
}

interface IData {
    id: string;
    namaUsaha: string;
    lokasiUsaha: string;
    kategori: string;
  }