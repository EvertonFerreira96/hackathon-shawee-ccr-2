import React, { useState} from 'react';
import { Wrapper, Container, ContainerLogin, Label, TextInput, Button, ButtonTitle, HyperLink, HyperLinkTitle, CheckboxView, CheckboxContainer, CheckBoxTitle } from './styles';

import { Checkbox } from 'react-native-paper';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function Home() {
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <> 
    <Wrapper>
      <Header title='LOGIN' />
      <Container>
        <ContainerLogin>
          <Label>Email</Label>
          <TextInput />
          <Label>Senha</Label>
          <TextInput />
          <Button><ButtonTitle>Entrar</ButtonTitle></Button>
          <HyperLink><HyperLinkTitle>Esqueci minha senha</HyperLinkTitle></HyperLink>
          

          <CheckboxContainer>
            <CheckboxView>
            <Checkbox
              color='#3185FC'
              status={rememberPassword ? 'checked' : 'unchecked'}
              onPress={() => {
                setRememberPassword(!rememberPassword);
              }}
              />
            </CheckboxView>
            <CheckBoxTitle>Lembrar login</CheckBoxTitle>
          </CheckboxContainer>


        </ContainerLogin>
      </Container>
      
    </Wrapper>
  
    </>
       );
}