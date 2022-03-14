import React from 'react';
import {View, Text, StyleSheet, Colors} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NavHeader = ({data, navigation}) => {
  return (
    <View style={navStyle.menu}>
      <View style={navStyle.Icon}>
        <MaterialIcons
          style={navStyle.menuIcon}
          name="arrow-back-ios"
          color={'#fff'}
          onPress={() => navigation.goBack()}
        />
        <Text style={navStyle.textHead}>Hiling.id</Text>
        <MaterialIcons style={navStyle.userIcon} name="person" color={'#fff'} />
      </View>
      <View style={navStyle.text}>
        <Text style={navStyle.textHasil}>Hasil Pencarian Penerbangan</Text>
        <Text style={navStyle.textTanggal}>{data.tanggal}</Text>
      </View>
    </View>
  );
};

const navStyle = StyleSheet.create({
  Icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    backgroundColor: '#86b257',
    height: 160,
  },
  text: {
    alignItems: 'center',
  },
  textHead: {
    marginTop: 60,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  textHasil: {
    fontSize: 15,
    paddingTop: 10,
    color: 'white',
  },
  textTanggal: {
    fontSize: 15,
    color: 'white',
  },
  menuIcon: {
    marginTop: 65,
    fontSize: 30,
    marginLeft: 20,
  },
  userIcon: {
    marginTop: 65,
    fontSize: 30,
    marginRight: 20,
  },
});

export default NavHeader;
