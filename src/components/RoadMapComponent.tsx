import Link from "next/link"
import React from "react"
import styled from "styled-components"

const RoadMapComponent = () => {
  return (
    <OuterContainer>
      <MainContainer>
        <NoFudSign>
          <SignImg src="/images/noFudSign.png" alt="No FUD Sign" />
        </NoFudSign>
        <HippieVan>
          <HippieVanImg src="/images/hippieVan.png" alt="Hippie Van" />
        </HippieVan>
        <HeadingContainer>
          <Heading>Roadmap</Heading>
        </HeadingContainer>
        <Qoutes>
          <Qoute>
            <HeartImage
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 103 90"
            >
              <path
                fill="currentColor"
                d="M50.989 14.398C57.703 7.4 62.405 1.349 72.749.168c19.421-2.23 37.284 17.65 27.476 37.218-2.79 5.573-29.295 32.844-34.643 38.149L50.997 90 38.944 78.4C24.441 64.439.795 46.865.017 25.091-.528 9.84 11.509.067 25.356.243 37.728.41 42.933 6.562 50.989 14.398Z"
              />
              <path
                className="number"
                d="M53.475 64.8c-2.5 0-4.9-.9-5.15-2.8-.2-1.2-.25-2.8-.25-4.65 0-6.95 1.05-17.3 1.7-21.2-1.05.7-2.1.95-3.1.95-2.5 0-4.55-1.8-4.55-3.5l.05-.45c3.6-1.1 6.45-3.25 8.8-8.05.5-1 1.65-1.4 3-1.4 2.45 0 5.35 1.45 5.35 3.55 0 .25 0 .5-.1.75-1.55 4.75-2.2 10.1-2.2 15.45 0 5.9.8 11.8 2.25 16.9.1.3.1.6.1.85 0 2.35-3 3.6-5.9 3.6Z"
              />
            </HeartImage>
            <QouteHeading>Project launch</QouteHeading>
            <QouteText>
              We have planned this little love project for two years and now we
              are finally spreading our wings.
            </QouteText>
          </Qoute>
          <Qoute>
            <HeartImage
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 103 90"
            >
              <path
                fill="currentColor"
                d="M50.989 14.398C57.703 7.4 62.405 1.349 72.749.168c19.421-2.23 37.284 17.65 27.476 37.218-2.79 5.573-29.295 32.844-34.643 38.149L50.997 90 38.944 78.4C24.441 64.439.795 46.865.017 25.091-.528 9.84 11.509.067 25.356.243 37.728.41 42.933 6.562 50.989 14.398Z"
              />
              <path
                className="number"
                d="M49.604 64.7c-5.7 0-11.65-.55-12.3-2.8-.3-1.05-.45-2.05-.45-2.95 0-8.6 11.75-12.9 18.25-20.35 1.75-2.05 2.5-4.15 2.5-5.95 0-2.5-1.4-4.3-3.5-4.3-.95 0-2.05.4-3.25 1.25-1.55 1.1-2.5 3.2-2.5 5.15 0 1.45.55 2.8 1.8 3.55-1.05 1.7-3.05 2.6-5.05 2.6-3.3 0-6.75-2.35-6.75-7.3l.05-.8c.4-5.35 6.3-9.65 13-9.65 2.65 0 5.35.65 7.95 2.15 4.1 2.4 6.3 6.95 6.3 11.5 0 3.55-1.3 7.05-4.1 9.5-6.35 5.65-16.65 7.05-16.65 11.75v.4l.8.05c3.4 0 11.4-1.45 13.65-3.85.45-.5.95-.7 1.4-.7 1.3 0 2.6 1.55 3.05 3.6.1.5.15 1.05.15 1.6 0 2.35-1.1 4.75-3.95 5.05-1.4.15-5.85.5-10.4.5Z"
              />
            </HeartImage>
            <QouteHeading>Build platform</QouteHeading>
            <QouteText>
              We got a great vision for our platform and have already started
              building. Help us out or just cheer us on.
            </QouteText>
          </Qoute>
          <Qoute>
            <HeartImage
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 103 90"
            >
              <path
                fill="currentColor"
                d="M50.989 14.398C57.703 7.4 62.405 1.349 72.749.168c19.421-2.23 37.284 17.65 27.476 37.218-2.79 5.573-29.295 32.844-34.643 38.149L50.997 90 38.944 78.4C24.441 64.439.795 46.865.017 25.091-.528 9.84 11.509.067 25.356.243 37.728.41 42.933 6.562 50.989 14.398Z"
              />
              <path
                className="number"
                d="M48.397 65.25c-.55 0-1.1-.05-1.65-.1-5.5-.7-8.15-4.5-8.15-7.75 0-1.8.8-3.4 2.35-4.25 1.1 2.3 3.65 3.3 6.35 3.3 3.5 0 7.15-1.65 8.3-4.3.15-.35.2-.7.2-.95 0-.95-.85-1.3-2.05-1.3-1.6 0-3.8.65-5.25 1.3-.45.2-.85.3-1.25.3-2.25 0-3.8-2.7-3.8-5.05 0-1.45.65-2.8 2.15-3.2 4.45-1.2 8-4.5 9.95-7.75 1.1-1.9 1.55-3.5 1.55-4.75 0-2.2-1.4-3.4-3.15-3.4-1.6 0-3.5 1-4.85 3.1-.75 1.15-1.2 2.45-1.2 3.6 0 1.55.8 2.8 2.6 3-.7 1.7-2.7 2.6-4.8 2.6-2.7 0-5.65-1.5-6.5-4.7-.15-.65-.25-1.3-.25-1.95 0-5.3 5.3-10.4 13.15-10.4l1.8.1c5.9.55 10.1 4.85 10.1 9.8 0 2.3-.9 4.7-2.95 6.95-2.25 2.45-5.55 4.75-9 5.75-.1 0-.15.1-.15.2s.1.2.2.2l1.6-.05c6.25 0 9.6 2.55 9.6 6.8l-.1 1.15c-.95 6.9-8.25 11.75-14.8 11.75Z"
              />
            </HeartImage>
            <QouteHeading>Community growth</QouteHeading>
            <QouteText>
              Share good vibes! Help us create the most loving community on the
            </QouteText>
            <StyledLink href="https://t.me/+BUAL72IzxftkZDJk">
              Join us here!
            </StyledLink>
          </Qoute>
          <Qoute>
            <HeartImage
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 103 90"
            >
              <path
                fill="currentColor"
                d="M50.989 14.398C57.703 7.4 62.405 1.349 72.749.168c19.421-2.23 37.284 17.65 27.476 37.218-2.79 5.573-29.295 32.844-34.643 38.149L50.997 90 38.944 78.4C24.441 64.439.795 46.865.017 25.091-.528 9.84 11.509.067 25.356.243 37.728.41 42.933 6.562 50.989 14.398Z"
              />
              <path
                className="number"
                d="M58.205 65.95c-2.25 0-4.35-.75-4.55-2.45l-.05-1.35c0-1.9.2-4.35.2-7.25v-1.25c-3.25.35-8.55 3.75-9.25 3.8h-.15c-3.55 0-8-5.6-8-8.4 0-.25.05-.45.1-.65 1.85-5.1 7.95-12.75 8.3-22.1.05-1 .7-1.4 1.65-1.4 2.4 0 6.75 2.95 6.75 6.95 0 1.2-.4 2.45-1.35 3.8-2.9 4.1-7.25 8.7-7.25 11.05 0 .2 0 .4.1.6.6 1.25 2.7 1.4 5.65 1.4h3.75c.35-3.5 1.25-21.9 1.9-23.3.45-.95 1.75-1.35 3.2-1.35 2.6 0 5.7 1.25 5.7 3 0 .15 0 .3-.05.45-1.6 5.3-2.35 13.3-2.35 20.85 0 5.45.4 10.65 1.15 14.35l.05.35c0 1.85-2.85 2.9-5.5 2.9Z"
              />
            </HeartImage>
            <QouteHeading>Love revolution</QouteHeading>
            <QouteText>
              Are we dreamers? Perhaps, but every good vibe, every kind word,
              every smile is worth the effort.
            </QouteText>
          </Qoute>
        </Qoutes>
        <ContributionContainer>
          <p>
            Want to volunteer? We are looking for devs, prompters, animators and
            more. Join us, it will be fun!
          </p>
        </ContributionContainer>
        <ButtonContainer>
          <VibzBtn href="https://t.me/+SCwEYp7Y2XYxOWM8">
            Join builders community
          </VibzBtn>
        </ButtonContainer>
      </MainContainer>
    </OuterContainer>
  )
}

export default RoadMapComponent

const OuterContainer = styled.div`
  --bg: var(--primary-red);
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: var(--bg);
  margin-top: 30rem;
`

const MainContainer = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`

const NoFudSign = styled.div`
  position: absolute;
  top: -19rem;
  z-index: 1;
  left: 2rem;

  @media (max-width: 900px) {
    top: -6rem;
    left: 1rem;
  }
`

const SignImg = styled.img`
  width: 20rem;
  height: 20rem;
  clip-path: inset(0 0 1rem);

  @media (max-width: 900px) {
    width: 6.9rem;
    height: 6.9rem;
    clip-path: inset(0 0 0.9rem);
  }
`
const HippieVan = styled.div`
  position: absolute;
  top: -35rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 900px) {
    top: -19rem;
  }
`

const HippieVanImg = styled.img`
  width: 55rem;
  height: 57rem;

  @media (max-width: 900px) {
    width: 26.2rem;
    height: 28.2rem;
  }
`

const HeadingContainer = styled.div`
  padding-top: 8rem;

  @media (max-width: 900px) {
    padding-top: 12rem;
    padding-bottom: 4rem;
  }
`

const Heading = styled.h2`
  font-size: 5.5rem;
  color: var(--primary-yellow);
  text-align: left;

  @media (max-width: 900px) {
    font-size: 3.3rem;
  }
`

const Qoutes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 8rem;

  @media (max-width: 900px) {
    margin-top: 4rem;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`

const Qoute = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2.5rem;
  color: var(--primary-yellow);
`

const HeartImage = styled.svg`
  display: block;
  width: 10rem;
  height: 10rem;
  margin-bottom: 3rem;

  .number {
    fill: var(--bg);
  }
`

const QouteHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-yellow);
  line-height: 2.8rem;
`

const QouteText = styled.p`
  font-size: 2rem;
  color: var(--primary-yellow);
  line-height: 2.8rem;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`

const ContributionContainer = styled.div`
  margin-top: 8rem;
  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    text-align: center;
    color: var(--primary-yellow);

    @media (max-width: 900px) {
      font-size: 1.8rem;
    }
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.6rem;
  padding-bottom: 8rem;

  @media (max-width: 900px) {
    padding-top: 4rem;
  }
`

const VibzBtn = styled(Link)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 0 4rem;
  background-color: var(--primary-yellow);
  color: var(--primary-red);
  border: none;
  border-radius: 5.5rem;
  font-size: 5rem;
  font-weight: 400;
  font-family: "de-augusta";

  padding: 2.1rem 4.6rem;
  border: 0.8rem solid var(--primary-yellow);
  transition: all 0.3s ease;

  &:hover,
  &:focus-visible {
    background: var(--primary-red);
    color: var(--primary-yellow);
  }

  @media (max-width: 900px) {
    font-size: 3rem;
    padding: 0.9rem 2.6rem;
  }
`
const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--primary-yellow);
  line-height: 2.8rem;
  font-weight: 400;
  text-decoration: underline;
  margin-top: 0.3rem;
`
