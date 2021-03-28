import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  width: fit-content;
  color: transparent;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  padding: 14px 52px 14px 16px;
  color: ${COLORS.gray500};

  :hover {
    color: black;
  }
`;

const CustomSelect = styled.select`
  appearance: none;
  position: absolute;
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  background-color: transparent;
  border-radius: 8px;

  option {
    color: initial;
  }
`;

const ChevronIcon = styled(Icon).attrs({ id: "chevron-down" })`
  position: absolute;
  right: 8px;
  top: 10px;
`;

const Select = ({ label, value, onChange, children, ...delegate }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper {...delegate}>
      {displayedValue}
      <ChevronIcon size={24} strokeWidth={2} />
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
