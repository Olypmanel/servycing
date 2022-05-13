import styled from 'styled-components';
import React from 'react'

export const PageWrapper = styled.div`
  background: brown;
  color: rgba(5,5,5 ,1);
`;
const AnotherPage = styled.div`
color: green;
background : yellow;
`
export const Form = (props) => {
 return(
  <PageWrapper> FORM IS HERE
    <AnotherPage>ANOTHER FORM</AnotherPage>
  </PageWrapper>

 )
}

export default Form