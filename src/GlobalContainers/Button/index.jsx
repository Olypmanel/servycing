import styled from 'styled-components';
import React from 'react'

export const BtnWrapper = styled.button`
  border : none;
  outline: none; 
  border-radius : 5px;
  text-transform: capitalize;
  transition : all 200ms ease-in-out;
  color : ${({color}) => color ? color : "white"};
  background :${({bgColor}) => bgColor ? bgColor : "rgb(86, 152, 209)"};
  width : ${({width}) => width ? width + "rem" : "auto"};
  padding : 5px ${({padding}) => padding ? padding + "rem"  : "1rem" };
  font-weight: ${({weight}) => weight ? weight  : "500"};
  margin : ${({margin}) => margin ? margin : "0" };
  margin-top : ${({topMargin}) => topMargin ? topMargin + "rem" : "0"};
  margin-bottom : ${({bottomMargin}) => bottomMargin ? bottomMargin + "rem" : "0"};
font-size : ${({fontSize}) => fontSize ? fontSize + "rem" : "1"};
  &:hover {
   background : rgb(0, 50, 60);
  }

`;
export const Button = (props) => {
  const {
     contents, weight, width, topMargin, color,
     bottomMargin, margin, bgColor, fontSize
    } = props
 return(
  <BtnWrapper weight={weight} width={width} topMargin={topMargin} fontSize={fontSize}
  bgColor={bgColor} color={color}  margin={margin} bottomMargin={bottomMargin}>
 {contents}
  </BtnWrapper>
 )
}

export default Button
