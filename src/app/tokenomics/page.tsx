"use client"

import MainContainer from "@/components/layout/MainContainer"
import MenuComponent from "@/components/MenuComponent"

import styled from "styled-components"

export default function TokenomicsPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <MenuComponent />
        </HeroContent>
        <BackgroundImage>
          <Heading>Tokenomics</Heading>
          <VibzBtn>$Vibz</VibzBtn>
        </BackgroundImage>
      </Hero>
      <MainContainer>
        <ContentContainer>
          <StyledImageContainer>
            <StyledImage src="/images/rocket.png" />
          </StyledImageContainer>
          <TextContainer>
            <h3>Fair launch</h3>
            <p>
              We believe in fairness, transparency and community ownership. The
              launch of $VIBZ token reflects these core values perfectly through
              a fair distribution model with no allocations reserved for VCs or
              private sales. This approach aligns with our mission of
              incentivizing love on the Internet and building a genuinely
              community-driven platform where every participant has equal
              opportunity to participate from day one.
            </p>
          </TextContainer>
        </ContentContainer>
        <ContentContainer>
          <TextContainer>
            <h3>Token</h3>
            <p>
              Vibz's tokenomics model and app economy is designed to create
              sustainable growth and value for all stakeholders in our
              ecosystem. A fair launch model is also what best serves our app
              from an incentivization perspective. The $VIBZ token will be
              launched on Solana, as a standard Solana fungible SPL token, and
              is intended to eventually serve as a utility token in the Vibz
              ecosystem. With a total supply of 1 billion tokens, we've
              structured the distribution to align interests and foster
              long-term engagement.
            </p>
          </TextContainer>
          <StyledImageContainer>
            <StyledImage className="coin" src="/images/coin.png" />
          </StyledImageContainer>
        </ContentContainer>
        <StretchContentContainer>
          <StretchTextContainer>
            <StretchHeadingWrapper>
              <StretchHeading>Tokenomics and Distribution</StretchHeading>
            </StretchHeadingWrapper>
            {/* <StyledUl>
              <li>40% for public sale.</li>
              <li>30% for liquidity pool. (DEX, CEX)</li>
              <li>15% for ecosystem growth.</li>
              <li>10% for team allocation (locked for 1 year).</li>
              <li>5% for community rewards and giveaways.</li>
            </StyledUl> */}
            <p>
              The majority of tokens will be made through an open public sale,
              ensuring fair distribution and broad participation, with pricing
              adjusted to reflect market conditions, ensuring fair distribution
              and broad participation. The token price will be fixed to be a
              fair launch. A dedicated portion of tokens is reserved for
              platform users, rewarding engagement, content creation and
              contribution to our AI-powered social media ecosystem. This
              creates a virtuous cycle where active participation directly
              translates to value creation. To ensure long-term commitment and
              alignment of interests, core and associate team members receive
              tokens as incentives, driving continuous innovation, contributions
              and platform development. These are resources such as community
              managers, associate developers and similar.
            </p>
          </StretchTextContainer>
        </StretchContentContainer>
        <ContentContainer>
          <StyledImageContainer>
            <StyledImage src="/images/piechart.png" />
          </StyledImageContainer>
          <TextContainer>
            <StretchHeading>Token Distribution</StretchHeading>
            <StyledPieChartUl>
              <li>Public Sale 40%</li>
              <li>Liquidity Pool 30%</li>
              <li>Ecosystem Growth 15%</li>
              <li>Team Allocation 10%.</li>
              <li>Community Rewards 5%</li>
            </StyledPieChartUl>
          </TextContainer>
        </ContentContainer>
        <StretchContentContainer>
          <StretchTextContainer>
            <StretchHeadingWrapper>
              <StretchHeading>Strategic Incentivization</StretchHeading>
            </StretchHeadingWrapper>
            <p>
              $Vibz´s token allocation strategy is fundamental to the platform's
              success. By reserving tokens for user and team incentivization, we
              create powerful motivators for users, content creators and key
              contributors. This approach:
            </p>

            <StyledUlWithMargin>
              <li>
                Encourages quality content creation and positive interactions
              </li>
              <li>
                Attracts and retains talented team and associated team members
              </li>
              <li>Builds a strong, engaged community</li>
              <li>Drives sustainable platform growth</li>
            </StyledUlWithMargin>
            <p className="margin-bottom-p">
              This balanced tokenomics model ensures that as our ecosystem
              grows, all token holders benefit from the increased network
              effects and value created in the platform.
            </p>
          </StretchTextContainer>
        </StretchContentContainer>
      </MainContainer>
    </>
  )
}

const StyledImageContainer = styled.div`
  width: 42rem;

  @media (max-width: 900px) {
    width: 30rem;
  }
`

const TextContainer = styled.div`
  width: calc(100% - 42rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

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

  @media (max-width: 1100px) {
    h3 {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    p {
      font-size: 2rem;
    }
    h3 {
      font-size: 4rem;
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  @media (max-width: 470px) {
    p {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }
`

const ContentContainer = styled.section`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
  align-items: center;
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

    &:nth-child(even) {
      ${TextContainer} {
        order: 1;
      }
      ${StyledImageContainer} {
        order: 2;
      }
    }
  }
`

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
  background-image: url("/images/tokenomics_background.jpg");
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

  @media (max-width: 1100px) {
    font-size: 9rem;
  }

  @media (max-width: 900px) {
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
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

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  object-fit: cover;

  &.coin {
    object-fit: contain;
  }
`

const StyledUl = styled.ul`
  padding: 0 1rem;
  margin-bottom: 4rem;
  list-style-position: inside;

  li {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    li {
      font-size: 2rem;
    }
  }
`
const StretchHeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;

  @media (max-width: 900px) {
    width: auto;
  }
`

const StretchHeading = styled.h3`
  font-size: 5.5rem;
  font-weight: 400;
  color: var(--primary-red);
  font-family: "climate crisis";
  margin-bottom: 3.6rem;

  @media (max-width: 1100px) {
    font-size: 5rem;
  }

  @media (max-width: 900px) {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 470px) {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`
const StretchContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
  padding: 0 2rem;

  @media (max-width: 900px) {
    margin-top: 8rem;
  }
`
const StretchTextContainer = styled(TextContainer)`
  width: 100%;
  text-align: center;

  p {
    padding: 0 1rem;
  }
  .margin-bottom-p {
    margin-bottom: 25rem;
  }
`

const StyledPieChartUl = styled.ul`
  padding: 0;
  margin-bottom: 4rem;
  list-style: none;

  li {
    text-align: left;
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--primary-red);
    display: flex;
    align-items: center;

    &:before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    &:nth-child(1):before {
      background-color: #4caf50;
    }

    &:nth-child(2):before {
      background-color: #2196f3;
    }

    &:nth-child(3):before {
      background-color: #ffc107;
    }

    &:nth-child(4):before {
      background-color: #f44336;
    }

    &:nth-child(5):before {
      background-color: #9c27b0;
    }
  }

  @media (max-width: 900px) {
    li {
      font-size: 2rem;
    }
  }
`
const StyledUlWithMargin = styled.ul`
  padding: 0;
  margin: 4rem;
  list-style-position: inside;

  li {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    li {
      font-size: 2rem;
    }
  }
`
