import { useRouter } from "next/router";
import { useState } from "react";
import Flex from "../../../components/Flex";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { langOptions } from "../../../constants/options";
import { supabase } from "../../../helpers/supabase";
import AdminLayout from "../../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../../models/AppModel";
import { IBook, IBookPayload } from "../../../models/BookModel";
import { Locale } from "../../../models/LocaleModel";
import { IOption } from "../../../models/OptionModel";
import { IPagePayload } from "../../../models/PageMode";

interface IForm extends IBookPayload {
  pages: number;
}

const AdminBookAddPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [form, setForm] = useState<IForm>({
    title: "",
    lang: "en",
    pages: 64,
  });

  const generatePagesContent = (book_id: number, pagesLength: number) => {
    const pages: IPagePayload[] = [];
    for (let i = 0; i < pagesLength; i++) {
      const value = i + 1;
      pages.push({ value, book_id, lang: form.lang });
    }
    return pages;
  };

  const createBook = async (): Promise<IBook | null> => {
    const bookPayload: IBookPayload = {
      title: form.title,
      lang: form.lang,
    };
    const { data: book, error: bookError } = await supabase
      .from("books")
      .insert(bookPayload)
      .select()
      .single();
    if (bookError) {
      console.error("failed to insert new book", bookError);
      return null;
    }
    return book as IBook;
  };

  const createPages = async (book_id: number) => {
    const pages = generatePagesContent(book_id, form.pages);
    const { error: pagesError } = await supabase.from("pages").insert(pages);
    if (pagesError) {
      console.error("failed to insert new pages", pagesError);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const book = await createBook();
    if (book) {
      createPages(book.id).then(() => {
        router.push("/admin/books");
      });
    }
  };

  const handleLang = (option: IOption<Locale>) => {
    setForm({ ...form, lang: option.value });
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Form onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Название книги"
          placeholder="Введите название книги"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
        />
        <Input
          id="pages"
          label="Количество страниц"
          type="number"
          placeholder="Введите количество страниц"
          value={form.pages}
          onChange={(event) =>
            setForm({ ...form, pages: Number(event.target.value) })
          }
        />
        <Select
          label="Язык"
          value={form.lang}
          options={langOptions}
          onChange={handleLang}
        />
        <Input type="submit" />
      </Form>
    </Flex>
  );
};

AdminBookAddPage.Layout = AdminLayout;

export default AdminBookAddPage;
