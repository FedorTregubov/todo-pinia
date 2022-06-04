import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import TodoCreateForm from "./todo-create-form.vue";
import { createTestingPinia } from "@pinia/testing";
import AppInput from "@/components/shared/app-input/app-input.vue";
import AppButton from "@/components/shared/app-button";
import { postTodoItem } from "@/api";

vi.mock("@/api");

const wrapper = mount(TodoCreateForm, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
});

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  wrapper.unmount();
});

describe("Component TodoCreateForm", () => {
  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("TodoCreateForm");
  });

  it("should render component properly", () => {
    const componentInput = wrapper.findComponent(AppInput);

    expect(componentInput.exists()).toBe(true);
    expect(componentInput.attributes("placeholder")).toBe("Type new item");
    expect(wrapper.findComponent(AppButton).exists()).toBe(true);
  });

  it("should not submit empty form", async () => {
    await flushPromises();
    await wrapper.trigger("submit");

    expect(postTodoItem).toHaveBeenCalledTimes(0);
  });
});
