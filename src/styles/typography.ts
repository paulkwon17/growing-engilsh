/* eslint-disable @typescript-eslint/naming-convention */
import { css } from '@emotion/react';
import localFont from 'next/font/local';

const bold = 700;
const medium = 500;
const regular = 400;

interface GenerageFontProps {
  fontWeight: number;
  fontSize: number | string;
  lineHeight?: string;
}

export const fontConfig = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Pretendard-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

const generateFont = ({ fontWeight, fontSize, lineHeight = '140%' }: GenerageFontProps) => css`
  font-weight: ${fontWeight};
  font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
  letter-spacing: -0.5px;
  line-height: ${lineHeight};
`;

export const HeadLine = generateFont({ fontWeight: bold, fontSize: '12vmin' });
export const Title = generateFont({ fontWeight: bold, fontSize: 50 });

export const H1 = generateFont({ fontWeight: bold, fontSize: 26 });
export const H2 = generateFont({ fontWeight: bold, fontSize: 20 });
export const H3 = generateFont({ fontWeight: medium, fontSize: 18 });
export const H3_B = generateFont({ fontWeight: bold, fontSize: 18 });

export const Body1 = generateFont({ fontWeight: regular, fontSize: 16, lineHeight: '160%' });
export const Body1_B = generateFont({ fontWeight: bold, fontSize: 16, lineHeight: '160%' });
export const Body2 = generateFont({ fontWeight: regular, fontSize: 14, lineHeight: '160%' });
export const Body2_B = generateFont({ fontWeight: bold, fontSize: 14, lineHeight: '160%' });

export const Caption1 = generateFont({ fontWeight: regular, fontSize: 13 });
export const Caption1_B = generateFont({ fontWeight: bold, fontSize: 13 });
export const Caption2 = generateFont({ fontWeight: regular, fontSize: 12 });
export const Caption2_B = generateFont({ fontWeight: bold, fontSize: 12 });
