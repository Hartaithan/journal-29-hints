import styled, { CSSProperties } from "styled-components";

interface IButtonProps {
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  fontSize?: CSSProperties["fontSize"];
}

const Button = styled.button<IButtonProps>`
  height: ${({ height }) => height + "px" || "auto"};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize }) => fontSize + "px" || "12px"};
  padding: ${({ padding }) => padding || "8px 12px"};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export default Button;
