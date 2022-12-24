import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { supabase } from "../helpers/supabase";
import { main } from "../locales/main";
import Button from "./Button";
import NavMenu from "./NavMenu";
import Title from "./Title";

const Container = styled.header`
  min-height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid #121212;
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
      <Title fontSize="14px">{main[locale].admin}</Title>
      <NavMenu />
      {user ? (
        <Button
          height={24}
          padding="0px 12px"
          fontSize={10}
          onClick={() => handleSignOut()}
        >
          Sign out
        </Button>
      ) : (
        <Button
          height={24}
          padding="0px 12px"
          fontSize={10}
          onClick={() => handleSignIn()}
        >
          Sign in
        </Button>
      )}
    </Container>
  );
};

export default HeaderAdmin;
