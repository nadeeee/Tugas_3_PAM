import React from 'react';
import {View, Text} from 'react-native';
import NavHeader from '../Nav/NavHeader';
import FormSearch from '../Form/FormSearch';
import NavBottom from '../Nav/NavBottom';
import {SafeAreaView, ScrollView} from 'react-native';
const SearchPage = ({navigation}) => {
  return (
    <View>
      <NavHeader />
      <FormSearch navigation={navigation} />
      <NavBottom />
    </View>
  );
};

export default SearchPage;
