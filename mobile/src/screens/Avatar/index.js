import React, { useState} from 'react';
import { Image,FlatList } from 'react-native'
import { Wrapper, Container, ContainerLogin, Label,Title, TextInput, Button, ButtonTitle, HyperLink, HyperLinkTitle, CheckboxView, CheckboxContainer, CheckBoxTitle } from './styles';

import {useNavigation} from '@react-navigation/native';

import { Checkbox } from 'react-native-paper';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import imgOpt1 from '../../assets/images/opt1.png';
import imgOpt2 from '../../assets/images/opt2.png';
import imgOpt3 from '../../assets/images/opt3.png';
import imgOpt4 from '../../assets/images/opt4.png';

export default function SignUp() {

  const data = [
    {
      id: 1,
      image:imgOpt1
    },
    {
      id: 2,
      image:imgOpt2
    },
    {
      id: 3,
      image:imgOpt3
    },
    {
      id: 4,
      image:imgOpt4
    },
]
  const navigation = useNavigation();

  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <> 
    <Wrapper>
      <Header title='AVATAR' icon={false} />
      <Container>

      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Image source={item.image} width={50} height={50} />}
      />

        <Button onPress={() => navigation.navigate("Avatar")}><ButtonTitle>Salvar</ButtonTitle></Button> 
      </Container>
      
    </Wrapper>
  
    </>
       );
}