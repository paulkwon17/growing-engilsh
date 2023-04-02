import Logo from '@components/atoms/Logo';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { H1, H2, Title } from '@styles/typography';

export default function Home() {
  return (
    <Styles.Container>
      <Styles.TitleContainer>
        <Styles.LogoContainer>
          <Logo />
        </Styles.LogoContainer>
      </Styles.TitleContainer>
    </Styles.Container>
  );
}

const Styles = {
  Container: styled.div``,
  TitleContainer: styled.div`
    padding: 200px 50px;
    height: 2000px;
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
    top: 0;
    gap: 5px;
  `,
  Title: css({
    ...Title,
  }),
  SubTitle: css({
    ...H1,
  }),
};
