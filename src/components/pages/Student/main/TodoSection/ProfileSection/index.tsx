import { TodoIcon } from '@components/atoms';
import Colors from '@styles/colors';
import { Todo } from '@type/app';

import * as S from './style';

interface ProfileSectionProps {
  todoList: Todo[];
}

export default function ProfileSection({ todoList }: ProfileSectionProps) {
  const notCompleteTodoLength = todoList.filter((todo) => !todo.check).length;

  return (
    <S.Container>
      <S.Name>권혁준</S.Name>
      <S.RemainNumberContainer>
        <S.Todo>
          <TodoIcon color={Colors.text03} />
        </S.Todo>
        <S.RemainNumber>{notCompleteTodoLength}</S.RemainNumber>
      </S.RemainNumberContainer>
    </S.Container>
  );
}
