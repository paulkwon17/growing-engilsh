import Colors from '@styles/colors';
import { IconProps } from '@type/app';

export default function AIcon({ color = Colors.black01 }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M28.216 35.543h7.431l-3.666-11.418z" fill={color} />
      <path
        d="M32 2C15.432 2 2 15.431 2 32c0 16.569 13.432 30 30 30s30-13.432 30-30C62 15.431 48.568 2 32 2m7.167 44.508l-1.914-5.965H26.567L24.6 46.508h-6.342l10.358-29.016h6.859l10.266 29.016h-6.574"
        fill={color}
      />
    </svg>
  );
}
