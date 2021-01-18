import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';



export const Wrapper = styled(LinearGradient)`
  justify-content: center;
  flex:1;
  padding: 0 50px 0;
  position: relative;

`;


export const Container = styled.View`
margin: 0 0 250px;
z-index:10;
`;

export const HyperLink = styled.TouchableOpacity`
justify-content: flex-start;
padding: 5px;
margin:5px 0;
`;

export const HyperLinkTitle = styled.Text`
font-weight: 500;
font-size:28px;
line-height:38px;
`;

export const Image = styled.Image`
position: absolute;
bottom:0;
right:0;
`;



export const ContainerLogo = styled.SafeAreaView`
background: #FFF;
align-items: center;
`;

export const Logo = styled.Image`
justify-content: center;
background: #FFF;
margin-top:50px;
`;
