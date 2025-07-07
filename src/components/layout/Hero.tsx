import styled from "styled-components"

const StyledHero = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export default function Hero({ children }: { children: React.ReactNode }) {
  return <StyledHero>{children}</StyledHero>
}
