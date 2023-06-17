import { useRouter } from 'next/router';

import { Button, GrowingLogo } from '@components/atoms';

import * as S from './styles';

export default function MainLayout() {
  const router = useRouter();
  const goStudent = () => {
    router.push('/student');
  };
  const goTeacher = () => {
    router.push('/teacher');
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <GrowingLogo />
        <S.ButtonContainer>
          <Button onClick={goStudent}>학생용 페이지</Button>
          <Button onClick={goTeacher}>교사용 페이지</Button>
        </S.ButtonContainer>
      </S.LogoContainer>
    </S.Container>
  );
}
