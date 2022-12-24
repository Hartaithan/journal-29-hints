import { FC } from "react";
import styled from "styled-components";
import Link from "./Link";

const Container = styled.footer`
  min-height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 1px solid #121212;
`;

const Footer: FC = () => {
  return (
    <Container>
      <Link href="https://hartaithan.github.io/" target="_blank">
        Hartaithan.
      </Link>
    </Container>
  );
};

export default Footer;
