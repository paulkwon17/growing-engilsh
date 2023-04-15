import { QuizIcon, ReadingIcon, WordIcon } from '@components/atoms';
import Colors from '@styles/colors';
import ShortcutButton from './ShortcutButton';
import * as S from './style';

const SHORTCUT_LIST = [
  { link: '/student/quiz', icon: <QuizIcon color={Colors.toryblue} />, text: 'Quiz' },
  { link: '/student/voca', icon: <WordIcon color={Colors.toryblue} />, text: 'Voca' },
  { link: '/student/reading', icon: <ReadingIcon color={Colors.toryblue} />, text: 'Reading' },
];

const ShortCutSection = () => {
  return (
    <S.Container>
      <S.ShortcutContainer>
        {SHORTCUT_LIST.map((shortcut) => (
          <ShortcutButton key={shortcut.text} {...shortcut} />
        ))}
      </S.ShortcutContainer>
    </S.Container>
  );
};

export default ShortCutSection;
