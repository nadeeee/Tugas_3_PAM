import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Colors,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-modern-datepicker';
const FormSearch = ({navigation}) => {
  const [text, onChangeText] = useState({
    keberangkatan: '',
    tujuan: '',
    tanggal: '',
  });

  const clickHandler = textInput => {
    return value => {
      onChangeText({...text, [textInput]: value});
    };
  };

  return (
    <View style={formStyle.box}>
      <View style={formStyle.package}>
        <Text style={formStyle.text}>Lokasi Keberangkatan</Text>
        <View style={formStyle.formSingle}>
          <MaterialCommunityIcons
            style={formStyle.Icon}
            name="airplane-takeoff"
            size={20}
            color="#86b257"
          />
          <TextInput
            style={formStyle.Input}
            placeholder="Masukkan Lokasi Keberangkatan"
            value={text.keberangkatan}
            onChangeText={clickHandler('keberangkatan')}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={formStyle.package}>
        <Text style={formStyle.text}>Lokasi Tujuan</Text>
        <View style={formStyle.formSingle}>
          <MaterialCommunityIcons
            style={formStyle.Icon}
            name="airplane-landing"
            size={20}
            color="#86b257"
          />
          <TextInput
            style={formStyle.Input}
            placeholder="Masukkan Lokasi Tujuan"
            value={text.tujuan}
            onChangeText={clickHandler('tujuan')}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={formStyle.package}>
        <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
        <View style={formStyle.formSingle}>
          <MaterialCommunityIcons
            style={formStyle.Icon}
            name="calendar-month"
            size={20}
            color="#86b257"
          />
          <TextInput
            style={formStyle.Input}
            placeholder="Masukkan Tanggal Keberangkatan"
            value={text.tanggal}
            onChangeText={clickHandler('tanggal')}
          />
        </View>
      </View>

      <View style={formStyle.package}>
        <TouchableOpacity
          style={formStyle.button}
          onPress={() => navigation.navigate('ResultPage', {data: text})}>
          <Text style={formStyle.textButton}>Cari</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formStyle = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 50,
    width: '80%',
    position: 'absolute',
    top: '45%',
    left: '10%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  package: {
    marginTop: 25,
  },
  formSingle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Icon: {
    padding: 10,
  },
  Input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed7c31',
    borderRadius: 5,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: '#fff',
  },
  datePicker: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default FormSearch;
