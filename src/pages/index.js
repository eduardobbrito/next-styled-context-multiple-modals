import styled from "styled-components"

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
`

export default function Home() {
  return (
    <>
      <Paragraph>
        2 modais, com apenas 1 componente dentro de _app e um ModalContext pra
        gerenciar quais conteúdos devem ser renderizados
      </Paragraph>
    </>
  );
}
