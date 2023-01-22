import React from "react";
import FilterComponents from "../Components/FilterComponents";
import ProductsList from "../Components/ProductsList";
import styled from "styled-components";
const ProductPage = () => {
     return (
          <ProductPageWrapper>
               <FilterWrapper>
                    <FilterComponents />
               </FilterWrapper>
               <ProductWrapper>
                    <ProductsList />
               </ProductWrapper>
          </ProductPageWrapper>
     );
};

const ProductPageWrapper = styled.div`
     display: flex;
     border: 1px solid red;
     width: 80%;
     margin: auto;
`;
const FilterWrapper = styled.div`
     width: 300px;
`;
const ProductWrapper = styled.div`
     width: 100%;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
     grid-gap: 20px;
     justify-content: center;
`;

export default ProductPage;
