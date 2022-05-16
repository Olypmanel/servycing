import React from 'react'
import styled from 'styled-components';
import brandLogo from "../../Images/logo192.png"
import {Link} from 'react-router-dom'

export const LogoContainer = styled.div`
  display : flex;
  align-items : center;
margin-bottom : ${({marginBottom}) => marginBottom ? marginBottom + "rem"  : "-20px"};
margin-top : ${({marginTop}) => marginTop ? marginTop + "rem"  : "0"};


`;
const LogoImgCont = styled.div`
width : ${({width}) => width ? width + "rem" : "4rem"};
height : ${({height}) => height ? height + "rem" : "4rem"};
margin-right: 6px;

img {
 width : 100%;
 height : 100%;
}
`;
const LogoTitle = styled.h2`
 font-size : ${({fontSize}) =>  fontSize ? fontSize + "rem" : "2.5rem"};
 color: ${({color}) => color ? color : "#fff"};
 font-weight : 600;
// color: white;
`;
const linksAdjust = {
  textDecoration : "none",
  color: "inherit"
}
export const Logo = (props) => {
// const isMobile = useMediaQuery(maxWidth:d)
 const { color, fontSize, height, width, marginBottom, marginTop, hideLogo} = props
 return(
<LogoContainer marginBottom={marginBottom} marginTop={marginTop}>
{!hideLogo && <LogoImgCont width={width} height={height}>
 <img src={brandLogo} alt='servycing logo' />
 </LogoImgCont>}
 <LogoTitle fontSize={fontSize} color={color}>
  <Link style={linksAdjust} exact to='/'> Servycing</Link>
  </LogoTitle>
</LogoContainer>
 )
}

export default Logo