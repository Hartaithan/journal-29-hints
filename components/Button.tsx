import styled, { CSSProperties } from "styled-components";

interface IButtonProps {
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  fontSize?: CSSProperties["fontSize"];
}

const Button = styled.button<IButtonProps>`
  height: ${({ height }) => height + "px" || "auto"};
  background: #ffffff;
  color: #000000;
  font-size: ${({ fontSize }) => fontSize + "px" || "12px"};
  padding: ${({ padding }) => padding || "8px 12px"};
  cursor: pointer;
`;

export default Button;
