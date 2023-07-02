import styled from '@emotion/styled';

import Colors from '@styles/colors';
import { Body1 } from '@styles/typography';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}

const Container = styled.button`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.growingBlue};
  border: none;
  border-radius: 10px;
  color: ${Colors.white01};
  ${Body1}
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.growingBlueTint};
    color: ${Colors.growingBlue};
  }
  &:disabled {
    background-color: ${Colors.white06};
    color: ${Colors.text05};
    cursor: default;
  }
`;

export default function Button({
  children,
  onClick = () => {},
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Container disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}
