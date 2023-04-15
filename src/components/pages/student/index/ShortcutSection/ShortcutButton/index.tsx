import { QuizIcon } from '@components/atoms';
import Colors from '@styles/colors';
import Link from 'next/link';
import { ReactElement } from 'react';
import * as S from './style';

interface ShortucutButtonProps {
  link: string;
  icon: ReactElement;
  text: string;
}

const ShortcutButton = ({ link, icon, text }: ShortucutButtonProps) => {
  return (
    <Link css={S.Container} href={link}>
      <S.Icon>{icon}</S.Icon>
      <S.ButtonText>{text}</S.ButtonText>
    </Link>
  );
};

export default ShortcutButton;
