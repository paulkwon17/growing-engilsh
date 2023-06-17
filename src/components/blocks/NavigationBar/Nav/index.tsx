import Link from 'next/link';

import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Body1_B } from '@styles/typography';

interface NavProps {
  link: string;
  children: string;
}

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  span {
    ${Body1_B}
    color: ${Colors.text02};
  }

  &:hover {
    span {
      ${Body1_B}
      color: ${Colors.text01};
    }
  }
`;

export default function Nav({ link, children }: NavProps) {
  return (
    <Container href={link}>
      <span>{children}</span>
    </Container>
  );
}
