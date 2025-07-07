import React, { useState } from "react"
import styled, { css } from "styled-components"
import Link from "next/link"

const MenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container $isOpen={isMenuOpen}>
      <LogoWrapper>
        <LogoLink href="/" title="Home">
          <SvgLogo
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 94 52"
          >
            <path d="M44.11 16.786c1.558-2.78 3.268-4.171 5.079-4.171 1.257 0 2.263.596 3.118 1.688h.1c.303-.149.705-.447 1.158-.844 1.307-1.49 1.961-3.179 1.961-5.066v-.397c0-.844-.15-1.639-.402-2.483-.503-1.59-1.358-2.831-2.666-3.824C50.798.546 48.988 0 47.077 0h-.554c-2.012 0-4.074.695-6.086 2.086-.502.348-1.056.894-1.71 1.59-.804.893-1.508 1.837-2.062 2.93-.503.993-1.006 2.234-1.458 3.724-.453 1.49-.956 4.271-1.409 8.294-.301 2.83-.553 8.84-.754 18.078-.1 4.072-.453 6.158-1.106 6.158h-.101c-.704 0-1.207-1.341-1.509-4.073-.453-4.618-.855-8.293-1.207-10.975-.453-2.533-.855-4.37-1.257-5.513-.503-1.887-1.107-3.377-1.66-4.47-.604-1.291-1.459-2.533-2.616-3.873-.955-.894-1.71-1.54-2.213-1.838-2.414-1.44-4.828-2.136-7.343-2.136h-.452c-2.716 0-5.382.845-7.897 2.633-.704.447-1.559 1.29-2.565 2.433C1.056 17.73 0 20.66 0 23.888v.695c0 1.69.352 3.527 1.006 5.414 1.106 2.682 2.816 4.668 5.08 5.96 2.012 1.042 3.973 1.54 5.834 1.54 1.76 0 3.37-.498 4.828-1.54 2.113-1.64 3.22-3.626 3.22-5.91 0-1.64-.554-3.03-1.56-4.172-1.257-1.291-2.716-1.937-4.325-1.937-1.358 0-2.616.447-3.772 1.34-1.409 1.193-2.113 2.633-2.113 4.322v.099c0 1.39.453 2.682 1.408 3.874-.2-.05-.603-.298-1.207-.696-1.509-1.241-2.263-2.83-2.263-4.767 0-1.838.704-3.526 2.012-5.066 1.76-1.838 3.822-2.732 6.236-2.732 1.861 0 3.572.596 5.03 1.788 1.861 1.341 2.766 4.222 2.766 8.592 0 1.291-.05 2.136-.05 2.483-.352 5.414-.503 8.642-.503 9.635 0 1.937.201 3.427.604 4.52.301.794.955 1.638 1.961 2.582 1.911 1.39 4.024 2.086 6.337 2.086h.302c2.817 0 5.331-1.142 6.991-3.03 2.766-3.029 1.358-7.3 2.515-17.68.603-5.264 1.66-9.039 2.464-11.323.403-1.192.805-2.235 1.308-3.179Z" />
            <path d="M69.206 25.426c-2.816-.15-5.381 1.34-7.04 5.711-.051.15-.202.1-.202 0 .603-6.704 2.213-12.565 6.488-13.657.302-6.258-9.657-7.897-12.171-.249-.585 1.755-.962 4.965-1.203 6.632-.38 2.633-1.692 10.43-1.704 10.498-.618 3.568-1.888 6.038-2.676 5.892-2.062-.447-.906-10.181 1.307-12.863-.503-3.179-6.74-4.023-7.997-1.292-2.062 4.52-3.62 22.647 4.527 22.647 3.697 0 5.204-5.989 6.28-11.352.112 3.805.32 7.218.46 9.438.15 3.079 7.795 2.632 7.443-.546-.1-1.192-.2-3.08-.251-3.874 0-.398.251-.398.352.05.855 4.37 3.27 5.91 5.482 5.96 9.003.049 11.115-22.548.905-22.995Zm-3.27 14.65c-1.66-1.49-.906-9.932.804-10.23 2.414-.397 1.308 12.118-.805 10.23Z" />
            <path d="M91.303 35.723c-1.25 1.022-3.085 7.284-7.567 6.222 3.067-3.476 7.093-11.333 6.6-15.398-.485-3.995-12.946-2.092-13.713.445-.493 1.629-.33 4.85-.224 7.47-.002.98 1.301 1.48 1.91.547 3.991-6.622 5.745-4.811 3.781-1.194-2.38 4.385-7.05 10.63-7.452 11.226-1.358 1.987 3.504 4.528 4.829 3.178 2.401-2.495 2.112-.248 6.689.646 4.677.894 7.393-2.98 7.796-6.705.352-3.575-1.226-7.6-2.647-6.437h-.002ZM50.094 15.669c-2.313 0-4.174 1.837-4.174 4.072 0 2.235 1.86 4.122 4.174 4.122a4.095 4.095 0 0 0 4.124-4.122c0-2.284-1.86-4.072-4.124-4.072Z" />
          </SvgLogo>
        </LogoLink>
      </LogoWrapper>
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuBar $isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
      </MobileMenuButton>
      <FlexWrapper $isOpen={isMenuOpen}>
        <MenuItems $isOpen={isMenuOpen}>
          <MenuItems $isOpen={isMenuOpen}>
            <MenuLink href="/vision" $isOpen={isMenuOpen}>
              Vision
            </MenuLink>
            <MenuLink href="/tokenomics" $isOpen={isMenuOpen}>
              Tokenomics
            </MenuLink>
          </MenuItems>
        </MenuItems>
        <SocialMediaItems $isOpen={isMenuOpen}>
          <SocialLink
            href="https://t.me/+BUAL72IzxftkZDJk"
            title="Message us on Telegram"
          >
            <SocialIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 63 57"
            >
              <path d="M50.844 1.073c3.07-.776 6.267-.95 8.933 1.17 2.666 2.122 3.215 5.277 3.15 8.441-.065 3.096-.749 7.131-1.581 12.04l-2.654 15.657c-.73 4.311-1.337 7.892-2.203 10.549-.9 2.757-2.318 5.294-5.2 6.51-2.883 1.216-5.69.461-8.292-.82-2.507-1.233-5.495-3.298-9.092-5.784l-7.62-5.264c-.445-.307-4.34-2.905-1.227-6.563 7.462-8.772 19.808-17.544 18.184-19.169-1.625-1.624-17.22 12.022-26.967 17.87-3.249 1.95-4.873 2.875-8.536 1.299-3.347-1.44-6.638-3.435-7.35-7.085a9.611 9.611 0 0 1-.144-2.635c.308-3.706 3.361-6.05 6.53-7.847 3.325-1.885 8.142-3.892 14.193-6.413l18.5-7.707c4.597-1.916 8.374-3.49 11.376-4.249Z" />
            </SocialIcon>
          </SocialLink>
          <SocialLink href="https://x.com/vibz_fun" title="Follow us on X">
            <SocialIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16.753 2.659a1 1 0 0 0-1.506-1.317l1.506 1.317ZM1.247 17.341a1 1 0 0 0 1.506 1.317l-1.506-1.317Zm15.406-.478.772-.635-.772.635ZM15.247 1.341l-5.923 6.77 1.505 1.317 5.924-6.77-1.506-1.317ZM7.17 10.572l-5.923 6.77 1.506 1.317 5.923-6.77-1.506-1.317ZM2.12 2.5h.465v-2H2.12v2Zm2.01.729L15.88 17.5l1.544-1.271L5.672 1.957 4.128 3.23ZM15.88 17.5h-.465v2h.465v-2Zm-2.01-.729L2.12 2.5.575 3.771l11.753 14.272 1.544-1.272Zm1.545.729a2 2 0 0 1-1.544-.729l-1.544 1.272a4 4 0 0 0 3.088 1.457v-2Zm.465 0v2c1.69 0 2.618-1.967 1.544-3.271L15.88 17.5ZM2.584 2.5a2 2 0 0 1 1.544.729l1.544-1.272A4 4 0 0 0 2.584.5v2ZM2.12.5C.429.5-.499 2.467.575 3.771L2.12 2.5v-2Z" />
            </SocialIcon>
          </SocialLink>

          <SocialLink
            href="https://www.instagram.com/vibz.fun/"
            title="Follow us on Instagram"
          >
            <SocialIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 21"
            >
              <path d="M6.151.07C5.031.122 4.27.297 3.605.56A5.092 5.092 0 0 0 1.75 1.776 5.057 5.057 0 0 0 .542 3.64C.28 4.305.105 5.075.063 6.186 0 7.306 0 7.665 0 10.518c0 2.852.018 3.21.07 4.33.052 1.12.227 1.882.49 2.547.271.691.63 1.277 1.216 1.855a5.17 5.17 0 0 0 1.864 1.207c.665.263 1.435.438 2.546.482 1.12.052 1.479.061 4.332.052 2.852 0 3.21-.017 4.33-.07 1.12-.052 1.882-.236 2.547-.49a5.092 5.092 0 0 0 1.855-1.216 5.17 5.17 0 0 0 1.207-1.864c.263-.665.438-1.435.482-2.546.052-1.12.061-1.479.052-4.331 0-2.853-.017-3.212-.07-4.332-.052-1.12-.227-1.88-.49-2.546a5.092 5.092 0 0 0-1.216-1.855A5.057 5.057 0 0 0 17.351.534C16.686.27 15.916.096 14.805.052 13.694 0 13.335 0 10.483 0 7.63 0 7.27.018 6.15.07Zm.123 18.988c-1.024-.044-1.584-.22-1.952-.36-.49-.192-.84-.42-1.207-.787a3.284 3.284 0 0 1-.788-1.207c-.14-.368-.314-.928-.367-1.952-.052-1.102-.061-1.434-.07-4.243 0-2.8 0-3.133.052-4.244.044-1.024.22-1.575.36-1.951.192-.49.42-.84.778-1.208a3.285 3.285 0 0 1 1.207-.787c.368-.149.928-.315 1.952-.368 1.111-.052 1.435-.061 4.244-.07 2.808-.008 3.132 0 4.243.053 1.024.044 1.584.21 1.951.359.49.192.84.42 1.208.778.367.368.595.718.787 1.208.15.367.316.927.368 1.951.053 1.111.061 1.435.07 4.244 0 2.8 0 3.132-.052 4.243-.044 1.024-.22 1.584-.36 1.952-.192.49-.42.84-.787 1.207a3.284 3.284 0 0 1-1.207.788c-.368.14-.928.315-1.952.367-1.11.053-1.434.062-4.243.07-2.809.009-3.133 0-4.244-.052M14.831 4.89a1.26 1.26 0 1 0 2.52 0 1.26 1.26 0 0 0-2.52 0ZM5.11 10.51a5.387 5.387 0 0 0 5.399 5.381 5.387 5.387 0 0 0 5.381-5.399 5.387 5.387 0 0 0-5.399-5.381c-2.975.009-5.39 2.424-5.381 5.399Zm1.89 0A3.505 3.505 0 0 1 10.491 7c1.934 0 3.5 1.557 3.509 3.491 0 1.934-1.557 3.5-3.491 3.509A3.505 3.505 0 0 1 7 10.509Z" />
            </SocialIcon>
          </SocialLink>
          <SocialLink
            href=" https://www.tiktok.com/@vibz.fun"
            title="Follow us on TikTok"
          >
            <SocialIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 21"
            >
              <path d="M10.438.018C11.528 0 12.613.008 13.695 0c.066 1.339.525 2.704 1.458 3.649.933.971 2.25 1.417 3.534 1.566v3.526c-1.2-.043-2.409-.306-3.5-.848-.476-.228-.917-.517-1.35-.814-.009 2.555.008 5.11-.017 7.656-.067 1.225-.45 2.441-1.125 3.448-1.092 1.68-2.984 2.773-4.925 2.808-1.192.07-2.384-.271-3.4-.901-1.684-1.041-2.867-2.949-3.042-4.996a17.036 17.036 0 0 1-.008-1.304c.15-1.662.933-3.255 2.15-4.34 1.383-1.26 3.316-1.864 5.125-1.505.016 1.295-.034 2.59-.034 3.885-.825-.28-1.791-.201-2.516.324-.525.358-.925.91-1.134 1.531-.175.446-.125.936-.116 1.409.2 1.435 1.516 2.642 2.916 2.511.934-.009 1.825-.578 2.309-1.409.158-.289.333-.586.341-.927.084-1.566.05-3.124.059-4.69.008-3.527-.008-7.044.017-10.562Z" />
            </SocialIcon>
          </SocialLink>
        </SocialMediaItems>
        <BuyButton href="/buy">Buy</BuyButton>
      </FlexWrapper>
    </Container>
  )
}

export default MenuComponent

const BuyButton = styled.a`
  color: var(--primary-yellow);
  background: var(--primary-red);
  border: 2px solid var(--primary-red);
  border-radius: 5.5rem;
  padding: 1.1rem 3.1rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover,
  &:focus-visible {
    background: var(--primary-yellow);
    color: var(--primary-red);
  }
`

const MenuItems = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  align-items: ${({ $isOpen }) => ($isOpen ? "flex-end" : "flex-start")};
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const SocialMediaItems = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;

  @media (max-width: 900px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "auto")};
    justify-content: ${({ $isOpen }) => ($isOpen ? "flex-end" : "center")};
    gap: 1.7rem;
  }
`

const Container = styled.div<{ $isOpen: boolean }>`
  background: var(--primary-yellow);
  max-width: 130rem;
  display: flex;
  align-items: center;
  padding: 1.4rem 3rem;
  border-radius: 5.5rem;
  position: relative;
  top: 2rem;
  margin: 0 2rem;
  z-index: 2;

  @media (max-width: 900px) {
    justify-content: space-between;
    padding: 1.2rem 3rem;
    transition: all 0.3s ease;
    ${({ $isOpen }) =>
      $isOpen
        ? css`
            z-index: 100;
            border-radius: 0;
            top: 0;
            margin: 0;
          `
        : "5.5rem"};
  }
`

const LogoWrapper = styled.div`
  width: 100%;
`

const LogoLink = styled(Link)`
  display: flex;
  width: 9.4rem;
  color: var(--primary-red);

  &:hover,
  &:focus-visible {
    color: var(--primary-black);
  }

  @media (max-width: 900px) {
    width: 6.4rem;
  }
`

const SvgLogo = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  color: inherit;
  transition: color 0.3s ease;

  &:hover,
  &:focus-visible {
    color: var(--primary-black);
  }
`

const FlexWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 2rem;

  @media (max-width: 900px) {
    display: flex;
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    height: ${({ $isOpen }) => ($isOpen ? "57rem" : "0")};
    flex-direction: column;
    align-items: ${({ $isOpen }) => ($isOpen ? "flex-end" : "center")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--primary-yellow);
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    padding-right: ${({ $isOpen }) => ($isOpen ? "5rem" : "0")};
    transition: all 0.3s ease;
    overflow: hidden;

    & > ${BuyButton} {
      order: 1;
    }
    & > ${MenuItems} {
      order: 0;
    }
    & > ${SocialMediaItems} {
      order: 2;
    }
  }
`

const MenuLink = styled(Link)<{ $isOpen: boolean }>`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-black);
  transition: color 0.3s ease;

  &:hover,
  &:focus-visible {
    color: var(--primary-red);
  }

  @media (max-width: 900px) {
    &:nth-child(1) {
      margin-right: 0;
    }
    font-size: ${({ $isOpen }) => ($isOpen ? "2.4rem" : "1.6rem")};
    margin: ${({ $isOpen }) => ($isOpen ? "5rem 0 0rem 0" : "0")};
  }
`

const SocialLink = styled(Link)`
  display: flex;
  color: var(--primary-black);

  &:hover,
  &:focus-visible {
    color: var(--primary-red);
  }

  & + & {
    margin-left: 1.7rem;
  }
`

const SocialIcon = styled.svg`
  display: block;
  width: auto;
  height: 2.4rem;
  color: inherit;
  transition: color 0.3s ease;
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`

const MenuBar = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: var(--primary-red);
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      top: 8px;
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      top: 16px;
      transform-origin: left center;
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
