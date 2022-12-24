import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 24px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu: FC = () => {
  const router = useRouter();
  return <Container>{router.pathname}</Container>;
};

export default NavMenu;
