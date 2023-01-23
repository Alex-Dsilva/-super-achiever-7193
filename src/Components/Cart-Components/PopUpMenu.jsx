import React from "react";
import styled from "styled-components";

const PopUpMenu = ({ children }) => {
  return <PopUpBackground>{children}</PopUpBackground>;
};

const PopUpBackground = styled.div`
  /* background-color: #00000090; */
  position: fixed;
  height: 300px;
  width: 350px;
  top: 45px;
  left: 40%;
  z-index: 1;
`;

export default PopUpMenu;
