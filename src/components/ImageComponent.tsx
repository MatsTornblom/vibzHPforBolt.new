import React from "react"
import styled from "styled-components"
import { getScreenSize } from "../utils/getScreenSize"
import Link from "next/link"

const ImageComponent = () => {
  const screenSize = getScreenSize()

  return (
    <MainContainer>
      <HeadingContainer>
        <Heading>Create & share memes!</Heading>
        <SubHeading>
          Spread love with a laugh by creating memes in GLIF!
        </SubHeading>
      </HeadingContainer>
      <ImageContainer>
        <Image
          src="https://res.cloudinary.com/dzkwltgyd/image/upload/v1743062667/glif-run-outputs/yu7ko0ui1cfflzezgove.png"
          alt="lizardOne"
          width={500}
          height={500}
        />
        <Image
          src="https://res.cloudinary.com/dzkwltgyd/image/upload/v1742999026/glif-run-outputs/dptuoetgc4mpgrqrx8lc.png"
          alt="lizardTwo"
          width={500}
          height={500}
        />
        <Image
          src="https://res.cloudinary.com/dzkwltgyd/image/upload/v1742999026/glif-run-outputs/dptuoetgc4mpgrqrx8lc.png"
          alt="lizardThree"
          width={500}
          height={500}
        />
        <Image
          src="https://res.cloudinary.com/dzkwltgyd/image/upload/v1742999026/glif-run-outputs/dptuoetgc4mpgrqrx8lc.png"
          alt="lizardFour"
          width={500}
          height={500}
        />
      </ImageContainer>
      <ButtonContainer>
        <VibzBtn href="https://glif.app/@dafera/glifs/cm70rqzqh00009p6dep9i0dla">
          Go Create
        </VibzBtn>
      </ButtonContainer>
    </MainContainer>
  )
}

export default ImageComponent

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10rem;

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`

const ContactInfo = styled.p`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--primary-red);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -23rem;
  font-family: "Poppins-bold";

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

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
    margin-top: 6rem;
  }
`

const Heading = styled.h2`
  font-size: 5.5rem;
  font-weight: 400;
  color: var(--primary-red);

  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
`

const SubHeading = styled.p`
  margin-top: 1rem;
  font-size: 2.6rem;
  font-weight: 400;
  color: var(--primary-red);

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;

  @media (max-width: 900px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 2rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    margin-top: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
  }
`

const Image = styled.img`
  width: 28rem;
  height: 28rem;

  & + & {
    margin-left: 2.3rem;
  }

  @media (max-width: 1350px) {
    width: 20rem;
    height: 20rem;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.6rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`
const VibzBtn = styled(Link)`
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
  padding: 2.1rem 8.1rem;
  border: 0.8rem solid var(--primary-red);
  transition: all 0.3s ease;

  &:hover,
  &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    padding: 0.9rem 2.6rem;
    font-size: 3rem;
  }
`
