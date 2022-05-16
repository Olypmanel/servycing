import React from "react";
import NavBar from "../../GlobalContainers/Header";
import TopSection, { TopBackgroundFilter, TopSectionContainer } from "./TopSection";
import styled from 'styled-components';
import  ServiceCards  from "./Card";
import Specialist from "./specialistAd";
import Footer from "../../GlobalContainers/Footer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../GlobalContainers/Responsive";
export const PageContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  border-box : border-box;
  flex-direction : column;
`;
export const InnerPageContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction : column;
  align-items : center;
  border-box : border-box;
`;


export const Home = (props) => {
const isMobile = useMediaQuery({maxWidth : deviceSize.mobile})
console.log("Window : " +window.innerWidth )
return (
 <PageContainer>
   <TopSectionContainer>
<TopBackgroundFilter>
 <NavBar isMobile={isMobile}/> 
 <TopSection />
 </TopBackgroundFilter>
  </TopSectionContainer>
  <InnerPageContainer>
    < ServiceCards/>
   </InnerPageContainer>
   <InnerPageContainer>
    <Specialist />
     </InnerPageContainer>
     <InnerPageContainer>
       <Footer isMobile={isMobile}/>
       </InnerPageContainer>
 </PageContainer>

 )
 }

export default Home