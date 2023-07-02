import { QuizIcon, ReadingIcon, WordIcon } from '@components/atoms';
import Colors from '@styles/colors';

import ShortcutButton from './ShortcutButton';
import * as S from './style';

const SHORTCUT_LIST = [
  { link: '/student/quiz', icon: <QuizIcon color={Colors.growingBlue} />, text: 'Quiz' },
  { link: '/student/word', icon: <WordIcon color={Colors.growingBlue} />, text: 'Word' },
  { link: '/student/reading', icon: <ReadingIcon color={Colors.growingBlue} />, text: 'Reading' },
];

function ShortCutSection() {
  return (
    <S.Container>
      <S.ShortcutContainer>
        {SHORTCUT_LIST.map((shortcut) => (
          <ShortcutButton key={shortcut.text} {...shortcut} />
        ))}
      </S.ShortcutContainer>
      {/* <NoticeSection results={results} /> */}
    </S.Container>
  );
}

export default ShortCutSection;
