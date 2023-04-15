import { VIEWPORT } from '@constants/app/viewport';
import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Body1, H1 } from '@styles/typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  * {
    user-select: none;
  }
`;
