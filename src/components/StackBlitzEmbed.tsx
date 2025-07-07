import React from "react"
import styled from "styled-components"

interface Props {
  isOpen: boolean
}

const StackBlitzEmbed: React.FC<Props> = ({ isOpen }) => {
  const [isLoading, setIsLoading] = React.useState(true)

  if (!isOpen) return null

  return (
    <Container>
      <LoadingText $isVisible={isLoading}>
        Waiting for Vibz to answer...
      </LoadingText>
      <StackBlitzContainer
        src="https://vibzchatbot.netlify.app/"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        $isLoading={isLoading}
      ></StackBlitzContainer>
    </Container>
  )
}

export default StackBlitzEmbed

const Container = styled.div`
  position: fixed;
  right: 6rem;
  bottom: 14rem;
  width: 45rem;
  height: 60rem;
  z-index: 999;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 100vw;
    height: 89vh;
    right: 0;
    top: 0;
  }
`
const StackBlitzContainer = styled.iframe<{ $isLoading: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  display: ${(props) => (props.$isLoading ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
  background: black;
`

const LoadingText = styled.div<{ $isVisible: boolean }>`
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "de-augusta", sans-serif;
  color: var(--primary-red);
  font-size: 2.6rem;
  display: ${(props) => (props.$isVisible ? "block" : "none")};

  transition: opacity 0.3s ease-in-out;
  z-index: 2;
`
