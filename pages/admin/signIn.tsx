import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Flex from "../../components/Flex";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { supabase } from "../../helpers/supabase";
import AdminLayout from "../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../models/AppModel";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/admin/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

const AdminSignInPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(form);
    if (error) {
      console.error("sign in failed", error);
      return;
    }
    router.push("/admin");
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Почта"
          type="email"
          placeholder="Введите почту"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
        <Input
          id="password"
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          value={form.password}
          onChange={(event) =>
            setForm({ ...form, password: event.target.value })
          }
        />
        <Input type="submit" />
      </Form>
    </Flex>
  );
};

AdminSignInPage.Layout = AdminLayout;

export default AdminSignInPage;
