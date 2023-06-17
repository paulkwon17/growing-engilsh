import Link from 'next/link';

import { VIEWPORT } from '@constants/app';
import styled from '@emotion/styled';
import Colors from '@styles/colors';

export const Container = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  position: fixed;
  padding: 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  top: ${({ visible }) => (visible ? '0px' : '-50px')};
  background-color: ${Colors.button05};
  transition: 0.5s top ease-in-out;
`;

export const ContentWrap = styled.div`
  width: min(100%, 1024px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  width: 25px;
  height: 100%;
  cursor: pointer;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (${VIEWPORT.TABLET}) {
    display: flex;
  }
`;

export const Menu = styled.div`
  width: 25px;
  height: 100%;
  cursor: pointer;

  path {
    fill: ${Colors.text02};
  }

  &:hover {
    path {
      fill: ${Colors.text01};
    }
  }
`;
