import { HTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";

interface IFlexProps extends HTMLAttributes<HTMLHeadingElement> {
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  margin?: CSSProperties["margin"];
}

const Flex = styled.div<IFlexProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  margin: ${({ margin }) => margin || 0};
`;

export default Flex;
