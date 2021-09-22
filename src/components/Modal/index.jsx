import styled, { createGlobalStyle, css } from "styled-components"

import { useModalContext } from "../../context/modal-context"

import ShoppingCart from "./screens/ShoppingCart"
import Login from "./screens/Login"

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: 0.3s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

function Modal({ isOpen, onClose }) {
  const { modalContent } = useModalContext()
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest(
          '[data-modal-safe-area="true"]'
        )

        if (!isSafeArea) {
          onClose()
        }
      }}
    >
      {isOpen && <LockScroll />}

      {modalContent === "shoppingCart" && <ShoppingCart isOpen={isOpen} />}
      {modalContent === "login" && <Login isOpen={isOpen} />}
    </ModalWrapper>
  )
}

export default Modal
