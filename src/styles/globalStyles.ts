import { css } from '@emotion/react';

interface GlobalStyleProps {
  scrollBlock?: boolean;
}

const globalStyles = ({ scrollBlock }: GlobalStyleProps) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
    ${scrollBlock ? 'overflow: hidden' : ''};
  }
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export default globalStyles;
