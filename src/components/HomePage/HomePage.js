import React from "react";
import NavBar from "../../GlobalContainers/Header";
import TopSection, { TopBackgroundFilter, TopSectionContainer } from "./TopSection";
import styled from 'styled-components';
import  ServiceCards  from "./Card";
import Specialist from "./specialistAd";
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

// const Cards = items.map()
return (
 <PageContainer>
   <TopSectionContainer>
<TopBackgroundFilter>
 <NavBar /> 
 <TopSection />
 </TopBackgroundFilter>
  </TopSectionContainer>
  <InnerPageContainer>
    < ServiceCards/>
   </InnerPageContainer>
   <InnerPageContainer>
    <Specialist />
     </InnerPageContainer>
 </PageContainer>

 )
 }

export default Home