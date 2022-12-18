import styled, { CSSProperties } from "styled-components";

interface ITitleProps {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
}

const Title = styled.p<ITitleProps>`
  font-size: ${({ fontSize = "24px" }) => fontSize};
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
`;

export default Title;
