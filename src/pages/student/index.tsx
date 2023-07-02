import styled from '@emotion/styled';

import ShortCutSection from '@components/pages/Student/main/ShortcutSection';
import TodoSection from '@components/pages/Student/main/TodoSection';
import { VIEWPORT } from '@constants/app';

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

export default function StudentMain() {
  return (
    <Container>
      <TodoSection />
      <ShortCutSection />
    </Container>
  );
}
