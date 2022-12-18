import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { IBook } from "../models/BookModel";
import LanguageBadge from "./LanguageBadge";
import Title from "./Title";

interface IBookItemProps {
  book: IBook;
}

const Container = styled.div`
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const BookItem: FC<IBookItemProps> = (props) => {
  const { book } = props;
  const { id, title, lang } = book;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/books/${id}`);
  };

  return (
    <Container onClick={() => handleClick()}>
      <Title fontSize={10} fontWeight={400}>
        {title}
      </Title>
      <LanguageBadge lang={lang} />
    </Container>
  );
};

export default BookItem;
