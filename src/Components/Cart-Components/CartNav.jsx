import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressBox from "./AddressBox";

const CartNav = () => {
  const store = useSelector((store) => store.Appreducer);
  const pinCode=store.address.pinCode

  return (
    <NavigationContainer>
      
      <Bag>My Bag</Bag>
      <AddressBox pinCode={361345} city={"mumbai"}  />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  // border: 1px solid black;
  padding: 5px 3%;
  margin: auto auto 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    width: 480px;
    max-width: 100%;
  }
`;
const Bag = styled.h1`
    font-weight: bold;
    font-size: 35px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CheckoutList = styled.li`
  // border: 1px solid blue;
  margin: 0px 5px;
  letter-spacing: 3px;
  display: inline;
`;
const Divider = styled.li`
  display: inline-block;
  border-top: 1px dashed #696b79;
  height: 4px;
  width: 10%;
  display: inline-block;
`;
const SecureContainer = styled.div`
  max-height: 78px;
  // border: 1px solid black;
`;
const SecureDiv = styled.div`
  letter-spacing: 3px;
  float: right;
`;

export default CartNav;
