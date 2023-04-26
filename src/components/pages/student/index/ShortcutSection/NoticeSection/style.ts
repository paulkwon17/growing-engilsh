import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Body2, H3_B } from '@styles/typography';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${Colors.button02};
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  ${H3_B};
  color: ${Colors.text01};
`;

export const More = styled.span`
  ${Body2};
  color: ${Colors.text03};
`;
