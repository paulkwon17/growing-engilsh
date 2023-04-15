import { TodoIcon } from '@components/atoms';
import Colors from '@styles/colors';
import { Todo } from '@type/app/todo';
import moment from 'moment';
import * as S from './style';

interface TodoListSectionProps {
  todoList: Todo[];
}

const TodoListSection = ({ todoList }: TodoListSectionProps) => {
  return (
    <S.Container>
      <S.ItemContainer head>
        <S.CheckText head>Check</S.CheckText>
        <S.TodoText head>Todo</S.TodoText>
        <S.DeadlineText>Deadline</S.DeadlineText>
      </S.ItemContainer>
      {todoList.map((todo) => (
        <S.ItemContainer key={todo.todoListId}>
          <S.CheckText>
            <TodoIcon color={todo.check ? Colors.toryblue : Colors.text03} />
          </S.CheckText>
          <S.TodoText>{todo.name}</S.TodoText>
          <S.DeadlineText>{moment(todo.deadline).format('MM-DD')}</S.DeadlineText>
        </S.ItemContainer>
      ))}
    </S.Container>
  );
};

export default TodoListSection;
