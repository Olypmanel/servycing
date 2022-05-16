import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo/Logo';

export const NavBarContainer = styled.div`
  display : flex;
  width : 100%;
  align-items : center;
  justify-content : space-between;
  padding : 6px 8px;
  background : ${({bgColor}) => bgColor ? bgColor : "transparent"};
`;
const NavigatorContainer = styled.div`
display : flex;
justify-content : space-evenly;
align-items : center;
margin-top : 10px;
}
`;
 
const Anchor = styled.a`
font-size : 0.9rem;
// color : white;
display: block; 
cursor: pointer;
margin-right : 8px;
text-transform : capitalize;
text-decoration : none;
align-self : center;
color : rgba(255, 255, 255, 0.5);
transition : all 200ms ease-in-out;
text-align: center;
margin-left : 7px;
&:hover {
color : rgba(255, 255, 255, 0.9);
filter : contrast(1)
`;
const LinkSeparator = styled.div`
height: 1.5rem;
width: 2px;
background : white;
margin: 5px;
margin-right: 7px;

`

export const NavBar = (props) => {
 return(
<NavBarContainer style={{borderBottom : props.isMobile && "solid 0.1px rgba(255, 255,255, 0.1)"}}>
<Logo  fontSize={1} width={2} height={2} />
<NavigatorContainer>
 <Anchor>specialist portal</Anchor>
{!props.isMobile && <LinkSeparator />}
 <Button contents={ <Anchor>register</Anchor>}
  weight="normal"/>
 <Anchor>login</Anchor>
 </NavigatorContainer>
</NavBarContainer>
 )
}

export default NavBar