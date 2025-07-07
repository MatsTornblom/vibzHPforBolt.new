"use client"

import MainContainer from "@/components/layout/MainContainer"
import MenuComponent from "@/components/MenuComponent"
import Link from "next/link"
import { styled } from "styled-components"

export default function BuyPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <MenuComponent />
        </HeroContent>
        <BackgroundImage>
          <Heading>Buy our token</Heading>
          <VibzBtn>$Vibz</VibzBtn>
        </BackgroundImage>
      </Hero>
      <MainContainer>
        <ContentContainer>
          <TextContainer>
            <h3>Buy</h3>
            <p>
              We are in the process of setting up our pre-sale of the $VIBZ
              token. While waiting, to follow the pre-sale preparations, please
              join our community.
            </p>
          </TextContainer>
        </ContentContainer>
        <ButtonContainer>
          <VibzBtnJoin href="https://t.me/+BUAL72IzxftkZDJk">Join the community</VibzBtnJoin>
        </ButtonContainer>
      </MainContainer>
    </>
  )
}

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 81rem;

  @media (max-width: 900px) {
    height: 50rem;
  }
`

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
`

const BackgroundImage = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--primary-red);
  background-image: url("/images/buyBg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`

const Heading = styled.h2`
  font-size: 12rem;
  font-weight: 400;
  color: var(--primary-yellow);
  text-align: center;
  margin: 0 2rem;

  @media (max-width: 900px) {
    font-size: 6rem;
  }
  @media (max-width: 600px) {
    font-size: 3.8rem;
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
  font-weight: 400;
  text-transform: uppercase;
  padding: 2.1rem 9.4rem;
  border: .8rem solid var(--primary-blue);
  transition: all 0.3s ease;

  &:hover, &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-blue);
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
    padding: 1rem 5.2rem;
    bottom: -3.5rem;
  }
`
const ContentContainer = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: left;
  gap: 17rem;
  padding: 0 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const TextContainer = styled.div`
  width: 65rem;
  height: 100%;

  p {
    font-size: 2.6rem;
  }
  h3 {
    margin-bottom: 3.6rem;
    font-size: 5.5rem;
    font-weight: 400;
    color: var(--primary-red);
    font-family: "climate crisis";
  }

  @media (max-width: 900px) {
    width: 90%;
    p {
      font-size: 2rem;
    }
    h3 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  }
`

const VibzBtnJoin = styled(Link)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  border: none;
  border-radius: 5.5rem;
  font-size: 5rem;
  font-weight: 400;
  font-family: "de-augusta";
  margin: 0 auto;
  padding: 2.1rem 5.5rem;
  border: .8rem solid var(--primary-red);
  transition: all 0.3s ease;

  &:hover, &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    font-size: 3rem;
    padding: 0.9rem 2.6rem;
  }
`

const ButtonContainer = styled.div`
  padding: 3rem 3rem 0;
  margin-bottom: 10rem;
  @media (max-width: 900px) {
  }
`
