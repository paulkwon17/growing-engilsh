import { css } from '@emotion/react';
import Colors from '@styles/colors';
import { Body1 } from '@styles/typography';

export const Container = css`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.toryblue};
  border: none;
  border-radius: 10px;
  color: ${Colors.white01};
  ${Body1}
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.toryblueTint};
    color: ${Colors.toryblue};
  }
  &:disabled {
    background-color: ${Colors.white06};
    color: ${Colors.text05};
    cursor: default;
  }
`;
