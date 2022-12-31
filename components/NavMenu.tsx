import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { FC, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { IRoute } from "../models/RouteModel";

const MENU_HEIGHT = 24;
const MENU_WIDTH = 160;

interface INavMenuProps {
  routes: IRoute[];
}

const Container = styled.div`
  position: relative;
  height: ${MENU_HEIGHT}px;
  width: ${MENU_WIDTH}px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const List = styled.div`
  top: ${MENU_HEIGHT + 12}px;
  width: ${MENU_WIDTH}px;
  min-height: 24px;
  position: absolute;
  border: 1px solid #121212;
`;

const ListItem = styled.div`
  height: 24px;
  padding: 4px 8px;
`;

const ListItemTitle = styled.p`
  font-size: 12px;
`;

const NavMenu: FC<INavMenuProps> = (props) => {
  const { routes } = props;
  const router = useRouter();
  const user = useUser();
  const ref = useRef<HTMLDivElement | null>(null);
  const locale = router.locale || "ru";

  const [isOpen, setOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleItemClick = (route: IRoute) => {
    router.push(route.pathname);
    closeMenu();
  };

  const handleClickOutside = () => {
    closeMenu();
  };

  useOnClickOutside(ref, handleClickOutside);

  const title = useMemo(() => {
    const route = routes.find((route) => route.pathname === router.pathname);
    return route ? route.title[locale] : "Страница не найдена";
  }, [routes, router, locale]);

  return (
    <Container ref={ref} onClick={toggleMenu}>
      {title}
      {isOpen && (
        <List>
          {routes.map((route) => {
            if (!route.isNavigable || (user && !route.isVisibleOnAuth)) {
              return null;
            }
            return (
              <ListItem key={route.id} onClick={() => handleItemClick(route)}>
                <ListItemTitle>{route.title[locale]}</ListItemTitle>
              </ListItem>
            );
          })}
        </List>
      )}
    </Container>
  );
};

export default NavMenu;
