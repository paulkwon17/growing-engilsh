import { Button } from '@components/atoms/button';
import { GrowingLogo } from '@components/atoms/logo';
import { VIEWPORT } from '@constants/app/viewport';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Styles.Container>
      <Styles.LogoContainer>
        <GrowingLogo />
        <Styles.ButtonContainer>
          <Button link="student">학생용 페이지</Button>
          <Button link="teacher">교사용 페이지</Button>
        </Styles.ButtonContainer>
      </Styles.LogoContainer>
    </Styles.Container>
  );
}

const Styles = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    padding: 200px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `,
  LogoContainer: styled.div`
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
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (${VIEWPORT.TABLET}) {
      flex-direction: row;
    }
  `,
};
