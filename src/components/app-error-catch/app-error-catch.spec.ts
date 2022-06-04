import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppErrorCatch from "./app-error-catch.vue";

describe("Component AppErrorCatch", () => {
  const wrapper = shallowMount(AppErrorCatch);

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("AppErrorCatch");
  });

  it("should render default message properly", () => {
    expect(wrapper.text()).toMatch("An error occurred.");
  });

  it("should render proper slot message", () => {
    const errorMessage = "Ooops! En error!";
    const wrapper = shallowMount(AppErrorCatch, {
      slots: {
        default: errorMessage,
      },
    });

    expect(wrapper.text()).toMatch(errorMessage);
  });
});
