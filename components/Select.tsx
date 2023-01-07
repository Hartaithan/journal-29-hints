/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { main } from "../locales/main";
import { IOption, OptionValue } from "../models/OptionModel";

const MENU_HEIGHT = 24;
const MENU_WIDTH = 200;

interface ISelectProps {
  label?: string | null;
  value: OptionValue;
  onChange: (option: IOption<any>) => void;
  options: IOption[];
}

interface IListProps {
  withLabel: boolean;
}

const Container = styled.div`
  position: relative;
  min-height: ${MENU_HEIGHT}px;
  width: ${MENU_WIDTH}px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const List = styled.div<IListProps>`
  top: ${({ withLabel }) => `${MENU_HEIGHT + 12 + (withLabel ? 23 : 0)}px`};
  width: ${MENU_WIDTH}px;
  min-height: 24px;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

const ListItem = styled.div`
  height: 24px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.white};
  &:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
`;

const ListItemTitle = styled.p`
  font-size: 12px;
  color: black;
`;

const ListValue = styled.p`
  height: 30px;
  width: 200px;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  color: black;
  margin-bottom: 12px;
  padding: 8px 12px;
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;

const Select: FC<ISelectProps> = (props) => {
  const { label = null, value, onChange, options } = props;
  const router = useRouter();
  const locale = router.locale || "ru";
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const closeList = () => {
    setOpen(false);
  };

  const toggleList = () => {
    setOpen(!isOpen);
  };

  const handleItemClick = (option: IOption<any>) => {
    onChange(option);
    closeList();
  };

  const handleClickOutside = () => {
    closeList();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Container ref={ref} onClick={toggleList}>
      {label && <Label>{label}</Label>}
      <ListValue>
        {options.find((option) => option.value === value)?.label ||
          main[locale].notFound}
      </ListValue>
      {isOpen && (
        <List withLabel={!!label}>
          {options.map((option) => (
            <ListItem key={option.id} onClick={() => handleItemClick(option)}>
              <ListItemTitle>{option.label}</ListItemTitle>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Select;
