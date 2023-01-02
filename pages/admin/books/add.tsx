import { useRouter } from "next/router";
import { useState } from "react";
import Flex from "../../../components/Flex";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { supabase } from "../../../helpers/supabase";
import AdminLayout from "../../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../../models/AppModel";
import { IBookPayload } from "../../../models/BookModel";
import { Locale } from "../../../models/LocaleModel";
import { IOption } from "../../../models/OptionModel";

interface IForm extends IBookPayload {
  pages: number;
}

const langOptions: IOption<Locale>[] = [
  { id: 1, label: "Русский", value: "ru" },
  { id: 2, label: "English", value: "en" },
];

const AdminBookAddPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [form, setForm] = useState<IForm>({
    title: "",
    lang: "en",
    pages: 64,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookPayload: IBookPayload = {
      title: form.title,
      lang: form.lang,
    };
    const { error } = await supabase.from("books").insert([bookPayload]);
    if (error) {
      console.error("failed to insert new book", error);
    }
    router.push("/admin/books");
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
