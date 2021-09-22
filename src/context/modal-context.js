/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from "react"

const defaultContext = {
  modalContent: "shoppingCart",
  modalOpen: false,
  setModalContent: () => {},
  setModalOpen: () => {}
}

const ModalContext = createContext(defaultContext)

export const useModalContext = () => {
  return useContext(ModalContext)
}

export function ModalContextProvider({ value, children }) {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
