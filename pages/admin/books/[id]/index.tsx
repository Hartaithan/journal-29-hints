import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useMemo } from "react";
import Flex from "../../../../components/Flex";
import PageItem from "../../../../components/PageItem";
import Value from "../../../../components/Value";
import { langOptions } from "../../../../constants/options";
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

  const langLabel = useMemo(() => {
    if (!book) return null;
    const route = langOptions.find((lang) => lang.value === book?.lang);
    return route?.label || null;
  }, [book]);

  const sortedPages: IPage[] = useMemo(() => {
    if (!pages) return [];
    const sorted = [...pages].sort((a, b) => a.value - b.value);
    return sorted;
  }, [pages]);

  return (
    <Flex direction="column" justify="center" align="center">
      {book && <Value label="Название">{book.title}</Value>}
      {langLabel && <Value label="Язык">{langLabel}</Value>}
      {book && book.created_at && (
        <Value label="Создано">
          {new Date(book.created_at).toLocaleString()}
        </Value>
      )}
      {book && book.updated_at && (
        <Value label="Обновлено">
          {new Date(book.updated_at).toLocaleString()}
        </Value>
      )}
      {sortedPages.map((page) => (
        <PageItem key={page.id} page={page} />
      ))}
    </Flex>
  );
};

AdminBookPage.Layout = AdminLayout;

export default AdminBookPage;
