import styled from '@emotion/styled';
import { H1 } from '@styles/typography';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  gap: 12px;
`;

export const Title = styled.span`
  ${H1};
  text-align: center;
`;
