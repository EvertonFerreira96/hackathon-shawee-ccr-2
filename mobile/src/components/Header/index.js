import React from 'react';
import { Image } from 'react-native';
import {  useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import { HeaderContainer, BalanceContainer, BalanceTitle, Balance } from './styles';

import imgIcon from '../../assets/images/icon.png';


const Header = (props) => {

 const nav = useNavigation();

 return (
   
  <HeaderContainer>
    <Image source={imgIcon} />

    <BalanceContainer>
   { props.title && <BalanceTitle>{props.title}</BalanceTitle>}
    </BalanceContainer>

    <Ionicons name="power" size={30} color={ props.icon ? "#3185FC" : "#E5E5E5"} />
</HeaderContainer>
 );
}

export default Header;