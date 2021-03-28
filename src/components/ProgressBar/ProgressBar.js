/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const HEIGHTS = {
  small: 8,
  medium: 12,
  large: 24,
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: ${(p) => (p.size === "large" ? 4 : 0)}px;
  border-radius: ${(p) => (p.size === "large" ? 8 : 4)}px;
  height: ${(p) => HEIGHTS[p.size]}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  position: relative;

  :before {
    position: absolute;
    content: "";
    display: inline-block;
    height: 100%;
    width: ${(p) => p.value}%;
    background-color: ${COLORS.primary};
  }
`;

const ProgressBar = ({ value, size, ...delegate }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
      {...delegate}
    >
      <VisuallyHidden>
        <label id="progress">{value}%</label>
      </VisuallyHidden>
      <Bar value={value} />
    </Wrapper>
  );
};

export default ProgressBar;
