import React from "react";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";

const ConvenienceBox = () => {
  return (
    <Container>
      <img src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg" alt="." />
      <span>
      Congratulations NeuPass User!! Your order is eligible for <b>FREE Shipping!</b>
      </span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
`;

export default ConvenienceBox;
