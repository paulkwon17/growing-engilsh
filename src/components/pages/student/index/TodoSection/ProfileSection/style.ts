import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { H1 } from '@styles/typography';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${Colors.button02};
  border-radius: 10px;
`;

export const Name = styled.span`
  ${H1}

  color: ${Colors.text01};
`;

export const RemainNumberContainer = styled.div`
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Todo = styled.div`
  width: 24px;
  height: 24px;
`;

export const RemainNumber = styled.span`
  ${H1}
  color: ${Colors.toryblue};
`;
