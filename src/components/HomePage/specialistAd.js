import React from 'react'
import styled from 'styled-components';
import Logo from '../../GlobalContainers/Logo/Logo';
import { LogoContainer, SideImageContainer, SloganText } from './TopSection';
// import adImg from "../../images_pro/handshake.jpg"
import Button from '../../GlobalContainers/Button';

export const TopContainer = styled.div`
background : rgb(2, 62, 62);
  width : 100%;
  display: flex;
height: 500px;
  justify-content: center;
  align-items : center;
  overflow: hidden;
`;
const AdTexts = styled(SloganText)`
font-size :1.5rem;
`;
// const ImgContainer = styled(SideImageContainer)`
// width : 100%;

// `
const logoAdjust = {
  fontSize : 1.5,
  width:3 ,
  height:3,
  marginBottom: 0.6
}
const buttonAdjust = {
  contents : 'join as specialist',
  fontSize :0.8
  
}
export const Specialist = (props) => {
 return(
 <TopContainer>
<LogoContainer>
 <Logo  {...logoAdjust}/>
 <AdTexts> You're a Specialist, and you</AdTexts>
 <AdTexts>have an outstanding</AdTexts>
 <AdTexts>Service to offer</AdTexts>
 <Button {...buttonAdjust}/>
 </LogoContainer>
<SideImageContainer>
 {/* <img src={adImg} alt="ad images" /> */}
</SideImageContainer>
 </TopContainer>
 )
}

export default Specialist