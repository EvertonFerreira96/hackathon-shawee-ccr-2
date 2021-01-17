import React from 'react';

import { Wrapper, Container  } from './styles';


import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Banner />
      </Container>
    </Wrapper>
  );
}