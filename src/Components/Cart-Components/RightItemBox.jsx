import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdLocalOffer } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "./Button";
import PriceDetails from "./PriceDetails";
import RightContentBox from "./RightContentBox";

const RightItemBox = () => {
  return (
    <RightContentBox>
      <OffersAndCuppons>
        <BaseHeader>OFFERS & CUPONS</BaseHeader>
        <SpaceBetween>
          <div>
            <MdLocalOffer />
            <b>Apply Coupons</b>
          </div>
          <Button
            color={"gray"}
            border="1px solid"
            bgColor={"none"}
            padding={"12px"}
            radius={"30px"}
            fsize={"13px"}
            fweight={600}
            text="APPLY"
          />
        </SpaceBetween>
      </OffersAndCuppons>
      <hr />

      <PriceDetails />

      <div>
        <Link to={"/address"}>
          <Button
            color={"white"}
            border="none"
            width={"100%"}
            text="PLACE ORDER"
            padding={"17px"}
            radius={"35px"}
            fsize="18px"
            bgColor={"gray"}
          />
        </Link>
      </div>
    </RightContentBox>
  );
};

const OffersAndCuppons = styled.div``;

const BagOffer = styled.div`
  background-color: #fff6f4;
  padding: 15px;
  border-radius: 4px;
`;

const PinkBox = styled.div`
  background-color: #fff6f4;
  padding: 20px;
  padding-left: 20%;
  position: relative;
`;

const ImageRibbon = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  left: 5%;
`;

const Text = styled.div`
  color: ${(color) => color.color};
  margin: ${(margin) => margin.margin};
`;

const BaseHeader = styled.div`
  color: #535766;
  font-weight: bold;
`;

const GiftSection = styled.div``;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RightItemBox;
