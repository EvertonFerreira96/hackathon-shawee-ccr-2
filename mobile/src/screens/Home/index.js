import React from 'react';

import { Wrapper, Container  } from './styles';


import Header from '../../components/Header';
import Banner from '../../components/Banner';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <Wrapper>
      <Header  title='Home'/>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </ScrollView>
    </Wrapper>
  );
}