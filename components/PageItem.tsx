import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { pages } from "../locales/page";
import { IPage } from "../models/PageMode";
import Title from "./Title";

interface IPageItemProps {
  page: IPage;
}

const Container = styled.div`
  min-height: 36px;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const PageItem: FC<IPageItemProps> = (props) => {
  const { page } = props;
  const { id, value, book_id } = page;
  const router = useRouter();
  const locale = router.locale || "ru";

  const handleClick = () => {
    router.push(`/admin/books/${book_id}/pages/${id}`);
  };

  return (
    <Container onClick={() => handleClick()}>
      <Title fontSize={14} fontWeight={400}>
        {pages[locale].page}: {value}
      </Title>
    </Container>
  );
};

export default PageItem;
