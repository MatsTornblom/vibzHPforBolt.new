import React from "react"
import { styled } from "styled-components"
import MenuComponent from "./MenuComponent"
import { getScreenSize } from "../utils/getScreenSize"

const HeroComponent = () => {
  const screenSize = getScreenSize()

  return (
    <HeroSection>
      <WidthConstrainer>
        <MenuComponent />

        <HeroHeadingTextImg
          src="/images/headerImageText.png"
          alt="Spread love, not fud"
        />

        <HeroLizardImage
          src={
            screenSize <= 900
              ? "/images/smokingLizardMobile.png"
              : "/images/smokingLizardDesktop.png"
          }
        />

        <TextContainer>
          <SubHeading>
            Meet Vibz. He is on a mission to make the Internet a more loving
            place. Help him out!
          </SubHeading>
        </TextContainer>
        <VibzBtn>$Vibz</VibzBtn>
      </WidthConstrainer>
      {screenSize > 900 && <ContactInfo>Contract address to come</ContactInfo>}
    </HeroSection>
  )
}

export default HeroComponent

const HeroSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 81rem;
  background-color: var(--primary-red);
  background-image: url("/images/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    height: 75rem;
  }
`

const ContactInfo = styled.p`
  font-size: clamp(1.9rem, 2vw, 2.6rem);
  font-weight: 700;
  color: var(--primary-red);
  font-family: "Poppins-bold";

  position: absolute;
  bottom: -7rem;
  right: clamp(1rem, 5vw, 5rem);

  @media (max-width: 1657px) {
    margin-right: 1rem;
    font-size: 1.9rem;
  }

  @media (max-width: 1350px) {
    margin-right: 2rem;
    font-size: 1.9rem;
    margin-top: 2.5rem;
  }
`

const WidthConstrainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
`

const HeroLizardImage = styled.img`
  width: 50rem;
  height: 65rem;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 14.4rem;

  @media (max-width: 1260px) {
    right: 0;
  }
  @media (max-width: 900px) {
    width: 24.6rem;
    height: 32.6rem;
    object-fit: contain;
    bottom: 0;
  }
`

const HeroHeadingTextImg = styled.img`
  object-fit: cover;
  position: absolute;
  width: 48rem;
  left: 5rem;
  top: 26.5rem;
  max-width: calc(100% - 2rem);

  @media (max-width: 1090px) {
    width: 40rem;
  }
  @media (max-width: 900px) {
    top: 14rem;
    width: 32rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TextContainer = styled.div`
  position: absolute;
  width: 45rem;
  top: 50rem;
  left: 5.5rem;
  max-width: calc(100% - 2rem);

  @media (max-width: 900px) {
    width: 32rem;
    top: 32rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const SubHeading = styled.p`
  font-size: 2.6rem;
  font-weight: 400;
  color: var(--primary-yellow);
  position: absolute;
  top: 6.5rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    top: 2rem;
  }
`

const VibzBtn = styled.button`
  position: absolute;
  bottom: -5.1rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  background-color: var(--primary-blue);
  color: var(--primary-yellow);
  border: none;
  border-radius: 5.5rem;
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2.1rem 9.4rem;
  border: 0.8rem solid var(--primary-blue);
  transition: all 0.3s ease;

  &:hover,
  &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-blue);
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
    padding: 1rem 5.2rem;
    bottom: -3.5rem;
  }
`
