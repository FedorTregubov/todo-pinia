import TodoListItem from "@/components/todo-list-item/todo-list-item.vue";
import { todos } from "@/data/mocks/todos.mock.data";
import { useTodosStore } from "@/stores/todos.store";
import { describe, it, expect, vi } from "vitest";
import { shallowMount, flushPromises } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import TodoList from "./todo-list-view.vue";
import AppErrorCatch from "@/components/app-error-catch/app-error-catch.vue";
import TodoCreateForm from "@/components/todo-create-form/todo-create-form.vue";
import { LOAD_STATUSES } from "@/models";

const createWrapper = () => {
  return shallowMount(TodoList, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });
};

describe("Component TodoList", () => {
  it("should mount", () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$options.name).toMatch("TodoList");
  });

  it("should contain proper components by default", () => {
    const wrapper = createWrapper();

    expect(wrapper.getComponent(TodoCreateForm)).toBeTruthy();
  });

  it("should render error component in case of error status", async () => {
    const wrapper = createWrapper();
    const store = useTodosStore();

    store.$patch({ listStatus: LOAD_STATUSES.IS_ERROR });
    expect(store.listStatus).toBe(LOAD_STATUSES.IS_ERROR);

    await wrapper.vm.$nextTick();
    expect(wrapper.getComponent(AppErrorCatch)).toBeTruthy();
  });

  it("should render todo-list-item components properly", async () => {
    const wrapper = createWrapper();
    const store = useTodosStore();

    store.$patch({ list: todos });
    store.$patch({ listStatus: LOAD_STATUSES.IS_IDLE });

    expect(store.list).toEqual(todos);
    expect(store.listStatus).toEqual(LOAD_STATUSES.IS_IDLE);

    await wrapper.vm.$nextTick();
    const todoListItems = wrapper.findAllComponents(TodoListItem);

    expect(todoListItems).toHaveLength(todos.length);
    todoListItems.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toEqual(todos[i]);
    });
  });

  it("should call loadTodos method on mount hook", async () => {
    const store = useTodosStore();
    createWrapper();

    await flushPromises();
    expect(store.fetch).toHaveBeenCalledOnce();
  });
});
