import { motion } from "framer-motion";
import { Row, Col, Box, ModalScreenWrapper } from "../style"

const ShoppingCart = ({ isOpen }) => {
  return (
    <motion.div
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: "100%",
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
            <Box>carrinho</Box>
          </Col>
        </Row>
      </ModalScreenWrapper>
    </motion.div>
  );
};

export default ShoppingCart;
