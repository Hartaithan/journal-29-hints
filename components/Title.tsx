import styled, { CSSProperties } from "styled-components";

interface ITitleProps {
  fontSize?: CSSProperties["fontSize"];
}

const Title = styled.p<ITitleProps>`
  font-size: ${({ fontSize = "24px" }) => fontSize};
  font-weight: 600;
`;

export default Title;
