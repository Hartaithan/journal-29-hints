import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Flex from "../../../../components/Flex";
import AdminLayout from "../../../../layouts/AdminLayout";
import { IPageProps, NextPageWithLayout } from "../../../../models/AppModel";
import { IBook } from "../../../../models/BookModel";
import { IPage } from "../../../../models/PageMode";

interface IAdminBookPageProps extends IPageProps {
  book: IBook | null;
  pages: IPage[] | null;
}

export const getServerSideProps: GetServerSideProps<
  IAdminBookPageProps
> = async (ctx) => {
  const id = ctx.params?.id;
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/admin/signIn",
        permanent: false,
      },
    };
  }

  const [{ data: book, error: bookError }, { data: pages, error: pagesError }] =
    await Promise.all([
      supabase.from("books").select("*").eq("id", id).single(),
      supabase.from("pages").select("*").eq("book_id", id),
    ]);

  if (bookError) {
    console.error("get book error", bookError);
  }

  if (pagesError) {
    console.error("get book pages error", pagesError);
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
      book: book || null,
      pages: pages || null,
    },
  };
};

const AdminBookPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { book, pages } = props;
  return (
    <Flex direction="column" justify="center" align="center">
      <p style={{ whiteSpace: "pre" }}>
        Book{"\n\n"}
        {JSON.stringify(book, null, 2)}
        {"\n\n"}
        Pages{"\n\n"}
        {JSON.stringify(pages, null, 2)}
      </p>
    </Flex>
  );
};

AdminBookPage.Layout = AdminLayout;

export default AdminBookPage;
