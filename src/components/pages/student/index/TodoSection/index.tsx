import { useEffect, useState } from 'react';

import { useGetTodoListInfo } from '@api/todoList';
import styled from '@emotion/styled';
import { Todo } from '@type/app';

import ProfileSection from './ProfileSection';
import TodoListSection from './TodoListSection';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  * {
    user-select: none;
  }
`;

export default function TodoSection() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const { data } = useGetTodoListInfo();

  useEffect(() => {
    if (!data) {
      return;
    }
    setTodoList(data);
  }, [data]);

  return (
    <Container>
      <ProfileSection todoList={todoList} />
      {data && <TodoListSection todoList={data} />}
    </Container>
  );
}
