import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Image } from 'react-native';

import { Button, Label } from './styles';

import imgCup from '../../assets/images/cup.png'

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#FFF', '#CCC']
            : ['#392671', '#4C358F'] 
        }
        start={[1, 0.2]}
      >

        <Image source={imgCup} style={{width: 50, height: 50}} />

       {/* <MaterialIcons name="attach-money" size={50} color={focused ? '#000' : '#fff'} /> */}
       {/* <Label focused={focused}>Pagar</Label> */}
      </Button>
    </TouchableWithoutFeedback>
  );
}