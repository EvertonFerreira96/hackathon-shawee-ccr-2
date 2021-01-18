import React, { useState} from 'react';
import { Wrapper, Container, ContainerLogin, Label,Title, TextInput, Button, ButtonTitle, HyperLink, HyperLinkTitle, CheckboxView, CheckboxContainer, CheckBoxTitle } from './styles';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function SignUp() {
  const navigation = useNavigation();
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <> 
    <Wrapper>
      <Header title='CADASTRA-SE' icon={false} />
      <Container>
        <ContainerLogin>
          <Title>CRIE UMA CONTA E SE PREPARE PARA O MERCADO</Title>
          <Label>Nome</Label>
          <TextInput />
          <Label>Sobrenome</Label>
          <TextInput />
          <Label>Celular</Label>
          <TextInput />
          <Label>Email</Label>
          <TextInput />
          <Label>Senha</Label>
          <TextInput />
          <Button onPress={() => navigation.navigate("Avatar")}><ButtonTitle>Cadastrar-se gratuitamente</ButtonTitle></Button>


        </ContainerLogin>
      </Container>
      
    </Wrapper>
  
    </>
       );
}