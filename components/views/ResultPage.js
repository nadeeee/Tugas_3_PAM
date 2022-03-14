import React from 'react';
import {View} from 'react-native';
import NavHeaderShort from '../Nav/NavHeader2';
import NavBottom from '../Nav/NavBottom';
import SearchResult from '../Result/SearchResult';

const ResultPage = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <View>
      <NavHeaderShort navigation={navigation} data={data} />
      <SearchResult navigation={navigation} data={data} />
      <NavBottom />
    </View>
  );
};

export default ResultPage;
