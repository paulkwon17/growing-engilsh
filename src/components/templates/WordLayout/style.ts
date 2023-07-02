import styled from '@emotion/styled';

import Colors from '@styles/colors';
import { H1, H3, H3_B, HeadLine } from '@styles/typography';

export const Container = styled.div<{ innerHeight: string | number }>`
  width: 100%;
  height: ${({ innerHeight }) =>
    typeof innerHeight === 'string' ? innerHeight : `${innerHeight}px`};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white01};
  gap: 8px;
`;

export const QuizContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.black01};
  box-shadow: 0px 0px 12px ${Colors.black01};
  border-radius: 20px;
  padding: 24px;
  border: none;

  &:active {
    width: calc(100% - 2px);
    height: calc(90% - 2px);
    padding: 23px;
    margin: 1px;
  }
`;
export const ContentContainer = styled.div``;

export const TopContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  gap: 8px;
`;

export const TimerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${Colors.black01};

  svg {
    position: absolute;
    left: 8px;
  }

  .timerText {
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${Colors.black01};
    ${H3};
  }
`;

export const TimerButton = styled.button<{ time: number }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid ${Colors.black01};

  background-color: ${`${Colors.white01}05`};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s all ease;
  z-index: 2;

  &:active {
    background-color: ${`${Colors.white06}33`};
  }

  &:disabled {
    border: 2px solid ${Colors.white06};
    background-color: ${`${Colors.white04}33`};

    border-top-color: ${Colors.growingBlueShade};

    animation: spin ${({ time }) => time}s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(315deg);
    }
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: end;
  gap: 8px;
  position: absolute;
  padding: 0 48px;
  bottom: 48px;
`;

export const AnswerContainer = styled.div<{ isShowAnswer: boolean; isShowAnswerText: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ isShowAnswer }) => (isShowAnswer ? '100%' : 'min(6vh, 40px)')};
  height: ${({ isShowAnswerText }) => (isShowAnswerText ? 'auto' : 'min(6vh, 40px)')};
  border-radius: min(3vh, 20px);
  border: 2px solid ${({ isShowAnswer }) => (isShowAnswer ? Colors.black01 : Colors.white01)};
  transition: 0.2s all ease;
`;

export const AnswerFont = styled.span<{ isLongWordInMobile: boolean }>`
  flex: 1;
  text-align: center;
  word-break: keep-all;
  color: ${Colors.white01};
  ${({ isLongWordInMobile }) => (isLongWordInMobile ? H3_B : H1)};
`;

export const QuestionFont = styled.span<{ isLongWordInMobile: boolean }>`
  color: ${Colors.white01};
  text-align: center;
  word-break: keep-all;
  ${({ isLongWordInMobile }) => (isLongWordInMobile ? H1 : HeadLine)};
`;
