import React from "react";
import styled from "styled-components";
import Details from "./Details";
import Background from "./Background";
const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  position: relative;
  /* overflow: hidden; */
  overflow: visible;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.White};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
`;
const UpperSection = styled.div`
  display: flex;
  width: 100%;
  height: 234px;
  padding: 97px 0px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
  box-sizing: border-box;
  z-index: 2;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20%;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    padding: 30px 15%;
  }
  @media (max-width: 950px) {
    padding: 30px 10%;
  }
  @media (max-width: 900px) {
    padding: 30px 5%;
  }
`;
const Title = styled.span`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors.White};
  cursor: default;
`;

function Error404Page() {
  return (
    <PageContainer>
      <Container>
        <Background />
        <UpperSection color={"Red"}>
          <Title>Page lost in space !</Title>
        </UpperSection>
        <MainSection>
          <MainContainer>
            <CenterContainer>
              <Details />
            </CenterContainer>
          </MainContainer>
        </MainSection>
      </Container>
    </PageContainer>
  );
}

export default Error404Page;
