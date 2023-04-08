import styled from '@emotion/styled';
import Colors from '@styles/colors';
import { Caption2, Caption2_B } from '@styles/typography';

export const Footer = () => {
  return (
    <Styles.Container>
      <span>CopyrightⒸ {new Date().getFullYear()} All right reserved by Growing English</span>
    </Styles.Container>
  );
};

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-align: center;

    span {
      ${Caption2_B}
      color: ${Colors.text03}
    }
  `,
};
