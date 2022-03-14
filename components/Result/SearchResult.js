import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Maskapai, Jadwal, Bandara} from '../../database/db';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchResult = ({data}) => {
  let available = true;

  var listJadwal = () => {
    var newJadwal = Jadwal.filter(x => {
      let checkBandaraK = Bandara.filter(x => {
        return x.bandara_nama.toLowerCase() == data.keberangkatan.toLowerCase();
      });

      let checkBandaraT = Bandara.filter(x => {
        return x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase();
      });

      try {
        return (
          x.bandara_kode_keberangkatan.toLowerCase() ==
            checkBandaraK[0].bandara_kode.toLowerCase() &&
          x.bandara_kode_tujuan.toLowerCase() ==
            checkBandaraT[0].bandara_kode.toLowerCase() &&
          data.tanggal.length === 10
        );
      } catch (err) {
        return (available = false);
      }
    });

    if (newJadwal.length > 0) {
      return newJadwal.map((printJadwal, i) => {
        let checkMaskapai = Maskapai.filter(x => {
          return x.maskapai_id == printJadwal.maskapai_id;
        });

        let capitalizeTheFirstLetterOfEachWord = words => {
          let separateWord = words.toLowerCase().split(' ');
          for (let i = 0; i < separateWord.length; i++) {
            separateWord[i] =
              separateWord[i].charAt(0).toUpperCase() +
              separateWord[i].substring(1);
          }
          return separateWord.join(' ');
        };

        if (available == true) {
          return (
            <View style={resultStyle.box} key={i}>
              <View style={resultStyle.upperText}>
                <Text style={resultStyle.text}>
                  {capitalizeTheFirstLetterOfEachWord(data.keberangkatan)}
                </Text>
                <Text style={resultStyle.text}> ------- </Text>
                <Text style={resultStyle.text}>
                  {capitalizeTheFirstLetterOfEachWord(data.tujuan)}
                </Text>
              </View>
              <MaterialIcons
                style={resultStyle.Icon}
                name="flight"
                size={25}
                color="#86b257"
              />
              <View style={resultStyle.bodyBox}>
                <Image
                  style={resultStyle.Image}
                  source={checkMaskapai[0].maskapai_logo}></Image>
                <View style={resultStyle.underText}>
                  <Text style={resultStyle.text}>
                    {checkMaskapai[0].maskapai_nama}
                  </Text>
                  <Text style={resultStyle.textBlue}>{data.tanggal}</Text>
                </View>
              </View>
            </View>
          );
        }
      });
    } else {
      return (
        <View style={resultStyle.boxNotAvail}>
          <Text style={resultStyle.textNotAvail}>
            Maaf, jadwal penerbangan yang kamu cari tidak ada
          </Text>
          <MaterialIcons
            style={resultStyle.userIcon}
            name="report-problem"
            color={'#dc143c'}
          />
        </View>
      );
    }
  };

  return <View>{listJadwal()}</View>;
};

const resultStyle = StyleSheet.create({
  notAvailable: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '90%',
    left: '5%',
    elevation: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxNotAvail: {
    padding: 10,
    width: '80%',
    left: '10%',
    top: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
  },
  textNotAvail: {
    textAlign: 'center',
  },
  userIcon: {
    marginTop: 25,
    fontSize: 60,
    marginRight: 0,
  },
  upperText: {
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 10,
    paddingTop: 10,
  },
  bodyBox: {
    marginTop: 10,
    alignContent: 'flex-start',
  },
  Image: {
    width: null,
    resizeMode: 'contain',
    height: 40,
    marginRight: 0,
    marginBottom: 10,
    marginTop: 10,
  },
  underText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    fontWeight: 'bold',
    marginBottom: -5,
  },
  textBlue: {
    fontWeight: 'bold',
    color: 'orange',
  },
  Icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -30,
  },
});

export default SearchResult;
