import { motion } from "framer-motion";
import styled from "styled-components";
import { Row, Col as StyledCol, Box as StyledBox, ModalScreenWrapper } from "../style";

const Col = styled(StyledCol)`
  display: flex;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled(StyledBox)`
  padding: 6rem;
`

const Login = ({ isOpen }) => {
  return (
    <motion.div
      variants={{
        open: {
          scale: 1,
        },
        closed: {
          scale: 0,
        },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{
        duration: 0.5,
      }}
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <ModalScreenWrapper>
        <Row>
          <Col data-modal-safe-area="true">
            <Box>login</Box>
          </Col>
        </Row>
      </ModalScreenWrapper>
    </motion.div>
  );
};

export default Login;
