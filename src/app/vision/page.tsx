// VisionPage.js - updated with customers own code.

"use client"

import MenuComponent from "@/components/MenuComponent"
import MainContainer from "@/components/layout/MainContainer"

import Link from "next/link"
import styled, { keyframes } from "styled-components"

export default function VisionPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <MenuComponent />
        </HeroContent>
        <BackgroundImage>
          <Heading>Vision</Heading>
          <VibzBtn>$Vibz</VibzBtn>
        </BackgroundImage>
      </Hero>
      <MainContainer>
        <Section>
          <StyledImageContainer>
            <StyledImage src="/images/vision_fud_sign.png" />
          </StyledImageContainer>
          <TextContainer>
            <h3>The Problem</h3>
            <p>
              There is so much love in the world. Way more love than hate. Yet
              the digital world we live in is disturbingly toxic, fuelled by
              controversy, polarization, hate and anger. <br />
              <br /> This is because the algorithms the tech giants use to
              create engagement perpetuate "short emotions" - hate, greed, envy,
              anger. FUD (fear, uncertainty and doubt) is the fuel that powers
              these platforms. <br />
              <br />
              And worse, the hate that fuels the digital economy is increasingly
              forming the physical world. <br />
              <br />
              Humanity needs to fix this. Love is the solution.
            </p>
          </TextContainer>
        </Section>
        <Section>
          <TextContainer>
            <h3>The Vision</h3>
            <p>
              We know it is possible to build attractive digital solutions that
              encourage and incentivize love on the Internet. <br />
              <br />
              This is what our initiative, The Love Project, is about. We aim to
              make the Internet a place that is a little more loving. <br />
              <br />
              Are we dreamers? Not really, the time is already here when people
              are starting to turn their backs on oligarch-controlled,
              hate-mongering social media. People are ready for an alternative,
              whether they realize it or not. <br />
              <br />
              Our goal is to be that alternative.
            </p>
          </TextContainer>
          <StyledImageContainer>
            <StyledImage src="/images/vision_love.png" />
          </StyledImageContainer>
        </Section>
        <Section className="last-section">
          <StyledImageContainer>
            <StyledImage src="/images/vision_lizard.png" />
          </StyledImageContainer>
          <TextContainer>
            <h3>The Solution</h3>
            <p>
              We are building a media centric social media platform called Vibz
              World that incentivizes love on the Internet using AI content
              creation and web3 mechanisms such as cryptocurrencies,
              tokenization and gamification. <br />
              <br />
              The solution will be launched in phases. The product featured in
              the first phase is a P2P messaging solution designed to serve as a
              vehicle for building a user base, a community, an ecosystem and
              bootstrap network effect. In later phases we will use the acquired
              user base and network effect to grow the solution into a more
              traditional social media - but with positive vibz.
            </p>
          </TextContainer>
        </Section>
        <CenterdSection>
          <Section>
            <TextContainer>
              <h3>The community</h3>
              <p>
                We are building a digital product, but that is just one piece of
                the puzzle.
                <br />
                <br />
                Where traditional solutions are formed around capital and
                companies, we base what we do on values, people, and community.
                We believe a more compassionate internet is only possible
                through a community driven approach. As founders, we will
                kickstart the community, but the goal is for it to grow into a
                self-sustaining entity where we are members, not leaders.
                <br />
                <br />
                We can shape a better digital world - together. Join us!
              </p>
              <StyledLinkContainer>
                <StyledLink
                  href="https://t.me/+BUAL72IzxftkZDJk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the community
                </StyledLink>
              </StyledLinkContainer>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer>
              <h3>End user value proposition</h3>
              <p>
                Giving and receiving love and appreciation, made fun with
                gamification, encouraging the ability to create and to monetize
                on the platform activities, while doing so in the context of a
                loving community.
                <br />
                <br />
                Our early experiments and demo products indicate that we have a
                digital solution that will do all of this.
              </p>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer>
              <h3>Target audience</h3>
              <p>
                We see every human as a potential user of our solution. You.
                Your partner. Your granny. Your neighbour. It's universal -
                everybody loves giving and getting messages of love.
                <br />
                <br />
                We are designing the solution with this in mind. Super simple.
                One click to get started. No crypto hassle. No complicated AI
                prompting.
                <br />
                <br />
                Just loving, fun and simple.
              </p>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer>
              <h3>Core Team and Company</h3>
              <p>
                The Love Project rests on four pillars: technology solutions,
                Web3 incentivization, marketing, and community engagement.
                <br />
                <br />
                <strong>Technology and Solution</strong> - Our CTO, a seasoned
                IT architect and developer, has designed and built digital
                solutions for 30 years. He is also the visionary behind the
                project.
                <br />
                <br />
                <strong>Web3 and App Economy</strong> - Our tokenomics and Web3
                expert brings experience from multiple web3 projects of his own.
                As our business development lead, he manages external
                partnerships and business relations.
                <br />
                <br />
                <strong>Marketing and Development</strong> - Our CMO runs an
                established marketing agency of 30+ professionals. He and his
                team help us reach our audience and tell our story.
                <br />
                <br />
                <strong>Community</strong> - We maintain transparency by
                engaging in our community directly. When you join, you will
                interact with our core team members who work daily on the
                project - no outsourced community management.
                <br />
                <br />
                <strong>LoveLabs</strong> - Its name is a fusion of our
                aspirations and expertise. Behind the company stands a team of
                industry-leading professionals, united by a singular vision: to
                transform how we interact in the digital age.
              </p>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer>
              <h3>Financing</h3>
              <p>
                We will be bootstrapping the initiative through our own hard
                work and an open token sale to the community. See our
                tokenomics. We may also accept grants from other tech projects.
                We will not use VC financing as we believe this doesn't align to
                the project's values.
              </p>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer>
              <h3>Values</h3>
              <p>
                The Love Project is ultimately about values.
                <br />
                <br />
                We believe in transparency, honesty and community. We care about
                our users and focus on the vision that our platform should make
                the world better, not worse. This is central, as it is what
                differentiates us from the dominating social media platforms.
                The project is initiated in northern Europe, and we confess to
                the traditional Scandinavian values of transparency, equality
                and fairness.
                <br />
                <br />
                We are not naive, as Web3 OGs we know the tech world is a
                minefield with regards to values of its actors. We navigate this
                to the best of our abilities, but acknowledge the challenge in
                this.
              </p>
            </TextContainer>
          </Section>

          <Section>
            <TextContainer className="last-text-container">
              <p>
                Thank you and see you in The Love Project friends.
                <br />
                The Love Project Team
              </p>
            </TextContainer>
          </Section>
        </CenterdSection>
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
  background-color: var(--primary-red);
  background-image: url("/images/vision_background.jpg");
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
`

const VibzBtn = styled.button`
  position: absolute;
  bottom: -5.1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-blue);
  color: var(--primary-yellow);
  border: 0.8rem solid var(--primary-blue);
  border-radius: 5.5rem;
  font-size: 4.5rem;
  text-transform: uppercase;
  padding: 2.1rem 9.4rem;
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

const StyledImageContainer = styled.div`
  width: 42rem;
  @media (max-width: 900px) {
    width: 30rem;
  }
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  width: calc(100% - 42rem);
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
    width: 100%;
    p {
      font-size: 2rem;
    }
    h3 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  }
  &.last-text-container {
    margin-bottom: 15rem;
  }
`

const Section = styled.section`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 0 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-top: 8rem;
    ${TextContainer} {
      order: 1;
    }
    ${StyledImageContainer} {
      order: 2;
    }
  }
  &.last-section {
    margin-bottom: 15rem;
  }
`

const ImageBar = styled.div`
  background-color: var(--primary-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36rem;
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`

const ImageOne = styled.img`
  width: 35.8rem;
  height: 35.8rem;
  clip-path: inset(0 0 4.8rem);
  margin-right: 6rem;
  @media (max-width: 900px) {
    display: none;
  }
`

const ImageTwo = styled.img`
  width: 39.2rem;
  height: 40.1rem;
  @media (max-width: 900px) {
    left: 55%;
    transform: translateX(-50%);
  }
`

const shake = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.5); }
  43% { transform: rotate(8deg) scale(1.5); }
  46% { transform: rotate(-8deg) scale(1.5); }
  72% { transform: scale(1.5); }
  100% { transform: scale(1); }
`

const ChatButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`

const ChatIcon = styled.img`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    animation: ${shake} 0.8s ease-in-out forwards;
  }
  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    &:hover {
      animation: none;
      transform: scale(1);
    }
  }
`
const CenterdSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const StyledLinkContainer = styled.div`
  margin-top: 2.5rem;
`

const StyledLink = styled(Link)`
  font-size: 2.6rem;
  color: var(--primary-red);
  text-decoration: underline;

  border-radius: 1rem;
  &:hover {
    color: var(--primary-blue);
  }
`
