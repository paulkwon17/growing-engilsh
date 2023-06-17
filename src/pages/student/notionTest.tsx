import { useEffect, useState } from 'react';

import { getNotionDatabase } from '@api/notion';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { InferGetStaticPropsType } from 'next';

function NotionTest({ results }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [array, setArray] = useState<(PageObjectResponse | PartialPageObjectResponse)[]>([]);

  console.log(array);

  useEffect(() => {
    setArray(results);
  }, [results]);
  return <div />;
}

export const getStaticProps = async () => {
  const { NOTION_NOTICE_DATABASE_ID } = process.env;
  return getNotionDatabase(NOTION_NOTICE_DATABASE_ID);
};

export default NotionTest;
