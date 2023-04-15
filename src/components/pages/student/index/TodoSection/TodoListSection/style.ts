import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Body1, Body2, H1 } from '@styles/typography';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${Colors.button02};
  border-radius: 10px;

  div {
    border-bottom: 1px solid ${Colors.button02};
  }

  div:last-child {
    border-bottom: none;
  }
`;

export const ItemContainer = styled.div<{ head?: boolean }>`
  width: 100%;
  padding: 12px 0px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${({ head }) => (head ? Colors.text04 : Colors.text03)};
  ${({ head }) => (head ? Body2 : Body1)};
`;

export const CheckText = styled.span<{ head?: boolean }>`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${({ head }) => (head ? 'default' : 'pointer')};

  svg {
    width: 25px;
  }

  &:hover {
    path {
      fill: ${Colors.text01};
    }
  }
`;

export const TodoText = styled.span<{ head?: boolean }>`
  width: 65%;
  display: flex;
  justify-content: ${({ head }) => (head ? 'center' : 'start')};
  align-items: center;
`;

export const DeadlineText = styled.span`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
