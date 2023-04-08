import { GrowingIcon, MenuIcon } from '@components/atoms';
import Link from 'next/link';
import { ReactElement } from 'react';
import * as S from './styles';

interface NavBarProps {
  visible: boolean;
  children?: ReactElement[];
}

const NavBar = ({ children, visible }: NavBarProps) => {
  return (
    <S.Container visible={visible}>
      <S.ContentWrap>
        <Link href="/" css={S.Logo}>
          <GrowingIcon />
        </Link>
        {children && <S.NavContainer>{children}</S.NavContainer>}
        <S.Menu>
          <MenuIcon />
        </S.Menu>
      </S.ContentWrap>
    </S.Container>
  );
};

export default NavBar;
