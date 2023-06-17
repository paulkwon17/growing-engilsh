import { VIEWPORT } from '@constants/app';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 200px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const LogoContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 30px;
  gap: 30px;

  svg {
    width: min(100%, 779px);
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (${VIEWPORT.TABLET}) {
    flex-direction: row;
  }
`;
