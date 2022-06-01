import { defineStore } from 'pinia'
import { todos } from '@/data/mocks/todos.mock.data';
import { completeTodoItem, deleteTodoItem, getTodosList, postTodoItem } from '@/api';
import type { ITodo } from '@/models';

export enum LOAD_STATUSES {
  'IS_LOADING' = 'IS_LOADING',
  'IS_ERROR' = 'IS_ERROR',
  'IS_IDLE' = 'IS_IDLE',
}

export const useTodosStore = defineStore({
  id: 'todos',

  state: () => ({
    list: [] as ITodo[],
    listStatus: LOAD_STATUSES.IS_LOADING,
  }),

  actions: {
    async fetch () {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        const { data } = await getTodosList();
        this.list = [...data];
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        console.log('Error occurred while fetching todos', error);
      }
    },
    async create (title: ITodo['title']) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        const { data } = await postTodoItem({ title });
        this.list.unshift(data);
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        console.log('Error occurred while creating todo', error);
      }
    },
    async complete (todoItem: ITodo) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        await completeTodoItem(todoItem.id, !todoItem.completed);
        const candidate = this.list.find(item => item.id === todoItem.id);
        if (candidate) {
          candidate.completed = !candidate.completed;
        }
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        console.log('Error occurred while toggling status completed for todo', error);
      }
    },
    async delete (id: ITodo['id']) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        await deleteTodoItem(id);
        this.list = this.list.filter(item => item.id !== id);
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        console.log('Error occurred while deleting todo', error);
      }
    },
  },
  getters: {
  },
});
