import Link from 'next/link';

import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Body1_B } from '@styles/typography';

export const Container = styled(Link)`
  flex: 1;
  padding-top: 8px;
  height: 120px;
  border-radius: 10px;
  background-color: ${Colors.button04};
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.button03};
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
`;

export const ButtonText = styled.span`
  ${Body1_B};
  color: ${Colors.text02};
  text-align: center;
`;
