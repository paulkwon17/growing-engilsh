import { ReactElement } from 'react';

import * as S from './style';

interface ShortucutButtonProps {
  link: string;
  icon: ReactElement;
  text: string;
}

function ShortcutButton({ link, icon, text }: ShortucutButtonProps) {
  return (
    <S.Container href={link}>
      <S.Icon>{icon}</S.Icon>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Container>
  );
}

export default ShortcutButton;
