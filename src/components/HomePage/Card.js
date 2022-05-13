import axios from 'axios';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Button from '../../GlobalContainers/Button';
import { deviceSize } from '../../GlobalContainers/Responsive';
import ServiceCardComponent from './Service';
const ContentContainer = styled.div`
width: 100%;
max-width : ${deviceSize.lapTop}px;
display: flex;
flex-direction : column;
`;
const buttonStyle = {
 contents : "view more",
 margin : 'auto',
 topMargin : 1,
 bottomMargin: 10,
 weight : 300,
 width : 8
}

const WarningText = styled.div`
color : red;
font-size : 1.5rem;
font-weight: 800;
`;
export const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
// grid-gap: 1rem;
justify-content : center;
`;
const InnerPageTitle = styled.h2`
width : 80%;
margin: 2rem auto;
`;
export const ServiceCards = (props) => {

const [cardData, setCardData] = useState([])
const offeredServices = async () => {
 const response = await axios.get("http://localhost:5000/services")
 .catch(error => console.log("this is an error of "+ error))
 if (response) {
setCardData(response.data)
console.log(response.data)
 }}
 useEffect(() => {
 offeredServices()
 },  [])
 const noCardData = !cardData || cardData.length === 0

return (
<ContentContainer>
<InnerPageTitle>Most used services and more</InnerPageTitle>
<CardWrapper>
{noCardData ? 
 <WarningText>No service available yet</WarningText>    :
cardData.map(item => <ServiceCardComponent {...item} key={item.id} />)}
 </CardWrapper>
 <Button  {...buttonStyle} />
</ContentContainer>
)
}
export default ServiceCards