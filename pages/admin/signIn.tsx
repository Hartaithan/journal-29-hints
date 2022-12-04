import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { supabase } from "../../helpers/supabase";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };

  return { props: {} };
};

const AdminSignInPage: NextPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword(form);
    if (error) {
      console.error("sign in failed", error);
      return;
    }
    router.push("/admin");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Пароль"
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
        onChange={(event) => setForm({ ...form, password: event.target.value })}
      />
      <Input type="submit" />
    </Form>
  );
};

export default AdminSignInPage;
