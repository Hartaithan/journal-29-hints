import { default as NextLink } from "next/link";
import styled from "styled-components";

const Link = styled(NextLink)`
  font-size: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
`;

export default Link;
