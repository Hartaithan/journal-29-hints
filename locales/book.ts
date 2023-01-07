import { Locale } from "../models/LocaleModel";

const template = {
  book: "",
  books: "",
  inputs: {
    title: {
      label: "",
      placeholder: "",
    },
    pages: {
      label: "",
      placeholder: "",
    },
    lang: {
      label: "",
      placeholder: "",
    },
    created_at: {
      label: "",
      placeholder: "",
    },
    updated_at: {
      label: "",
      placeholder: "",
    },
  },
};

export type BooksLocales = typeof template;

export interface ILocaleObject {
  [key: Locale | string]: BooksLocales;
}

export const books: ILocaleObject = {
  en: {
    ...template,
    book: "Book",
    books: "Books",
    inputs: {
      title: {
        label: "Book title",
        placeholder: "Enter title of book",
      },
      pages: {
        label: "Number of pages",
        placeholder: "Enter the number of pages",
      },
      lang: {
        label: "Language",
        placeholder: "Choose language",
      },
      created_at: {
        label: "Created at",
        placeholder: "Enter the creation date",
      },
      updated_at: {
        label: "Updated at",
        placeholder: "Enter the update date",
      },
    },
  },
  ru: {
    ...template,
    book: "Книга",
    books: "Книги",
    inputs: {
      title: {
        label: "Название книги",
        placeholder: "Введите название книги",
      },
      pages: {
        label: "Количество страниц",
        placeholder: "Введите количество страниц",
      },
      lang: {
        label: "Язык",
        placeholder: "Выберите язык",
      },
      created_at: {
        label: "Создано",
        placeholder: "Введите дату создания",
      },
      updated_at: {
        label: "Обновлено",
        placeholder: "Введите дату обновления",
      },
    },
  },
};
