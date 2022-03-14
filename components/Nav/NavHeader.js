import React from 'react';
import {View, Text, StyleSheet, Colors} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NavHeader = () => {
  return (
    <View style={navStyle.menu}>
      <MaterialIcons style={navStyle.menuIcon} name="menu" color={'#fff'} />

      <Text style={navStyle.text}>Hiling.id</Text>

      <MaterialIcons style={navStyle.userIcon} name="person" color={'#fff'} />
    </View>
  );
};

const navStyle = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    backgroundColor: '#86b257',
    justifyContent: 'space-between',
    borderRadius: 15,
    height: 500,
  },
  text: {
    marginTop: 150,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  menuIcon: {
    marginTop: 60,
    fontSize: 30,
    marginLeft: 20,
  },
  userIcon: {
    marginTop: 60,
    fontSize: 30,
    marginRight: 20,
  },
});

export default NavHeader;
