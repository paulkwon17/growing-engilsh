import { VIEWPORT } from '@constants/app/viewport';
import styled from '@emotion/styled';

export default function TeacherMain() {
  return <Styles.Container></Styles.Container>;
}

const Styles = {
  Container: styled.div`
    width: min(100%, 1920px);
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (${VIEWPORT.TABLET}) {
      flex-direction: row;
    }
  `,
};
