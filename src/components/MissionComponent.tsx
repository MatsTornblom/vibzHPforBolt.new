import Link from "next/link"
import React from "react"
import styled from "styled-components"

const MissionComponent = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Heading>Mission</Heading>
        <Paragraph>
          We aren't just vibing. We are building a new global social media
          platform & loving community where it's safe to interact and share
          appreciation with friends and family. Our platform combines
          cutting-edge AI content creation and Web3 tech to transform how people
          share, connect, and support each other online.
        </Paragraph>
      </TextContainer>
      <VibzBtn href="https://t.me/+BUAL72IzxftkZDJk">
        Join the community
      </VibzBtn>
    </MainContainer>
  )
}

export default MissionComponent

const MainContainer = styled.div`
  padding: 0 10rem;
  margin: 15rem 0 15rem 0;

  @media (max-width: 900px) {
    padding: 0 2rem;
    margin: 15rem 0 10rem 0;
  }
`

const TextContainer = styled.div`
  width: 50vw;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const Heading = styled.h2`
  font-size: 5.5rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
`
const Paragraph = styled.p`
  font-size: 2.6rem;
  margin-bottom: 8rem;
  line-height: 3.6rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    line-height: 2.5rem;
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
  padding: 2.1rem 5.5rem;
  border: 0.8rem solid var(--primary-red);
  transition: all 0.3s ease;

  &:hover,
  &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    font-size: 3rem;
    padding: 0.9rem 2.6rem;
    margin: 0 auto;
  }
`
