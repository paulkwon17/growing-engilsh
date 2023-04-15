import { Todo } from '@type/app/todo';
import { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import * as S from './style';
import TodoListSection from './TodoListSection';
import { TODO_LIST } from './TODO_LIST';

export const TodoSection = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList(TODO_LIST);
  }, []);

  return (
    <S.Container>
      <ProfileSection todoList={todoList} />
      <TodoListSection todoList={todoList} />
    </S.Container>
  );
};
