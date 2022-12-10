import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import AdminLayout from "../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../models/AppModel";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/admin/signIn",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

const AdminPage: NextPageWithLayout = () => {
  return <p>/admin</p>;
};

AdminPage.Layout = AdminLayout;

export default AdminPage;
