import React from "react"
import styled from "styled-components"

const AboutComponent = () => {
  return (
    <MainContainer>
      <FlexContainer>
        <ImageContainer>
          <Image src="/images/aboutLizard.png" alt="about-image" />
        </ImageContainer>
        <TextContainer>
          <AboutTitle>About</AboutTitle>
          <AboutParagraph>
            Vibz is a hippie chamelion that loves flowers, tie-dye and good
            vibes.
          </AboutParagraph>
          <AboutParagraph>
            He used to be such a jolly fellow, carefree and with a sunny spirit.
            But lately the world has grown darker, and his smile has faded as he
            sees how people treat each other, particularly online. Too much
            hate, too little love.
          </AboutParagraph>
          <AboutParagraph>
            It is time to act. Join the movement and help Vibz in his mission,
            making the world a better place. Spread the word of love, and earn
            tokens ($VIBZ) on the way.
          </AboutParagraph>
        </TextContainer>
      </FlexContainer>
      <Quote>
        <p>
          I used to be a tie guy. <br />
          Now I'm more of a tie-dye guy.
        </p>
      </Quote>
    </MainContainer>
  )
}

export default AboutComponent

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10rem;

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    width: fit-content;
    margin: 0 auto;
    padding-top: 6rem;
  }
`

const Image = styled.img`
  width: 42.7rem;
  height: auto;
  max-width: 100%;

  @media (max-width: 900px) {
    width: 34rem;
  }
`

const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`

const AboutTitle = styled.h2`
  font-size: 5.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-top: 10rem;

  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
`

const AboutParagraph = styled.p`
  font-size: 2.6rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 2.2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Quote = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 17rem;

  p {
    font-size: 7rem;
    font-family: "de-augusta";
    color: var(--primary-blue);
    text-align: center;
    line-height: 1.2;

    @media (max-width: 900px) {
      font-size: 4.3rem;
      margin-top: 0;
    }
  }
`
