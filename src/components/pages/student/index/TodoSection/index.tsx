import { useGetTodoListInfo } from '@api/todoList';
import { Todo } from '@type/app/todo';
import { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import * as S from './style';
import TodoListSection from './TodoListSection';

export const TodoSection = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const { data } = useGetTodoListInfo();

  useEffect(() => {
    if (!data) {
      return;
    }
    setTodoList(data);
  }, [data]);

  return (
    <S.Container>
      <ProfileSection todoList={todoList} />
      {data && <TodoListSection todoList={data} />}
    </S.Container>
  );
};
