import WordLayout from '@components/templates/WordLayout';
import { SAMPLE_WORD_LIST } from '@constants/app/word';

export default function Word() {
  return <WordLayout wordList={SAMPLE_WORD_LIST} />;
}
