import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo/Logo';

export const FooterContainer = styled.section`
display: flex;
flex-direction: column;
align-items : center;
  min-height : 500px;
  width : 100%;
  border-top: solid rgba(0, 0, 0, 0.2) 0.6px;
color: rgba(0, 0, 0, 0.6);
`;
const TopFooterCont = styled.div`
display : flex;
// padding : ;
width : 100%;
`;

const CategoryAndAccess = styled.div`
display: flex;
flex-direction : column;
margin: 0 3rem;
text-align : start;
text-transform : capitalize;
`;
const Title = styled.h3`
font-size: 1.1rem;
color: black;
`
const Flinks = styled.p`
color: rgba(0, 0, 0, 0.6);
font-size: 0.8rem;
cursor : pointer;
`;
const BottomCont = styled.div`
display: flex;
width: 80%;
margin : auto;
align-items : center;
justify-content: space-between;
padding: 0 2rem;
border-top: solid rgba(0, 0, 0, 0.2) 0.6px;
height: auto;
`
const Rights = styled.p`
font-size :0.7rem;
color: rgba(0, 0, 0, 0.3);
margin-right: auto;
margin-left: 6px;
text-transform : capitalize;
`
const Icons = styled.div`
display: flex;
cursor : pointer;
`
const logoAdjust = {
 color : '  rgba(0, 0, 0, 0.4)',
 fontSize: 1.3,
 weight : 900,
 marginBottom: 0,
 marginTop:-1.3,
 size : 0
}

export const Footer = (props) => {
 return(
  <FooterContainer>
<TopFooterCont>
<CategoryAndAccess>
 <Title>category</Title>
 <Flinks> Car repair</Flinks>
 <Flinks>Landscaping</Flinks>
 <Flinks> Carpentry</Flinks>
 <Flinks>Cleaning</Flinks>
 <Flinks>home improvement</Flinks>
 <Flinks>demolition</Flinks>
 <Flinks>management</Flinks>
 <Flinks>others</Flinks>
 </CategoryAndAccess>
 <CategoryAndAccess>
 <Title>Access</Title>
 <Flinks>login </Flinks>
 <Flinks>join us</Flinks>
 <Flinks> login as specialist</Flinks>
 <Flinks>become a specialist</Flinks>
 </CategoryAndAccess>
</TopFooterCont>
<BottomCont>
 <Logo hideLogo {...logoAdjust}/>
{!props.isMobile && <Rights>&#169; all rights reserved. 2022</Rights>}
 <Icons>some icons</Icons>
 </BottomCont>
  </FooterContainer>
 )
}

export default Footer