const Jadwal = [
  {
    jadwal_id: '001',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'TKG',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '002',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'TKG',
    maskapai_id: 'SA',
  },
  {
    jadwal_id: '003',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'TKG',
    maskapai_id: 'BA',
  },
  {
    jadwal_id: '004',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '005',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'BA',
  },
  {
    jadwal_id: '006',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'LA',
  },
  {
    jadwal_id: '007',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'AA',
  },
  {
    jadwal_id: '008',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'HLP',
    maskapai_id: 'LA',
  },
  {
    jadwal_id: '009',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'HLP',
    maskapai_id: 'CL',
  },
  {
    jadwal_id: '010',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'HLP',
    maskapai_id: 'BA',
  },
  {
    jadwal_id: '011',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'DPS',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '012',
    bandara_kode_keberangkatan: 'CGK',
    bandara_kode_tujuan: 'DPS',
    maskapai_id: 'SA',
  },
];

const Maskapai = [
  {
    maskapai_id: 'GA',
    maskapai_nama: 'Garuda Indonesia',
    maskapai_logo: require('../components/images/Garuda.png'),
  },
  {
    maskapai_id: 'LA',
    maskapai_nama: 'Lion Air',
    maskapai_logo: require('../components/images/Lion.png'),
  },
  {
    maskapai_id: 'SA',
    maskapai_nama: 'Sriwijaya Air',
    maskapai_logo: require('../components/images/Sriwijaya.png'),
  },
  {
    maskapai_id: 'BA',
    maskapai_nama: 'Batik Air',
    maskapai_logo: require('../components/images/Batik.png'),
  },
  {
    maskapai_id: 'CL',
    maskapai_nama: 'Citilink',
    maskapai_logo: require('../components/images/Citilink.png'),
  },
  {
    maskapai_id: 'AA',
    maskapai_nama: 'Air Asia',
    maskapai_logo: require('../components/images/AirAsia.png'),
  },
];

const Bandara = [
  {
    bandara_kode: 'CGK',
    bandara_nama: 'Soekarno Hatta',
  },
  {
    bandara_kode: 'HLP',
    bandara_nama: 'Halim Perdanakusuma',
  },
  {
    bandara_kode: 'SUB',
    bandara_nama: 'Juanda',
  },
  {
    bandara_kode: 'TKG',
    bandara_nama: 'Raden Inten',
  },
  {
    bandara_kode: 'DPS',
    bandara_nama: 'Ngurah Rai',
  },
  {
    bandara_kode: 'BDO',
    bandara_nama: 'Husein Sastranegara',
  },
];

export {Maskapai, Bandara, Jadwal};
