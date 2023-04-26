import { usePutTodoCheckById } from '@api/todoList';
import { TodoIcon } from '@components/atoms';
import Colors from '@styles/colors';
import { Todo } from '@type/app/todo';
import moment from 'moment';
import * as S from './style';

interface TodoListSectionProps {
  todoList: Todo[];
}

const TodoListSection = ({ todoList }: TodoListSectionProps) => {
  const { mutate } = usePutTodoCheckById();

  const onClick = (_id: string, check: boolean) => mutate({ _id, check });

  return (
    <S.Container>
      <S.ItemContainer head>
        <S.CheckText head>Check</S.CheckText>
        <S.TodoText head>Todo</S.TodoText>
        <S.DeadlineText>Deadline</S.DeadlineText>
      </S.ItemContainer>
      {todoList.map(({ _id, check, name, deadline }) => (
        <S.ItemContainer key={_id}>
          <S.CheckText
            onClick={() => {
              onClick(_id, check);
            }}
          >
            <TodoIcon color={check ? Colors.toryblue : Colors.text03} />
          </S.CheckText>
          <S.TodoText>{name}</S.TodoText>
          <S.DeadlineText>{moment(deadline).format('MM-DD')}</S.DeadlineText>
        </S.ItemContainer>
      ))}
    </S.Container>
  );
};

export default TodoListSection;
