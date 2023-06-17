/* eslint-disable @typescript-eslint/naming-convention */
import { css } from '@emotion/react';

const bold = 600;
const medium = 400;
const regular = 300;

interface GenerageFontProps {
  fontWeight: number;
  fontSize: number;
  lineHeight?: string;
}
const generateFont = ({ fontWeight, fontSize, lineHeight = '140%' }: GenerageFontProps) => css`
  font-family: 'Pretendard';
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  letter-spacing: -0.5px;
  line-height: ${lineHeight};
`;

export const Title = generateFont({ fontWeight: bold, fontSize: 50 });

export const H1 = generateFont({ fontWeight: bold, fontSize: 26 });
export const H2 = generateFont({ fontWeight: bold, fontSize: 20 });
export const H3 = generateFont({ fontWeight: medium, fontSize: 18 });
export const H3_B = generateFont({ fontWeight: bold, fontSize: 18 });

export const Body1 = generateFont({ fontWeight: medium, fontSize: 16, lineHeight: '160%' });
export const Body1_B = generateFont({ fontWeight: bold, fontSize: 16, lineHeight: '160%' });
export const Body2 = generateFont({ fontWeight: medium, fontSize: 14, lineHeight: '160%' });
export const Body2_B = generateFont({ fontWeight: bold, fontSize: 14, lineHeight: '160%' });

export const Caption1 = generateFont({ fontWeight: regular, fontSize: 13 });
export const Caption1_B = generateFont({ fontWeight: bold, fontSize: 13 });
export const Caption2 = generateFont({ fontWeight: regular, fontSize: 12 });
export const Caption2_B = generateFont({ fontWeight: bold, fontSize: 12 });
