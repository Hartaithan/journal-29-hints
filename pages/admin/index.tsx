import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { GetServerSideProps } from "next";
import Flex from "../../components/Flex";
import AdminLayout from "../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../models/AppModel";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    props: {
      initialSession: session,
      user: session?.user || null,
    },
  };
};

const AdminPage: NextPageWithLayout = () => {
  const user = useUser();
  return (
    <Flex direction="column" justify="center" align="center">
      <p>/admin</p>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Flex>
  );
};

AdminPage.Layout = AdminLayout;

export default AdminPage;
