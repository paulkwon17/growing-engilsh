import { QUERY_KEY } from '@constants/api/keys';
import { useQuery } from '@tanstack/react-query';
import { getNotionDatabase } from './notionAxios';

const useGetNotionDatabase = (databaseId: string) => {
  return useQuery(
    [QUERY_KEY.GET_NOTION_DASTABASE, databaseId],
    () => getNotionDatabase(databaseId),
    {
      onError: (err) => {
        console.error(err);
      },
    },
  );
};

export default useGetNotionDatabase;
