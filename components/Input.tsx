import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
}

interface IStyledInputProps {
  isButton: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<IStyledInputProps>`
  height: 30px;
  width: 200px;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 12px;
  padding: 8px 12px;
  cursor: ${({ isButton }) => (isButton ? "pointer" : "default")};
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;

const Input: FC<IInputProps> = (props) => {
  const { label = null, ...rest } = props;
  const buttonTypes: IInputProps["type"][] = ["button", "submit"];
  return (
    <Container>
      {label && <Label id={rest.id}>{label}</Label>}
      <StyledInput {...rest} isButton={buttonTypes.includes(rest.type)} />
    </Container>
  );
};

export default Input;
