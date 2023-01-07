import { FC } from "react";
import styled from "styled-components";

interface IValueProps {
  label?: string | null;
  children: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValueContent = styled.p`
  height: 30px;
  width: 200px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;

const Value: FC<IValueProps> = (props) => {
  const { label = null, children } = props;
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <ValueContent>{children}</ValueContent>
    </Container>
  );
};

export default Value;
