import api, { API_METHODS } from './api';
import type { ITodo } from '@/models';

export const getTodosList = () =>
  api({
    method: API_METHODS.GET,
  });

export const postTodoItem = (data: { title: ITodo['title'] }) =>
  api({
    method: API_METHODS.POST,
    data,
  });

export const completeTodoItem = (id: ITodo['id'], completed: ITodo['completed']) =>
  api({
    url: String(id),
    method: API_METHODS.PATCH,
    data: {
      completed,
    },
  });

export const deleteTodoItem = (id: ITodo['id']) =>
  api({
    url: String(id),
    method: API_METHODS.DELETE,
  });
