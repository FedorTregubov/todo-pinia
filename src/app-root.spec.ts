import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppRoot from "./app-root.vue";
import AppHeader from '@/components/layout/app-header/app-header.vue';
import AppFooter from '@/components/layout/app-footer/app-footer.vue';
import TodoList from '@/views/todo-list-view/todo-list-view.vue';

describe("Component AppRoot", () => {
  const wrapper = shallowMount(AppRoot, {});

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("AppRoot");
  });

  it("should contain proper components by default", () => {
    expect(wrapper.findComponent(AppHeader).exists()).toBe(true);
    expect(wrapper.findComponent(AppFooter).exists()).toBe(true);
    expect(wrapper.findComponent(TodoList).exists()).toBe(true);
  });
});
