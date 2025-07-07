import Link from "next/link"
import React from "react"
import styled from "styled-components"

const HowToBuyComponent = () => {
  return (
    <MainContainer>
      <Heading>How to buy</Heading>
      <ButtonContainer>
        <p>Contact adress to come</p>
        <FrameContainer>
          <Frame src="/images/Frame.png" alt="Frame" />
        </FrameContainer>
      </ButtonContainer>
      <ItemsContainer>
        <Item>
          <SubHeading>Create a wallet</SubHeading>
          <Paragraph>
            Download a crypto wallet to buy and store your tokens. We recommend
            Phantom.
          </Paragraph>
        </Item>
        <Item>
          <SubHeading>Add funds</SubHeading>
          <Paragraph>
            Buy SOL in Phantom or transfer SOL from a central Exchange like
            Binance or Coinbase.
          </Paragraph>
        </Item>
        <Item>
          <SubHeading>Swap on a DEX</SubHeading>
          <Paragraph>
            Swap SOL for VIBZ. Do that directly in Phantom or go to the Raydium
            exchange. Make sure to check that the contract address is the same
            as on this page, not just the name of the coin, in order to get the
            right token.
          </Paragraph>
        </Item>
        <Item>
          <SubHeading>Join the love revolution</SubHeading>
          <Paragraph>
            Complete the swap, and your tokens are safe in your wallet. Now,
            consider joining our{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href="https://t.me/+BUAL72IzxftkZDJk"
            >
              community here
            </Link>
            . This is a together thing.
          </Paragraph>
        </Item>
      </ItemsContainer>
    </MainContainer>
  )
}

export default HowToBuyComponent

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 18rem;

  @media (max-width: 900px) {
    margin-bottom: 12rem;
  }
`

const Heading = styled.h2`
  font-size: 5.5rem;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 3.3rem;
    margin-bottom: 2.9rem;
  }
`

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 7.5rem;
  background-color: var(--primary-yellow);
  color: var(--primary-red);
  border: solid 4px var(--primary-red);
  border-radius: 5.5rem;
  font-size: 2.6rem;
  font-weight: 400;
  padding: 0 18rem;
  position: relative;
  margin-bottom: 2rem;
  p {
    font-size: 2.6rem;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    width: 33rem;
    padding: 0;
    justify-content: space-between;

    p {
      font-size: 1.6rem;
      margin-left: 4rem;
    }
  }
`

const FrameContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 3.2rem;

  @media (max-width: 900px) {
    top: 1.7rem;
  }
`

const Frame = styled.img`
  width: 4.6rem;

  @media (max-width: 900px) {
    width: 3.4rem;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 90rem;

  @media (max-width: 900px) {
    margin-top: 5rem;
    padding: 0 3rem;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const SubHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-red);

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`

const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`
