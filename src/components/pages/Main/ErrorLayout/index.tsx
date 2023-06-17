import { useRouter } from 'next/router';

import { Button } from '@components/atoms';

import * as S from './styles';

export default function ErrorLayout() {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <S.Container>
      <S.Title>잘못된 경로로 접근하셨습니다.</S.Title>
      <Button onClick={goHome}>메인으로 돌아가기</Button>
    </S.Container>
  );
}
