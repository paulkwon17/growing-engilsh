import styled from '@emotion/styled';

import Colors from '@styles/colors';
import { Caption2 } from '@styles/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: center;

  span {
    ${Caption2}
    color: ${Colors.text03}
  }
`;

export default function Footer({ hidden }: { hidden: boolean }) {
  if (hidden) {
    return null;
  }
  return (
    <Container>
      <span>CopyrightⒸ {new Date().getFullYear()} All right reserved by Growing English</span>
    </Container>
  );
}
