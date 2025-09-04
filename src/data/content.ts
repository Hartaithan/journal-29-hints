import type { Content } from "../models/book";

export const content: Content = {
  books: [
    {
      slug: "journal-29",
      title: { en: "Journal 29", ru: "Дневник 29" },
      pages: [
        {
          slug: 1,
          hints: [
            {
              en: { title: "Hint 1", content: "Hint 1 content" },
              ru: { title: "Подсказка 1", content: "Контент подсказки 1" },
            },
          ],
        },
      ],
    },
  ],
};
