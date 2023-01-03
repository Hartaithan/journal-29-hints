// import { useRouter } from "next/router";
import { useState } from "react";
import Flex from "../../../components/Flex";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
// import { supabase } from "../../../helpers/supabase";
import AdminLayout from "../../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../../models/AppModel";
import { IBookPayload } from "../../../models/BookModel";
import { Locale } from "../../../models/LocaleModel";
import { IOption } from "../../../models/OptionModel";
import { IPagePayload } from "../../../models/PageMode";

interface IForm extends IBookPayload {
  pages: number;
}

const langOptions: IOption<Locale>[] = [
  { id: 1, label: "Русский", value: "ru" },
  { id: 2, label: "English", value: "en" },
];

const AdminBookAddPage: NextPageWithLayout = () => {
  // const router = useRouter();
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookPayload: IBookPayload = {
      title: form.title,
      lang: form.lang,
    };
    console.info(JSON.stringify(bookPayload, null, 2));
    // const { error } = await supabase.from("books").insert([bookPayload]);
    // if (error) {
    //   console.error("failed to insert new book", error);
    // }
    const pages = generatePagesContent(1, form.pages);
    console.info(JSON.stringify(pages, null, 2));
    // const {error} = await supabase.from('pages').insert(pages)
    // router.push("/admin");
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
