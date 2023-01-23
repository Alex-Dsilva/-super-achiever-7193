import React from "react";
import styled from "styled-components";
import CartNav from "../../Components/Cart-Components/CartNav";
import LeftItemBox from "../../Components/Cart-Components/LeftItemBox";
import RightItemBox from "../../Components/Cart-Components/RightItemBox";


const Cart = () => {
  // const user = useSelector((store) => console.log(store)); //For testing
  return (
    <CartContainer>
      <CartNav />
      <hr />
      <Cartmes>
      Apply a relevant <b>coupon code</b> here to avail any additional discount. Applicable <b>cashback</b> if any will be credited to your account as per T&C.
      </Cartmes>
      <LeftItemBox />
      <RightItemBox />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  font-size: 13px;
  & svg {
    display: inline;
  }
`;

const Cartmes=styled.div`
    padding: 10px;
    font-size: 17px;
`

export default Cart;
