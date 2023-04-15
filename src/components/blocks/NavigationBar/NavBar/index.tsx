import { GrowingIcon, MenuIcon } from '@components/atoms';
import Link from 'next/link';
import { ReactElement } from 'react';
import * as S from './styles';

interface NavBarProps {
  link: string;
  visible: boolean;
  children?: ReactElement[];
}

const NavBar = ({ link, children, visible }: NavBarProps) => {
  return (
    <S.Container visible={visible}>
      <S.ContentWrap>
        <Link href={link} css={S.Logo}>
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
