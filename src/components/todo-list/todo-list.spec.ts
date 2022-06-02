import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import TodoList from './todo-list.vue';
import { useTodosStore } from '@/stores/todos.store';
import TodoCreateForm from '@/components/todo-create-form/todo-create-form';

describe('Component TodoList', () => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const store = useTodosStore();

  it('should mount', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have proper name of the component', () => {
    expect(wrapper.vm.$options.name).toMatch('TodoList');
  });

  it('should contain proper components by default', () => {
    expect(wrapper.getComponent(TodoCreateForm)).toBeTruthy();
  });
});
