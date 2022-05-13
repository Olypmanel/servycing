import React from 'react'
import styled from 'styled-components';
const CardTopContainer = styled.section`
width : 100%;
margin: auto;
`
const CardContainer = styled.div`
display: flex;
flex-direction : column;
overflow : hidden;
 max-width: 250px;
  min-height : 250px;
  background: white;
  box-shadow : rgba(0,0,0,0.5) 2px 2px 10px;
  margin: 0.5rem;
  margin-bottom : 1.3rem;
`;
const CardImgContainer  = styled.div`
width: 100%;
height :11rem;
img {
 width :100%;
 height: 100%;
}
`;
const CardContentContainer  = styled.div`
width : 100%;
display : flex;
flex-direction : column;
flex : 1;
padding: 15px 10px
`;
const BottomContainer = styled.div`
width : 100%;
height : 32px;
display : flex;
justify-content : space-between;
align-items : center;
border-top : solid 1px rgba(0, 0, 0, 0.2);
padding: 0 10px;
`;
const Title = styled.h2`
font-size : 1rem;
font-weight : 500;
color : #000;
margin : 10px 0;
`;
const SpecialistName = styled.p`
margin : 0;
color : rgba(150, 150,150, 0.7);
font-size : 0.7rem;
font-weight: 700;
text-transform : capitalize;
`;
const RateContainer= styled.p`
margin: 0;
display : flex;
color : yellow;
font-weight : 800;
`;
const StartingText = styled.div`
margin: 0;
color : rgba(161, 161, 161, 0.9);
font-weight : 300;
font-size: 0.6rem;
`;
const PriceContainer = styled.p`
display: flex;
align-items : center;
`;
const PriceText = styled.p`
margin-left : 10px;
color : rgb(2, 62, 62);
font-weight: 700;
`

export const ServiceCardComponent = (props) => {
 const {title, image, name, rate, priceRate} = props

 return(
  <CardTopContainer>
   <CardContainer>
<CardImgContainer>
 <img src={image} alt={title} />
</CardImgContainer>
<CardContentContainer>
 <Title>{title}</Title>
 <SpecialistName>{name}</SpecialistName>
</CardContentContainer>
<BottomContainer>
<RateContainer>
  {/*STAR ICON should be here*/} {rate}
</RateContainer>
<PriceContainer>
 <StartingText>STARTING AT</StartingText>
 <PriceText>${priceRate}/hr</PriceText>
</PriceContainer>
</BottomContainer>
</CardContainer>
  </CardTopContainer>

 )
}

export default ServiceCardComponent