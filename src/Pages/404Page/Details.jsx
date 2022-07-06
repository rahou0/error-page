import React from "react";
import styled from "styled-components";
import image from "../../assets/404pageImage.svg";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const Image = styled.img`
  height: 435.94415283203125px;
  width: 561.34033203125px;
`;
const Title = styled.span`
  font-family: Montserrat;
  font-size: 64px;
  font-weight: 600;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors.Red};
  margin-bottom: 15px;
  margin-top: 30px;
`;
const Text = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors.Black};
  a {
    color: ${({ theme }) => theme.colors.Red};
    text-decoration: underline;
    cursor: pointer;
  }
`;
function Details() {
  return (
    <Container>
      <Image src={image} alt="404 page not found" />
      <Title>404</Title>
      <Text>
        “Looks like this page is missing. If you still need help, visit our{" "}
        <a href="/">help center.</a>”
      </Text>
    </Container>
  );
}

export default Details;
