import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import PageItem from "../../../components/PageItem";
import Select from "../../../components/Select";
import Value from "../../../components/Value";
import { langOptions } from "../../../constants/options";
import AdminLayout from "../../../layouts/AdminLayout";
import { books } from "../../../locales/book";
import { main } from "../../../locales/main";
import { IPageProps, NextPageWithLayout } from "../../../models/AppModel";
import { IBook, IBookPayload } from "../../../models/BookModel";
import { Locale } from "../../../models/LocaleModel";
import { IOption } from "../../../models/OptionModel";
import { IPage } from "../../../models/PageMode";

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
  const router = useRouter();
  const locale = router.locale || "ru";
  const supabase = createBrowserSupabaseClient();
  const [form, setForm] = useState<IBookPayload>({
    title: book?.title ?? "",
    lang: book?.lang ?? "en",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!book) {
      console.error("book not found");
      return null;
    }
    const bookPayload: IBookPayload = {
      title: form.title,
      lang: form.lang,
    };
    const { data: editedBook, error: bookError } = await supabase
      .from("books")
      .update(bookPayload)
      .eq("id", book.id)
      .select()
      .single();
    if (bookError) {
      console.error("failed to edit existed book", bookError);
    }
    setForm((prev) => ({ ...prev, ...editedBook }));
    return editedBook;
  };

  const handleLang = (option: IOption<Locale>) => {
    setForm((prev) => ({ ...prev, lang: option.value }));
  };

  const sortedPages: IPage[] = useMemo(() => {
    if (!pages) return [];
    const sorted = [...pages].sort((a, b) => a.value - b.value);
    return sorted;
  }, [pages]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={form.title}
        label={books[locale].inputs.title.label}
        placeholder={books[locale].inputs.title.placeholder}
        onChange={(event) => setForm({ ...form, title: event.target.value })}
      />
      <Select
        label={books[locale].inputs.lang.label}
        value={form.lang}
        options={langOptions}
        onChange={handleLang}
      />
      {book && book.created_at && (
        <Value label={books[locale].inputs.created_at.label}>
          {new Date(book.created_at).toLocaleString()}
        </Value>
      )}
      {book && book.updated_at && (
        <Value label={books[locale].inputs.updated_at.label}>
          {new Date(book.updated_at).toLocaleString()}
        </Value>
      )}
      <Input type="submit" value={main[locale].submit} />
      {sortedPages.map((page) => (
        <PageItem key={page.id} page={page} />
      ))}
    </Form>
  );
};

AdminBookPage.Layout = AdminLayout;

export default AdminBookPage;
