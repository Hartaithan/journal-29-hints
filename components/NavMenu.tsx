import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import styled from "styled-components";
import { IRoute } from "../models/RouteModel";

interface INavMenuProps {
  routes: IRoute[];
}

const Container = styled.div`
  height: 24px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu: FC<INavMenuProps> = (props) => {
  const { routes } = props;
  const router = useRouter();

  const title = useMemo(() => {
    const route = routes.find((route) => route.pathname === router.pathname);
    return route ? route.title : "Страница не найдена";
  }, [routes, router]);

  return <Container>{title}</Container>;
};

export default NavMenu;
