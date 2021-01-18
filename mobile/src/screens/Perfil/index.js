import React, { useState} from 'react';
import { Image, FlatList, View } from 'react-native'
import { Wrapper, Container, Button, ButtonTitle, } from './styles';

import {useNavigation} from '@react-navigation/native';

import { Checkbox } from 'react-native-paper';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import imgOpt1 from '../../assets/images/opt1.png';
import imgOpt2 from '../../assets/images/opt2.png';
import imgOpt3 from '../../assets/images/opt3.png';
import imgOpt4 from '../../assets/images/opt4.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUp() {

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const data = [
    {
      id: 1,
      image:imgOpt1,
      state: selected1,
      setState: setSelected1,
    },
    {
      id: 2,
      image:imgOpt2,
      state: selected2,
      setState: setSelected2,
    },
    {
      id: 3,
      image:imgOpt3,
      state: selected3,
      setState: setSelected3,
    },
    {
      id: 4,
      image:imgOpt4,
      state: selected4,
      setState: setSelected4,
    },
    {
      id: 5,
      image:imgOpt1,
      state: selected5,
      setState: setSelected5,
    },
    {
      id: 6,
      image:imgOpt2,
      state: selected6,
      setState: setSelected6,
    },
    {
      id: 7,
      image:imgOpt3,
      state: selected7,
      setState: setSelected7,
    },
    {
      id: 8,
      image:imgOpt4,
      state: selected8,
      setState: setSelected8,
    },
 
]
  const navigation = useNavigation();

  return (
    <> 
    <Wrapper>
      <Header title='PERFIL' icon={false} />
      <Container >

        <FlatList
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TouchableOpacity style={[ item.state ? {backgroundColor: '#3185FC',padding: 2, margin:5} : {backgroundColor: '#CCC',padding: 2, margin:5}]} onPress={() => item.setState(!item.state)}  ><Image source={item.image} width={50} height={50}  /></TouchableOpacity>}
        />


        <Button onPress={() => navigation.navigate("Navigation")}><ButtonTitle>Salvar</ButtonTitle></Button> 

      </Container>
      
    </Wrapper>
  
    </>
       );
}