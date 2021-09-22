import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  justify-content: flex-end;
  position: relative;
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  padding-right: 0;
  flex: 1;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${(100 * 5) / 12}%;
  max-width: ${(100 * 5) / 12}%;
`;

export const Box = styled.div`
  box-shadow: "-10px 0px 24px rgba(7, 12, 14, 0.1)";
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 1rem;
  background-color: white;
`;

export const ModalScreenWrapper = styled.div`
  width: 100%;
  display: flex;
`;
