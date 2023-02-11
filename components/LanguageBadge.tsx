import { FC } from "react";
import styled from "styled-components";
import { Locale } from "../models/LocaleModel";

interface ILanguageBadgeProps {
  lang: Locale;
}

const Badge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white}33;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 10px;
`;

const Value = styled.p`
  text-transform: uppercase;
  font-size: 10px;
`;

const LanguageBadge: FC<ILanguageBadgeProps> = ({ lang }) => (
  <Badge>
    <Value>{lang}</Value>
  </Badge>
);

export default LanguageBadge;
