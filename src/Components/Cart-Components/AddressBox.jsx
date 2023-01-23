import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import PopUpMenu from "./PopUpMenu";
import ContentDetails from "./ContentDetails";
import { MdClose } from "react-icons/md";
import Overlay from "./Overlay"
import { Text } from "./StyledComponents";

const AddressBox = ({ pinCode, city }) => {
  const [popUp, setPopUp] = useState(false);

  const handleAddressChange = () => {
    setPopUp(true);
  };

  // console.log("pinCode:", pinCode);
  return (
    <Box>
      <div>
        {pinCode ? (
          <p><b>{city}, {pinCode}</b></p>
        ) : (
          <b>100001</b>
        )}
      </div>
      <StyledButton 
        onClick={handleAddressChange}
       >Change PIN code</StyledButton>
       
      {popUp && (
        <PopUpMenu>
          <Wrapper>
            <MdClose onClick={() => setPopUp(false)} />
            <ContentDetails />
          </Wrapper>
        </PopUpMenu>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  border-bottom: 1px solid black;
  background-color: none;
  padding: 5px;
  font-size:18px ;
  font-weight: 500;

`;
const Wrapper = styled.div`
  background-color: white;
  margin: 5% auto auto auto;
  position: relative;
  border-radius: 7px;
  /* overflow: hidden; */
  & > svg {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default AddressBox;
