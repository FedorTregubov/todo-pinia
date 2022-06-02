// todos.store.spec.ts
import { describe, beforeEach, it, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useTodosStore } from './todos.store';
import { LOAD_STATUSES } from '@/models';
import { APP_PAGINATION_DEFAULT } from '@/data/constants';
import { todos } from '@/data/mocks/todos.mock.data';

describe('Store Todos', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should set listStatus properly', () => {
    const todosStore = useTodosStore();

    expect(todosStore.listStatus).toBe(LOAD_STATUSES.IS_LOADING);

    todosStore.listStatus = LOAD_STATUSES.IS_IDLE;
    expect(todosStore.listStatus).toBe(LOAD_STATUSES.IS_IDLE);

    todosStore.listStatus = LOAD_STATUSES.IS_ERROR;
    expect(todosStore.listStatus).toBe(LOAD_STATUSES.IS_ERROR);
  });

  it('should set list properly', () => {
    const todosStore = useTodosStore();

    expect(todosStore.list).toEqual([]);

    todosStore.list = [...todos];
    expect(todosStore.list).toEqual(todos);
  });

  it('should set listPagination properly', () => {
    const todosStore = useTodosStore();

    expect(todosStore.listPagination).toEqual(APP_PAGINATION_DEFAULT);

    const payload = { offset: 100, limit: 500 };
    todosStore.$patch({ listPagination: payload })

    expect(todosStore.listPagination).toEqual(payload);
  });
});
