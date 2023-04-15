import { useQuery } from '@tanstack/react-query';
import { getTodoItemInfo } from './todoAxios';

const useGetTodoItemInfo = () => {
  return useQuery(['get-todo-items'], getTodoItemInfo);
};

export default useGetTodoItemInfo;
