import Link from "next/link"
import React from "react"
import styled from "styled-components"

const FooterComponent = () => {
  return (
    <OuterContainer>
      <MainContainer>
        <ImageContainer>
          <ImageSign src="/images/signTwo.png" alt="Sign two" />
          <ImageLizard
            src="/images/lizardWithCoin.png"
            alt="Lizard with coin"
          />
        </ImageContainer>
        <SomeContainer>
          <LogoContainer>
            <StyledLink
              href="https://t.me/+BUAL72IzxftkZDJk"
              title="Message us on Telegram"
            >
              <Logo
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 63 57"
              >
                <path d="M50.844 1.073c3.07-.776 6.267-.95 8.933 1.17 2.666 2.122 3.215 5.277 3.15 8.441-.065 3.096-.749 7.131-1.581 12.04l-2.654 15.657c-.73 4.311-1.337 7.892-2.203 10.549-.9 2.757-2.318 5.294-5.2 6.51-2.883 1.216-5.69.461-8.292-.82-2.507-1.233-5.495-3.298-9.092-5.784l-7.62-5.264c-.445-.307-4.34-2.905-1.227-6.563 7.462-8.772 19.808-17.544 18.184-19.169-1.625-1.624-17.22 12.022-26.967 17.87-3.249 1.95-4.873 2.875-8.536 1.299-3.347-1.44-6.638-3.435-7.35-7.085a9.611 9.611 0 0 1-.144-2.635c.308-3.706 3.361-6.05 6.53-7.847 3.325-1.885 8.142-3.892 14.193-6.413l18.5-7.707c4.597-1.916 8.374-3.49 11.376-4.249Z" />
              </Logo>
            </StyledLink>

            <StyledLink
              href="https://www.instagram.com/vibz.fun/"
              title="Follow us on Instagram"
            >
              <Logo
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 21"
              >
                <path d="M6.151.07C5.031.122 4.27.297 3.605.56A5.092 5.092 0 0 0 1.75 1.776 5.057 5.057 0 0 0 .542 3.64C.28 4.305.105 5.075.063 6.186 0 7.306 0 7.665 0 10.518c0 2.852.018 3.21.07 4.33.052 1.12.227 1.882.49 2.547.271.691.63 1.277 1.216 1.855a5.17 5.17 0 0 0 1.864 1.207c.665.263 1.435.438 2.546.482 1.12.052 1.479.061 4.332.052 2.852 0 3.21-.017 4.33-.07 1.12-.052 1.882-.236 2.547-.49a5.092 5.092 0 0 0 1.855-1.216 5.17 5.17 0 0 0 1.207-1.864c.263-.665.438-1.435.482-2.546.052-1.12.061-1.479.052-4.331 0-2.853-.017-3.212-.07-4.332-.052-1.12-.227-1.88-.49-2.546a5.092 5.092 0 0 0-1.216-1.855A5.057 5.057 0 0 0 17.351.534C16.686.27 15.916.096 14.805.052 13.694 0 13.335 0 10.483 0 7.63 0 7.27.018 6.15.07Zm.123 18.988c-1.024-.044-1.584-.22-1.952-.36-.49-.192-.84-.42-1.207-.787a3.284 3.284 0 0 1-.788-1.207c-.14-.368-.314-.928-.367-1.952-.052-1.102-.061-1.434-.07-4.243 0-2.8 0-3.133.052-4.244.044-1.024.22-1.575.36-1.951.192-.49.42-.84.778-1.208a3.285 3.285 0 0 1 1.207-.787c.368-.149.928-.315 1.952-.368 1.111-.052 1.435-.061 4.244-.07 2.808-.008 3.132 0 4.243.053 1.024.044 1.584.21 1.951.359.49.192.84.42 1.208.778.367.368.595.718.787 1.208.15.367.316.927.368 1.951.053 1.111.061 1.435.07 4.244 0 2.8 0 3.132-.052 4.243-.044 1.024-.22 1.584-.36 1.952-.192.49-.42.84-.787 1.207a3.284 3.284 0 0 1-1.207.788c-.368.14-.928.315-1.952.367-1.11.053-1.434.062-4.243.07-2.809.009-3.133 0-4.244-.052M14.831 4.89a1.26 1.26 0 1 0 2.52 0 1.26 1.26 0 0 0-2.52 0ZM5.11 10.51a5.387 5.387 0 0 0 5.399 5.381 5.387 5.387 0 0 0 5.381-5.399 5.387 5.387 0 0 0-5.399-5.381c-2.975.009-5.39 2.424-5.381 5.399Zm1.89 0A3.505 3.505 0 0 1 10.491 7c1.934 0 3.5 1.557 3.509 3.491 0 1.934-1.557 3.5-3.491 3.509A3.505 3.505 0 0 1 7 10.509Z" />
              </Logo>
            </StyledLink>
            <StyledLink
              href="https://www.tiktok.com/@vibz.fun"
              title="Follow us on TikTok"
            >
              <Logo
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 21"
              >
                <path d="M10.438.018C11.528 0 12.613.008 13.695 0c.066 1.339.525 2.704 1.458 3.649.933.971 2.25 1.417 3.534 1.566v3.526c-1.2-.043-2.409-.306-3.5-.848-.476-.228-.917-.517-1.35-.814-.009 2.555.008 5.11-.017 7.656-.067 1.225-.45 2.441-1.125 3.448-1.092 1.68-2.984 2.773-4.925 2.808-1.192.07-2.384-.271-3.4-.901-1.684-1.041-2.867-2.949-3.042-4.996a17.036 17.036 0 0 1-.008-1.304c.15-1.662.933-3.255 2.15-4.34 1.383-1.26 3.316-1.864 5.125-1.505.016 1.295-.034 2.59-.034 3.885-.825-.28-1.791-.201-2.516.324-.525.358-.925.91-1.134 1.531-.175.446-.125.936-.116 1.409.2 1.435 1.516 2.642 2.916 2.511.934-.009 1.825-.578 2.309-1.409.158-.289.333-.586.341-.927.084-1.566.05-3.124.059-4.69.008-3.527-.008-7.044.017-10.562Z" />
              </Logo>
            </StyledLink>
            <StyledLink href="https://x.com/vibz_fun" title="Follow us on X">
              <Logo
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 60 58"
              >
                <path d="M53.484 3.655a1 1 0 1 0-1.505-1.317l1.505 1.317ZM6.492 54.322a1 1 0 0 0 1.506 1.317l-1.506-1.317Zm38.841 1.19-.772.636.772-.636Zm12.55-.543-.773.636.772-.636ZM14.642 2.464l-.772.636.772-.636Zm37.336-.126L32.734 24.33l1.506 1.317L53.484 3.655l-1.505-1.317Zm-26.242 29.99L6.492 54.322l1.506 1.317 19.244-21.994-1.505-1.317ZM2.866 2.372h9.461v-2H2.866v2Zm11.005.728 43.24 52.505 1.543-1.272L15.415 1.83 13.871 3.1Zm43.24 52.505h-9.462v2h9.461v-2Zm-11.006-.729L2.866 2.372 1.322 3.643l43.24 52.505 1.543-1.272Zm1.544.729a2 2 0 0 1-1.544-.729l-1.544 1.272a4 4 0 0 0 3.088 1.457v-2Zm9.461 0v2c1.69 0 2.618-1.967 1.544-3.272l-1.544 1.272ZM12.327 2.372a2 2 0 0 1 1.544.728l1.544-1.271A4 4 0 0 0 12.327.372v2Zm-9.461-2c-1.69 0-2.618 1.966-1.544 3.271l1.544-1.271v-2Z" />
              </Logo>
            </StyledLink>
          </LogoContainer>
        </SomeContainer>
      </MainContainer>
    </OuterContainer>
  )
}

export default FooterComponent

const OuterContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: var(--primary-red);
`

const MainContainer = styled.div`
  background-color: var(--primary-yellow);
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36rem;
  max-width: 1440px;
  margin: 0 auto;
`
const ImageSign = styled.img`
  position: absolute;
  top: 5rem;
  left: 12rem;
  width: 35.8rem;
  height: 35.8rem;
  clip-path: inset(0 0 4.8rem);

  @media (max-width: 900px) {
    display: none;
  }
`
const ImageLizard = styled.img`
  position: absolute;
  top: 0;
  right: 12rem;
  width: 39.2rem;
  height: 40.1rem;

  @media (max-width: 900px) {
    left: 55%;
    transform: translateX(-50%);
  }
`
const SomeContainer = styled.div`
  background-color: var(--primary-red);
  height: 25.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  column-gap: 6rem;

  @media (max-width: 900px) {
    column-gap: 3rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--primary-yellow);

  &:hover,
  &:focus-visible {
    color: var(--primary-black);
  }
`

const Logo = styled.svg`
  display: block;
  height: 6.4rem;
  width: auto;
  color: inherit;
  transition: color 0.3s ease;

  @media (max-width: 900px) {
    height: 4rem;
  }
`
