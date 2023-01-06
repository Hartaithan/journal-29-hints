import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Flex from "../../../../components/Flex";
import AdminLayout from "../../../../layouts/AdminLayout";
import { IPageProps, NextPageWithLayout } from "../../../../models/AppModel";
import { IBook } from "../../../../models/BookModel";

interface IAdminBookPageProps extends IPageProps {
  book: IBook | null;
}

export const getServerSideProps: GetServerSideProps<
  IAdminBookPageProps
> = async (ctx) => {
  const id = ctx.params?.id;
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: book, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", id)
    .single();

  if (!session) {
    return {
      redirect: {
        destination: "/admin/signIn",
        permanent: false,
      },
    };
  }

  if (error) {
    console.error("get book error", error);
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
      book: book || null,
    },
  };
};

const AdminBookPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { book } = props;
  return (
    <Flex direction="column" justify="center" align="center">
      {JSON.stringify(book, null, 2)}
    </Flex>
  );
};

AdminBookPage.Layout = AdminLayout;

export default AdminBookPage;
