import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

const notion = new NotionAPI();
interface Props {
  recordMap: ExtendedRecordMap;
}

export const getStaticProps = async () => {
  const pageId = '067dd719a912471ea9a3ac10710e7fdf';
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

function NotionTest({ recordMap }: Props) {
  return <NotionRenderer recordMap={recordMap} />;
}

export default NotionTest;
