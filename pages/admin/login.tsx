import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { supabase } from "../../helpers/supabase";

const AdminLoginPage: NextPage = () => {
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
        label="Email"
        type="email"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <Input
        id="password"
        type="password"
        value={form.password}
        onChange={(event) => setForm({ ...form, password: event.target.value })}
      />
      <Input type="submit" />
    </Form>
  );
};

export default AdminLoginPage;
