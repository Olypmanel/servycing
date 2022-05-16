import React, {useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Button from '../../GlobalContainers/Button';
import { deviceSize } from '../../GlobalContainers/Responsive';
import ServiceCardComponent from './Service';
import altData from '../../images_pro/altData';
const ContentContainer = styled.div`
width: 100%;
max-width : ${deviceSize.laptop}px;
display: flex;
flex-direction : column;
`;


export const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
// grid-gap: 1rem;
justify-content : center;
@media screen and (max-width : ${deviceSize.mobile}px){
 display : flex;
 overflow : scroll hidden;
 width : 100%;
 &::-webkit-scrollbar {
display : none;
 }
}
`;
const InnerPageTitle = styled.h2`
width : 80%;
margin: 2rem auto;
`;
const buttonStyle = {
 contents : "view more",
 margin : 'auto',
 topMargin : 1,
 bottomMargin: 5,
 weight : 300,
 width : 8
}
export const ServiceCards = (props) => {

const [cardData, setCardData] = useState([])
const offeredServices = async () => {
 const response = await axios.get("http://localhost:5000/services")
 .catch(error => console.log("this is an error of "+ error))
 if (response) {
setCardData(response.data)
 }}
 useEffect(() => {
 offeredServices()
 },  [])
 const noCardData = !cardData || cardData.length === 0 
const altCardData = altData.services
return (
<ContentContainer>
<InnerPageTitle>Most used services and more</InnerPageTitle>
<CardWrapper>
{noCardData ? 
altCardData.map(item => <ServiceCardComponent {...item} key={item.id} />) :
cardData.map(item => <ServiceCardComponent {...item} key={item.id} />)}
 </CardWrapper>
 <Button  {...buttonStyle} />
</ContentContainer>
)
}
export default ServiceCards