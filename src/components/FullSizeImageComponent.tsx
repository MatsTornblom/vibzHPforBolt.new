import React from "react"
import styled from "styled-components"
import { getScreenSize } from "../utils/getScreenSize"

const FullSizeImageComponent = () => {
  const screenSize = getScreenSize()

  const imageSrc =
    screenSize === 0 || screenSize >= 900
      ? "/images/house.jpg"
      : "/images/houseMobile.png"

  return (
    <MainContainer>
      <Image src={imageSrc} alt="house" />
    </MainContainer>
  )
}

export default FullSizeImageComponent

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;

  @media (min-width: 1440px) {
    width: 100vw;
    transform: translateX(calc((100vw - 1440px) / -2));
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`
