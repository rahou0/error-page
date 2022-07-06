import React from "react";
import styled from "styled-components";
import image1 from "../../assets/404pageLeftImage.svg";
import image2 from "../../assets/404pageRightImage.svg";

const ImageOne = styled.img`
  height: 668px;
  width: 850px;
  left: -200px;
  top: -105.5849609375px;
  position: absolute;
`;
const ImageTwo = styled.img`
  position: absolute;
  bottom: -120px;
  height: 696px;
  width: 894px;
  right: 0px;
`;
function Background() {
  return (
    <>
      <ImageOne src={image1} alt="404 page left image" />
      <ImageTwo src={image2} alt="404 page right image" />
    </>
  );
}

export default Background;
