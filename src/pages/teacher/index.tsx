import { VIEWPORT } from '@constants/app';
import styled from '@emotion/styled';

const Container = styled.div`
  width: min(100%, 1920px);
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${VIEWPORT.TABLET}) {
    flex-direction: row;
  }
`;

export default function TeacherMain() {
  return <Container />;
}
