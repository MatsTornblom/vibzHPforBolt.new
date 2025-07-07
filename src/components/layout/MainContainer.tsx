import styled from "styled-components"
import GlobalButton from "../GlobalChatButton"
import FooterComponent from "../FooterComponent"
export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledContainer>
      <GlobalButton />
      {children}
      <FooterComponent />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
`
