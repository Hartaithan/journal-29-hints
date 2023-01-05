import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { main } from "../locales/main";
import Title from "./Title";

const Container = styled.header`
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

const Header: FC = () => {
  const router = useRouter();
  const locale = router.locale || "ru";
  return (
    <Container>
      <Title fontSize="14px">{main[locale].title}</Title>
    </Container>
  );
};

export default Header;
