import { QuizIcon, ReadingIcon, WordIcon } from '@components/atoms';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import Colors from '@styles/colors';
import NoticeSection from './NoticeSection';
import ShortcutButton from './ShortcutButton';
import * as S from './style';

const SHORTCUT_LIST = [
  { link: '/student/quiz', icon: <QuizIcon color={Colors.toryblue} />, text: 'Quiz' },
  { link: '/student/voca', icon: <WordIcon color={Colors.toryblue} />, text: 'Voca' },
  { link: '/student/reading', icon: <ReadingIcon color={Colors.toryblue} />, text: 'Reading' },
];

interface ShortCutSection {
  results: (PageObjectResponse | PartialPageObjectResponse)[];
}

const ShortCutSection = ({ results }: ShortCutSection) => {
  return (
    <S.Container>
      <S.ShortcutContainer>
        {SHORTCUT_LIST.map((shortcut) => (
          <ShortcutButton key={shortcut.text} {...shortcut} />
        ))}
      </S.ShortcutContainer>
      <NoticeSection results={results} />
    </S.Container>
  );
};

export default ShortCutSection;
