"use client"

import { useState } from "react"
import styled from "styled-components"
import StackBlitzEmbed from "./StackBlitzEmbed"
import { getScreenSize } from "@/utils/getScreenSize"
import css from "styled-jsx/css"

const GlobalButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const screenSize = getScreenSize()
  return (
    <Container $isOpen={isOpen}>
      <StyledButton
        $isOpen={isOpen}
        src={isOpen ? "/images/cancel.png" : "/images/chatWithVibz.png"}
        alt="chat"
        onClick={() => setIsOpen(!isOpen)}
      />
      <StackBlitzEmbed isOpen={isOpen} />
    </Container>
  )
}

export default GlobalButton

const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0px;
  right: 0px;
  bottom: ${({ $isOpen }) => ($isOpen ? "15px" : "0rem")};
  right: ${({ $isOpen }) => ($isOpen ? "10px" : "0rem")};

  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1px;
    right: 1px;
  }
`

const StyledButton = styled.img<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "9rem" : "9rem")};
  height: ${({ $isOpen }) => ($isOpen ? "9rem" : "9rem")};
  cursor: pointer;
  transition: all 0.3s ease;

  @keyframes scale-up {
    0% {
      transform: scale(1) translate(0, 0);
    }
    100% {
      transform: scale(1.5) translate(-15px, -12px);
    }
  }
  /* @keyframes grow-shake {
    0% {
      transform: rotate(0deg) scale(1);
    }
    40% {
      transform: rotate(0deg) scale(1.5);
    }

    43% {
      transform: rotate(8deg) scale(1.5);
    }
    46% {
      transform: rotate(-8deg) scale(1.5);
    }
    49% {
      transform: rotate(8deg) scale(1.5);
    }
    52% {
      transform: rotate(-8deg) scale(1.5);
    }
    55% {
      transform: rotate(0deg) scale(1.5);
    }

    60% {
      transform: rotate(8deg) scale(1.5);
    }
    63% {
      transform: rotate(-8deg) scale(1.5);
    }
    66% {
      transform: rotate(8deg) scale(1.5);
    }
    69% {
      transform: rotate(-8deg) scale(1.5);
    }
    72% {
      transform: rotate(0deg) scale(1.5);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  } */

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    &:hover {
      animation: scale-up 0.3s ease-in-out forwards;
    }
  `}

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    animation: none;
    &:hover {
      animation: none;
      transform: scale(1);
    }
  }
`
