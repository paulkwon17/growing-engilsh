import { useCallback, useEffect, useState } from 'react';

import { BulbOnIcon, SettingIcon, TimerIcon } from '@components/atoms';
import { WORD_INTERVAL } from '@constants/app/word';
import { useIsMobile } from '@hooks';
import Colors from '@styles/colors';
import { Word } from '@type/app';

import * as S from './style';

interface WordLayoutProps {
  wordList?: Word[];
}

const defaultWord: Word = { eng: 'Please set word set.', kor: '세트를 설정해주세요.' };

export default function WordLayout({ wordList = undefined }: WordLayoutProps) {
  const [innerHeight, setInnerHeight] = useState<string | number>('100vh');
  const [word, setWord] = useState<Word>(defaultWord);
  const [language, setLangauge] = useState<0 | 1>(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [isShowAnswerText, setIsShowAnswerText] = useState(false);
  const [isInterval, setIsInterval] = useState(false);
  const handleInterval = () => {
    setIsInterval((prev) => !prev);
  };
  const [nowTime, setNowTime] = useState(0);
  const nowTimeString = () => {
    switch (nowTime) {
      case 0:
        return '-';
      case 1:
      case 5:
        return String(WORD_INTERVAL[nowTime]);
      default:
        return `${WORD_INTERVAL[nowTime]}.0`;
    }
  };
  const handleNowTime = () => {
    if (nowTime === 5) {
      setNowTime(0);
      return;
    }
    setNowTime((prev) => prev + 1);
  };
  const { isMobile } = useIsMobile();

  const handleWord = useCallback(
    (nowWord?: Word) => {
      if (!wordList) {
        return;
      }
      if (!nowWord) {
        setWord(wordList[0]);
      }

      let newWord: Word = defaultWord;
      const wordListLength = wordList.length;

      while (newWord === defaultWord || nowWord === newWord) {
        const randomWordIndex = Math.round(Math.random() * (wordListLength - 1));
        newWord = wordList[randomWordIndex];
      }

      setLangauge(Math.round(Math.random()) ? 1 : 0);
      setWord(newWord);
    },
    [wordList],
  );

  const handleQuizContainer = () => {
    if (!nowTime) {
      handleWord(word);
      return;
    }
    handleInterval();
  };

  const handleAnswer = () => {
    setIsShowAnswer((prev) => !prev);
  };

  const isLongWordInMobile = (nowWord: string) => {
    return nowWord.length > 15 && isMobile();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleWord(word);
    }, WORD_INTERVAL[nowTime] * 1000);
    if (!isInterval) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isInterval, handleWord, nowTime, word]);

  useEffect(() => {
    if (isMobile()) {
      setInnerHeight(window.innerHeight);
      return;
    }
    setInnerHeight('100vh');
  }, [isMobile]);

  useEffect(() => {
    if (!wordList) {
      return;
    }
    handleWord();
  }, [wordList, handleWord]);

  useEffect(() => {
    if (!isShowAnswer) {
      setIsShowAnswerText((prev) => !prev);
      return;
    }
    setTimeout(() => {
      setIsShowAnswerText((prev) => !prev);
    }, 200);
  }, [isShowAnswer]);

  return (
    <S.Container innerHeight={innerHeight}>
      <S.TopContainer>
        <S.TimerContainer>
          <S.TimerButton
            onClick={handleNowTime}
            disabled={isInterval}
            time={WORD_INTERVAL[nowTime]}
          />
          <TimerIcon color={isInterval ? Colors.white06 : Colors.black01} />
          <div className="timerText">{nowTimeString()}</div>
        </S.TimerContainer>
        <SettingIcon size={32} color={Colors.black01} />
      </S.TopContainer>
      <S.QuizContainer onClick={handleQuizContainer}>
        <S.QuestionFont isLongWordInMobile={isLongWordInMobile(word[language ? 'kor' : 'eng'])}>
          {word[language ? 'kor' : 'eng']}
        </S.QuestionFont>
      </S.QuizContainer>

      <S.BottomContainer>
        <S.AnswerContainer
          isShowAnswer={isShowAnswer}
          isShowAnswerText={isShowAnswerText}
          onClick={handleAnswer}
        >
          {isShowAnswerText ? (
            <S.AnswerFont isLongWordInMobile={isLongWordInMobile(word[language ? 'eng' : 'kor'])}>
              {word[language ? 'eng' : 'kor']}
            </S.AnswerFont>
          ) : (
            <BulbOnIcon color={Colors.white01} />
          )}
        </S.AnswerContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
