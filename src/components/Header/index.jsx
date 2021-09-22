import styled from "styled-components"
import { useModalContext } from "../../context/modal-context"

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  width: 100%;
  height: 65px;
  h1 {
    color: white;
    padding: 0 0 0 20px;
  }
  div {
    padding-right: 20px;
    button {
      margin: 0 0 0 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Header = () => {
  const { setModalContent, setModalOpen } = useModalContext();
  return (
    <HeaderComponent>
      <h1>Alura</h1>
      <div>
        <button
          onClick={() => {
            setModalContent("login");
            setModalOpen(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setModalContent("shoppingCart");
            setModalOpen(true);
          }}
        >
          Carrinho
        </button>
      </div>
    </HeaderComponent>
  );
}

export default Header