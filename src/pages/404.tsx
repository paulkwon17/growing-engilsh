import { Button } from '@components/atoms';
import styled from '@emotion/styled';
import { H1 } from '@styles/typography';

export default function Page404() {
  return (
    <Styles.Container>
      <Styles.Title>잘못된 경로로 접근하셨습니다.</Styles.Title>
      <Button link="/">메인으로 돌아가기</Button>
    </Styles.Container>
  );
}

const Styles = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    gap: 12px;

    * {
      user-select: none;
    }
  `,
  Title: styled.span`
    ${H1}
    text-align: center;
  `,
};
