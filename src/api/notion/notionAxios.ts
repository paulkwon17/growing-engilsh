import { Client } from '@notionhq/client';

const { NOTION_API_KEY: notionKey } = process.env;

const notion = new Client({ auth: notionKey });

export const getNotionDatabase = async (databaseId?: string) => {
  if (!databaseId) {
    return;
  }

  const { results } = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    props: {
      results,
    },
  };
};

export const getNotionPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getNotionBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
