import { useState, useEffect } from 'react';

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import * as S from './style';

interface NoticeSectionProps {
  results?: PageObjectResponse[];
}

function NoticeSection({ results = undefined }: NoticeSectionProps) {
  const [array, setArray] = useState<PageObjectResponse[]>([]);

  useEffect(() => {
    if (!results) {
      return;
    }
    setArray(results.filter(({ object }) => object === 'page'));
  }, [results]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Notice</S.Title>
        <S.More>더보기</S.More>
      </S.TitleContainer>
      {array.map((page) => (
        <span key={page.id}>{page.properties.Title.title[0].plain_text}</span>
      ))}
    </S.Container>
  );
}

export default NoticeSection;
