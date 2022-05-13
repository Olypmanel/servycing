import React from 'react'
import styled from 'styled-components';
import brandLogo from "../../Images/logo192.png"

export const LogoContainer = styled.div`
  display : flex;
  align-items : center;
margin-bottom : ${({marginBottom}) => marginBottom ? marginBottom + "rem"  : "-20px"};

`;
const LogoImgCont = styled.div`
width : ${({width}) => width ? width + "rem" : "4rem"};
height : ${({height}) => height ? height + "rem" : "4rem"};
margin-right: 6px;

img {
 width : 100%;
 height : 100%;
}
`
const LogoTitle = styled.h2`
 font-size : ${({fontSize}) =>  fontSize ? fontSize + "rem" : "2.5rem"};
 color: ${({color}) => color ? color : "#fff"};
 font-weight : 600;
// color: white;
`
export const Logo = (props) => {
 const { color, fontSize, height, width, marginBottom} = props
 return(
<LogoContainer marginBottom={marginBottom}>
<LogoImgCont width={width} height={height}>
 <img src={brandLogo} alt='servycing logo' />
 </LogoImgCont>
 <LogoTitle fontSize={fontSize} color={color}>
  Servycing
  </LogoTitle>
</LogoContainer>
 )
}

export default Logo