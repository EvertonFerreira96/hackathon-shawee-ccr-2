import React, { useState} from 'react';
import { Wrapper, Container, ContainerLogin, Label,Title, TextInput, Button, ButtonTitle, HyperLink, HyperLinkTitle, CheckboxView, CheckboxContainer, CheckBoxTitle } from './styles';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';

export default function Radar() {
  const navigation = useNavigation();
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <> 
    <Wrapper>
      <Header title='RADAR' icon={false} />
      <Container>
        <Title>VAGAS</Title>
        <Title>EMPRESAS</Title>
        <Title>CURSOS</Title>
        <Title>CONTRATE-OS</Title>
      </Container>
    </Wrapper>
    </>
  );
}