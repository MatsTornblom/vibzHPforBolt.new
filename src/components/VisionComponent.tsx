import React from "react"
import styled from "styled-components"

const VisionComponent = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Section>
          <SectionTitle>The community</SectionTitle>
          <SectionText>
            We are building a digital product, but that is just one piece of the
            puzzle. <br />
            <br />
            Where traditional solutions are formed around capital and companies,
            we base what we do on values, people, and community. We believe a
            more compassionate internet is only possible through a community
            driven approach. As founders, we will kickstart the community, but
            the goal is for it to grow into a self-sustaining entity where we we
            are members, not leaders. <br />
            <br />
            We can shape a better digital world - together. Join us!
          </SectionText>
        </Section>

        <CommunityLink href="https://t.me/+BUAL72IzxftkZDJk">
          Join the community
        </CommunityLink>

        <Section>
          <SectionTitle>End user value proposition</SectionTitle>
          <SectionText>
            Giving and receiving love and appreciation, made fun with
            gamification, encouraging the ability to create and to monetize on
            the platform activities, while doing so in the context of a loving
            community. This is our end user value. <br />
            <br />
            Our early experiments and demo products indicate that we have a
            digital solution that will do all of this.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Target audience</SectionTitle>
          <SectionText>
            We see every human as a potential user of our solution. You. Your
            partner. Your granny. Your neighbour. It's universal - everybody
            loves giving and getting messages of love. <br />
            <br />
            We are designing the solution with this in mind. Super simple. One
            click to get started. No crypto hassle. No complicated AI prompting.{" "}
            <br />
            <br />
            Just loving, fun and simple.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Core Team and Company</SectionTitle>
          <SectionText>
            The Love Project rests on four pillars: technology solutions, Web3
            incentivization, marketing, and community engagement.
            <br />
            <br />
            <BoldText>Technology and Solution</BoldText>
            <br />
            - Our CTO, a seasoned IT architect and developer, has designed and
            built digital solutions for 30 years. He is also the visionary
            behind the project.
            <br />
            <br />
            <BoldText>Web3 and App Economy</BoldText>
            <br />
            - Our tokenomics and Web3 expert brings experience from multiple
            web3 projects of his own. As our business development lead, he
            manages external partnerships and business relations.
            <br />
            <br />
            <BoldText>Marketing and Development</BoldText>
            <br />
            - Our CMO runs an established marketing agency of 30+ professionals.
            He and his team help us reach our audience and tell our story.
            <br />
            <br />
            <BoldText>Community</BoldText>
            <br />
            - We maintain transparency by engaging in our community directly.
            When you join, you will interact with our core team members who work
            daily on the project - no outsourced community management.
            <br />
            <br />
            <BoldText>LoveLabs</BoldText> - Its name is a fusion of our
            aspirations and expertise. Behind the company stands a team of
            industry-leading professionals, united by a singular vision: to
            transform how we interact in the digital age.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Financing</SectionTitle>
          <SectionText>
            We will be bootstrapping the initiative through our own hard work
            and an open token sale to the community. See our tokenomics. We may
            also accept grants from other tech projects.We will not use VC
            financing as we believe this doesn´t align to the project's values.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Values</SectionTitle>
          <SectionText>
            The Love Project is ultimately about values. <br />
            <br />
            We believe in transparency, honesty and community. We care about our
            users and focus on the vision that our platform should make the
            world better, not worse. This is central, as it is what
            differentiates us from the dominating social media platforms. The
            project is initiated in northern Europe, and we confess to the
            traditional Scandinavian values of transparency, equality and
            fairness. We are not naive, as Web3 OGs we know the tech world is a
            minefield with regards to values of its actors. We navigate this to
            the best of our abilities, but acknowledge the challenge in this.
          </SectionText>
        </Section>

        <FooterSection>
          <FooterText>
            Thank you and see you in The Love Project friends.
            <br />
            The Love Project Team
          </FooterText>
        </FooterSection>
      </ContentContainer>
    </MainContainer>
  )
}

export default VisionComponent

const MainContainer = styled.div`
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`

const Section = styled.div`
  margin-bottom: 4rem;
`

const SectionTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--primary-blue);

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`

const SectionText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--text-color);

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`

const BoldText = styled.span`
  font-weight: bold;
  color: var(--primary-blue);
`

const CommunityLink = styled.a`
  display: inline-block;
  background-color: var(--primary-blue);
  color: var(--primary-yellow);
  padding: 1.5rem 3rem;
  border-radius: 5rem;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 2rem 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-yellow);
    color: var(--primary-blue);
  }

  @media (max-width: 900px) {
    font-size: 1.6rem;
    padding: 1rem 2rem;
  }
`

const FooterSection = styled.div`
  margin-top: 6rem;
  text-align: center;
`

const FooterText = styled.p`
  font-size: 2rem;
  color: var(--primary-blue);
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`
