import { useState, useMemo } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ModalContextProvider } from "../context/modal-context";
import Header from "../components/Header";
import Modal from "../components/Modal";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const MyApp = ({ Component, pageProps }) => {
  const [modalContent, setModalContent] = useState("shoppingCart");
  const [modalOpen, setModalOpen] = useState(false);
  const value = useMemo(
    () => ({ modalContent, setModalContent, modalOpen, setModalOpen }),
    [modalContent, setModalContent, modalOpen, setModalOpen]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalContextProvider value={value}>
          <GlobalStyle />
          <Header />
          <Modal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
          <Component {...pageProps} />
        </ModalContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
