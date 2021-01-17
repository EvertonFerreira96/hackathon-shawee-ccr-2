import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #E5E5E5;
  flex: 1;
`;

export const Container = styled.View`
  justify-content: center;
  flex:1;
`;

export const ContainerLogin = styled.View`
  justify-content: center;
  border: 1px solid #3185FC;
  margin: 0 30px 150px 30px; 
  padding: 30px;`;

export const Label = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  margin-bottom:10px;
`;

export const TextInput = styled.TextInput`
width: 100%;
height: 50px;
background: #E5E5E5;
border: 0.620237px solid rgba(0, 0, 0, 0.5);
border-radius: 4px;
margin-bottom:15px;
`;

export const Button = styled.TouchableOpacity`
background: #3185FC;
border-radius: 3.72142px;
align-items: center;
padding: 25px;
margin: 20px 0 10px 0;
`;


export const ButtonTitle = styled.Text`
color: #FFF;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 26px;
align-items: center;
text-align: center;`;



export const HyperLink = styled.TouchableOpacity`
align-items: center;
padding: 5px;
`;

export const HyperLinkTitle = styled.Text``;

export const CheckboxContainer = styled.View`
justify-content: center;
align-items: center;
flex-direction: row;
margin:15px 0 0 0;

`;

export const CheckboxView = styled.View`
  background: #E5E5E5;
  border-radius:20px;
  border: 1px solid #CCC;
  width: 50px;
  justify-content:center;
`;

export const CheckBoxTitle = styled.Text`
padding:15px;`;


