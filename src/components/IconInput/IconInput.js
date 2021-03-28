import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const DEFAULT_WIDTH = 270;
const DEFAULT_ICON = "search";

const InputIcon = styled(Icon)`
  position: absolute;
  display: block;
  left: 0;
  top: ${(p) => p.top}px;
  pointer-events: none;
`;

const TextInput = styled.input.attrs({ type: "text" })`
  border: 0;
  border-bottom: ${(p) => (p.size === "large" ? 2 : 1)}px solid black;
  outline-offset: 4px;
  padding: ${(p) => (p.size === "large" ? 8 : 4)}px;
  padding-left: ${(p) => (p.size === "large" ? 42 : 30)}px;
  width: 100%;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  font-size: ${(p) => (p.size === "large" ? 1.25 : 1)}rem;

  &::placeholder {
    color: ${COLORS.transparentGray35};
    font-weight: 400;
  }
`;

const InputLabel = styled.label`
  display: block;
  position: relative;
  width: ${(p) => p.width || DEFAULT_WIDTH}px;

  & ${TextInput}, & ${InputIcon} {
    color: ${COLORS.gray500};
  }

  &:hover ${TextInput}, &:hover ${InputIcon} {
    color: black;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputLabel width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput {...{ size, placeholder }} />
      <InputIcon
        id={icon || DEFAULT_ICON}
        size={size === "large" ? 24 : 16}
        top={size === "large" ? 8 : 6}
        strokeWidth={size === "large" ? 2 : 1}
      />
    </InputLabel>
  );
};

export default IconInput;
