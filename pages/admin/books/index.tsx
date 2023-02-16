import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import BookItem from "../../../components/BookItem";
import Flex from "../../../components/Flex";
import { getSession } from "../../../helpers/session";
import AdminLayout from "../../../layouts/AdminLayout";
import { IPageProps, NextPageWithLayout } from "../../../models/AppModel";
import { IBook } from "../../../models/BookModel";

interface IAdminBooksPageProps extends IPageProps {
  books: IBook[];
}

export const getServerSideProps: GetServerSideProps<
  IAdminBooksPageProps
> = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const session = await getSession(ctx);
  const { data: books, error } = await supabase.from("books").select("*");

  if (error) {
    console.error("get books error", error);
  }

  return {
    props: {
      ...session,
      books: books || [],
    },
  };
};

const AdminBooksPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { books } = props;
  return (
    <Flex direction="column" justify="center" align="center">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </Flex>
  );
};

AdminBooksPage.Layout = AdminLayout;

export default AdminBooksPage;
