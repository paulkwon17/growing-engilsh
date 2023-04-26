import { getNotionDatabase } from '@api/notion';
import ShortCutSection from '@components/pages/student/index/ShortcutSection';
import { TodoSection } from '@components/pages/student/index/TodoSection';
import { VIEWPORT } from '@constants/app/viewport';
import styled from '@emotion/styled';
import { InferGetStaticPropsType } from 'next';

export default function StudentMain({ results }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Styles.Container>
      <TodoSection />
      <ShortCutSection results={results} />
    </Styles.Container>
  );
}

export const getStaticProps = async () => {
  const { NOTION_NOTICE_DATABASE_ID } = process.env;
  return await getNotionDatabase(NOTION_NOTICE_DATABASE_ID);
};

const Styles = {
  Container: styled.div`
    width: min(100%, 1920px);
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (${VIEWPORT.TABLET}) {
      flex-direction: row;
    }
  `,
};
