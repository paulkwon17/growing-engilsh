import { getNotionDatabase } from '@api/notion';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';

const NotionTest = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [array, setArray] = useState<(PageObjectResponse | PartialPageObjectResponse)[]>([]);

  console.log(array);

  useEffect(() => {
    setArray(results);
  }, [results]);
  return <div></div>;
};

export const getStaticProps = async () => {
  const { NOTION_NOTICE_DATABASE_ID } = process.env;
  return await getNotionDatabase(NOTION_NOTICE_DATABASE_ID);
};

export default NotionTest;
