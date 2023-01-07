import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { supabase } from "../helpers/supabase";
import { main } from "../locales/main";
import { IRoute } from "../models/RouteModel";
import Button from "./Button";
import NavMenu from "./NavMenu";
import Title from "./Title";

const adminRoutes: IRoute[] = [
  {
    id: 1,
    pathname: "/admin",
    title: { ru: "Главная", en: "Home" },
    isNavigable: true,
    isVisibleOnAuth: true,
  },
  {
    id: 2,
    pathname: "/admin/signIn",
    title: { ru: "Вход", en: "Sign in" },
    isNavigable: true,
    isVisibleOnAuth: false,
  },
  {
    id: 3,
    pathname: "/admin/books",
    title: { ru: "Все книги", en: "All books" },
    isNavigable: true,
    isVisibleOnAuth: true,
  },
  {
    id: 4,
    pathname: "/admin/books/add",
    title: { ru: "Добавление книги", en: "Add book" },
    isNavigable: true,
    isVisibleOnAuth: true,
  },
  {
    id: 5,
    pathname: "/admin/books/[id]",
    title: { ru: "Информация о книге", en: "Book details" },
    isNavigable: false,
    isVisibleOnAuth: true,
  },
  {
    id: 6,
    pathname: "/admin/books/[id]/edit",
    title: { ru: "Редактирование книги", en: "Book edit" },
    isNavigable: false,
    isVisibleOnAuth: true,
  },
];

const Container = styled.header`
  min-height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  & > * {
    margin-right: 10px;
  }
  & > :last-child {
    margin-left: auto;
  }
`;

const HeaderAdmin: FC = () => {
  const router = useRouter();
  const user = useUser();
  const locale = router.locale || "ru";

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("sign out error", error);
    }
    router.push("/admin/signIn");
  };

  const handleSignIn = () => {
    router.push("/admin/signIn");
  };

  return (
    <Container>
      <Title fontSize={14}>{main[locale].admin}</Title>
      <NavMenu routes={adminRoutes} />
      {user ? (
        <Button
          height={24}
          padding="0px 12px"
          fontSize={10}
          onClick={() => handleSignOut()}
        >
          {main[locale].signOut}
        </Button>
      ) : (
        <Button
          height={24}
          padding="0px 12px"
          fontSize={10}
          onClick={() => handleSignIn()}
        >
          {main[locale].signIn}
        </Button>
      )}
    </Container>
  );
};

export default HeaderAdmin;
