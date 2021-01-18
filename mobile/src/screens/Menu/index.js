import React, { useState} from 'react';
import { Wrapper, Container, HyperLink, HyperLinkTitle, Image, Logo, ContainerLogo } from './styles';

import { useNavigation } from '@react-navigation/native';

import imgModel from '../../assets/images/model.png';
import imgLogo from '../../assets/images/logo.png';

export default function Menu() {
  const navigation = useNavigation();
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <> 
    <ContainerLogo >
      <Logo source={imgLogo} />
    </ContainerLogo>
    <Wrapper 
    colors={ ['#FFF', '#3185FC'] }
    start={{x: 0, y: 0}}
    end={{x: 0, y: 0.9}}
    locations={[0.75,0.75]}>
    


    <Container style={{elevation: 50}}>
      <HyperLink >
        <HyperLinkTitle>SOBRE</HyperLinkTitle>
      </HyperLink>
      <HyperLink onPress={()=> navigation.navigate('SignUp')}> 
        <HyperLinkTitle>CADASTRA-SE</HyperLinkTitle>
      </HyperLink>
      <HyperLink onPress={()=> navigation.navigate('Login')}> 
        <HyperLinkTitle>LOGIN</HyperLinkTitle>
      </HyperLink>
      <HyperLink onPress={()=> navigation.navigate('Radar')}>
        <HyperLinkTitle>RADAR</HyperLinkTitle>
      </HyperLink>
    </Container>



    <Image source={imgModel} style={{}}/>
  </Wrapper>
  
    </>
       );
}