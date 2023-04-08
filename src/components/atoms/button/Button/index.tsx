import Link from 'next/link';
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
  link?: string;
}

export const Button = ({
  children,
  onClick = () => {},
  link,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return link && !disabled ? (
    <Link css={S.Container} href={link}>
      {children}
    </Link>
  ) : (
    <button css={S.Container} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
