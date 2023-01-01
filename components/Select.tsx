/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { IOption, OptionValue } from "../models/OptionModel";

const MENU_HEIGHT = 24;
const MENU_WIDTH = 200;

interface ISelectProps {
  label?: string | null;
  value: OptionValue;
  onChange: (option: IOption<any>) => void;
  options: IOption[];
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

const List = styled.div`
  top: ${MENU_HEIGHT + 12}px;
  width: ${MENU_WIDTH}px;
  min-height: 24px;
  position: absolute;
  border: 1px solid #121212;
`;

const ListItem = styled.div`
  height: 24px;
  padding: 4px 8px;
  background: #ffffff;
  &:hover {
    background: #dbdbdb;
  }
`;

const ListItemTitle = styled.p`
  font-size: 12px;
  color: black;
`;

const ListValue = styled.p`
  height: 30px;
  width: 200px;
  background: #ffffff;
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
          "Значение не найдено"}
      </ListValue>
      {isOpen && (
        <List>
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
