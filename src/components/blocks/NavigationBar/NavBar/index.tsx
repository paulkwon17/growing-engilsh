import { ReactElement } from 'react';

import { GrowingIcon, MenuIcon } from '@components/atoms';

import * as S from './styles';

interface NavBarProps {
  link: string;
  visible: boolean;
  children?: ReactElement[];
}

export default function NavBar({ link, children = undefined, visible }: NavBarProps) {
  return (
    <S.Container visible={visible}>
      <S.ContentWrap>
        <S.Logo href={link}>
          <GrowingIcon />
        </S.Logo>
        {children && <S.NavContainer>{children}</S.NavContainer>}
        <S.Menu>
          <MenuIcon />
        </S.Menu>
      </S.ContentWrap>
    </S.Container>
  );
}
