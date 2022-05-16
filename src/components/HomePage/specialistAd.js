import React from 'react'
import styled from 'styled-components';
import Logo from '../../GlobalContainers/Logo/Logo';
import { LogoContainer, SideImageContainer, SloganText } from './TopSection';
// import adImg from "../../images_pro/handshake.jpg"
import Button from '../../GlobalContainers/Button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../GlobalContainers/Responsive';

export const TopContainer = styled.div`
background : rgb(2, 62, 62);
margin-bottom : 3rem;
  width : 100%;
  display: flex;
height: 500px;
  justify-content: center;
  align-items : center;
  overflow: hidden;
  @media screen and (max-width : ${deviceSize.mobile}px) {
    flex-direction : column;
    min-height : 500px;
  }
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

export const Specialist = (props) => {
const isMobile = useMediaQuery({maxWidth : deviceSize.mobile})
const buttonAdjust = {
  contents : 'join as specialist',
  fontSize :0.8,
  width : isMobile && 10,
  fontSize : 0.8
  
}
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