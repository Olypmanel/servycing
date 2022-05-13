import styled from 'styled-components';
import Logo from '../../GlobalContainers/Logo/Logo';
import backgroundImg from "../../images_pro/fashion.jpg"
import Button from  "../../GlobalContainers/Button/index"
// import sideImg from "../../images_pro/handshake.jpg"

export const TopSectionContainer = styled.section`
  height: 100vh;
  width :100%;
  background :url(${backgroundImg}) no-repeat center/cover  rgba(2, 62, 62);
  overflow : hidden
`;
export const TopBackgroundFilter = styled.div`
background-color: rgba(2, 62, 62, 0.8);
width : 100%;
height: 100%;
display: flex;
flex-direction : column;
`;
const TopSectionInnerContainer = styled.div`
width : 100%;
height:100%;
display: flex;
justify-content : space-evenly;
align-items : center;
`;
export const SideImageContainer = styled.div`
width : 30rem;
img {
 width: 100%;
 height :100%;
}
`;
export const LogoContainer = styled.div`
display : flex;
flex-direction : column;
`;
 export const SloganText =  styled.div`
line-height: 1.8;
font-size : 1.7rem; 
color : white;
`;

export const TopSection= (props) => {
 return(

 <TopSectionContainer>
<TopBackgroundFilter>
 <TopSectionInnerContainer>
<LogoContainer>
 <Logo  />
 <SloganText>Find the right specialist</SloganText>
 <SloganText>For the right job</SloganText>
 <Button contents="sign in" width={8} topMargin={1} />
 </LogoContainer>
  <SideImageContainer>
   {/* <img src={sideImg} alt="hand shake through computer" /> */}
   </SideImageContainer>
 </TopSectionInnerContainer>
 </TopBackgroundFilter>
 </TopSectionContainer>
 )
}

export default TopSection // THIS IS  EXPORTED TO HOMEPAGE.JS WHICH IS IN THE SAME MODULE AS THIS FILE.