import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { BulbIcon, BulbOnIcon } from '@components/atoms';
import Colors from '@styles/colors';

interface BulbProps extends HTMLAttributes<HTMLDivElement> {
  state: boolean;
}

const Container = styled.div`
  width: min(6vh, 40px);
  height: min(6vh, 40px);
  border-radius: min(3vh, 20px);
  border: 2px solid ${Colors.black01};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Bulb({ state, ...rest }: BulbProps) {
  return <Container {...rest}>{state ? <BulbOnIcon /> : <BulbIcon />}</Container>;
}
