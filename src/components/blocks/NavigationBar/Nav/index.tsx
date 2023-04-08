import { css } from '@emotion/react';
import Colors from '@styles/colors';
import { Body1_B } from '@styles/typography';
import Link from 'next/link';

interface NavProps {
  link: string;
  children: string;
}

export const Nav = ({ link, children }: NavProps) => {
  return (
    <Link href={link} css={styles.container}>
      <span>{children}</span>
    </Link>
  );
};

const styles = {
  container: css`
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
  `,
};
