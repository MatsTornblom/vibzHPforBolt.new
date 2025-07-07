"use client"

import MainContainer from "@/components/layout/MainContainer"
import Hero from "@/components/layout/Hero"
import styled from "styled-components"
import HeroComponent from "@/components/HeroComponent"
import ImageComponent from "@/components/ImageComponent"
import AboutComponent from "@/components/AboutComponent"
import MissionComponent from "@/components/MissionComponent"
import RoadMapComponent from "@/components/RoadMapComponent"
import FullSizeImageComponent from "@/components/FullSizeImageComponent"
import DistributionComponent from "@/components/DistributionComponent"
import HowToBuyComponent from "@/components/HowToBuyComponent"
export default function Home() {
  return (
    <main>
      <Hero>
        <HeroComponent />
      </Hero>
      <MainContainer>
        <ContentSection>
          <AboutComponent />
          <MissionComponent />
          <ImageComponent />
          <RoadMapComponent />
          <FullSizeImageComponent />
          <DistributionComponent />
          <HowToBuyComponent />
        </ContentSection>
      </MainContainer>
    </main>
  )
}

const ContentSection = styled.section`
  padding: 3rem 0 0 0;
`

const ContentTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
`

const ContentParagraph = styled.p`
  margin-top: 1rem;
`
