import { describe, it, expect, vi } from "vitest";
import { shallowMount } from '@vue/test-utils';
import TodoListItem from "./todo-list-item.vue";
import { createTestingPinia } from "@pinia/testing";
import { todos } from "@/data/mocks/todos.mock.data";
import merge from "lodash.merge";
import { useTodosStore } from "@/stores/todos.store";

const completedTodo = todos[0];
const uncompletedTodo = todos[2];

const createWrapper = (overrides? : {}) => {
  const defaultOptions = {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
    props: { item: completedTodo },
    ...overrides,
  };

  merge(defaultOptions, overrides);

  return shallowMount(TodoListItem, defaultOptions);
};

describe("Component TodoListItem", () => {
  it("should mount", () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$options.name).toMatch("TodoListItem");
  });

  it("should render todo title properly", () => {
    const wrapper = createWrapper();

    expect(wrapper.text()).toMatch(completedTodo.title);
  });

  it("should render new todo properly", () => {
    const wrapper = createWrapper({
      props: { item: uncompletedTodo },
    });

    expect(wrapper.findComponent({ name: "IconLoading" }).exists()).toBeFalsy();
    expect(wrapper.findComponent({ name: "IconCheck" }).exists()).toBeFalsy();
    expect(wrapper.findComponent({ name: "AppButton" }).exists()).toBeTruthy();
  });

  it("should render completed todo properly", () => {
    const wrapper = createWrapper();

    expect(wrapper.findComponent({ name: "IconLoading" }).exists()).toBeFalsy();
    expect(wrapper.findComponent({ name: "IconCheck" }).exists()).toBeFalsy();
    expect(wrapper.findComponent({ name: "AppButton" }).exists()).toBeTruthy();
  });

  it("should call delete action", async () => {
    const wrapper = createWrapper();
    const store = useTodosStore();

    const buttonDelete = wrapper.findComponent({ name: "AppButton" });
    await buttonDelete.trigger("click");

    expect(store.delete).toHaveBeenCalledOnce();
    expect(store.delete).toHaveBeenLastCalledWith(completedTodo.id);
  });

  it("should call complete action", async () => {
    const wrapper = createWrapper({
      props: { item: uncompletedTodo },
    });
    const store = useTodosStore();

    await wrapper.trigger("click");

    expect(store.complete).toHaveBeenCalledOnce();
    expect(store.complete).toHaveBeenLastCalledWith(uncompletedTodo);
  });
});
