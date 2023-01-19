import { Box, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = ({ queryHandler, suggestions }) => {
     const [input, setInput] = useState("");
     const handleInputChange = (e) => {
          setInput(e.target.value);
     };
     useEffect(() => {
          queryHandler(input);
     }, [input, queryHandler]);
     return (
          <Wrapper>
               <SearchBarWrapper>
                    <Input
                         value={input}
                         onChange={handleInputChange}
                         placeholder="Enter a brand"
                    />
                    <Search2Icon />
               </SearchBarWrapper>
               <SuggestionBox limit={5} suggestionsLength={suggestions.length}>
                    {suggestions.map((item, index) => {
                         return (
                              <Box
                                   bg="#cccc"
                                   // width="100%"
                                   size="sm"
                                   h="45px"
                                   colorScheme="green"
                                   key={index}
                              >
                                   <Checkbox
                                        fontSize={"5px"}
                                        w="280px"
                                        mt="2px"
                                   >
                                        {item}
                                   </Checkbox>
                              </Box>
                         );
                    })}
               </SuggestionBox>
          </Wrapper>
     );
};
const SuggestionBox = styled.div`
     border: 1px solid purple;
     max-height: ${({ limit }) => `${limit * 39}px`};
     border-top-color: ${({ limit }) => (limit ? "transparent" : "black")};
     border-bottom-color: ${({ suggestionsLength }) =>
          suggestionsLength ? "black" : "transparent"};
     overflow: auto;
     & * {
          padding: 10px;
          text-align: left;
          padding-left: 20px;
     }
`;
const SearchBarWrapper = styled.div`
     border: 1px solid purple;
     display: flex;
     padding: 5px 10px;
     align-items: center;
`;
const Input = styled.input`
     outline: none;
     font-size: 20px;
     flex: 1;
`;
const Wrapper = styled.div`
     max-width: 400px;
     margin: auto;
`;
export default SearchBar;
