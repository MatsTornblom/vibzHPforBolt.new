import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getScreenSize } from "../utils/getScreenSize"
import Link from "next/link"

const DistributionComponent = () => {
  const screenSize = getScreenSize()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-03-18T00:00:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <MainContainer>
      <ContentContainer>
        <ImageContainer>
          <Image src="/images/coin.png" alt="coin" />
        </ImageContainer>
        <TextContainer $screenSize={screenSize}>
          <Heading>
            <h2>Token Distribution</h2>
          </Heading>
          <List>
            <ListItem>
              <p>40% for public sale.</p>
            </ListItem>
            <ListItem>
              <p>30% for liquidity pool. (DEX,CEX)</p>
            </ListItem>
            <ListItem>
              <p>15% for ecosystem growth.</p>
            </ListItem>
            <ListItem>
              <p>10% for team allocation (locked for 1 year).</p>
            </ListItem>
            <ListItem>
              <p>5% for community rewards and giveaways.</p>
            </ListItem>
          </List>
          <ButtonContainer>
            {/* <CountdownContainer>
              <CountdownText>
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                {timeLeft.seconds}s
              </CountdownText>
            </CountdownContainer> */}
          </ButtonContainer>
        </TextContainer>
      </ContentContainer>
    </MainContainer>
  )
}

export default DistributionComponent

const MainContainer = styled.div`
  margin-top: 10rem;
  padding: 0 8rem;

  @media (max-width: 900px) {
    margin-top: 32rem;
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`

const Heading = styled.div`
  font-size: 4rem;
  font-weight: 400;
  color: var(--primary-red);
  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 3.5rem;
      text-align: center;
      margin-bottom: 5rem;
    }
  }
`

const ImageContainer = styled.div`
  margin-top: -25rem;
`

const Image = styled.img`
  width: 30rem;

  @media (max-width: 900px) {
    width: 22.9rem;
  }
`

const TextContainer = styled.div<{ $screenSize: number }>`
  @media (max-width: 1300px) {
    margin-left: 5rem;
  }

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const List = styled.ul`
  line-height: 2.8rem;
  margin: 5rem 0 5rem 2rem;

  @media (max-width: 900px) {
    margin-left: 4.5rem;
  }
`

const ListItem = styled.li`
  font-size: 2rem;
  font-weight: 400;
  color: var(--primary-red);

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
  margin-left: -1.5rem;
  padding-bottom: 25rem;

  @media (max-width: 900px) {
    padding-top: 1rem;
    padding-bottom: 14rem;
  }
`

const CountdownContainer = styled.div`
  width: 39rem;
  height: 11rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-red);
  border-radius: 5.5rem;

  @media (max-width: 900px) {
    margin: 0 auto;
    width: 25rem;
    height: 6.3rem;
  }
`

const CountdownText = styled.div`
  color: var(--primary-yellow);
  font-size: 4rem;
  font-weight: 400;
  font-family: "de-augusta";

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`
