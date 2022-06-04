import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppInput from "./app-input.vue";

describe("Component AppInput", () => {
  const wrapper = shallowMount(AppInput);
  const getInputElement = () => wrapper.find("input");

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("AppInput");
  });

  it("should render component properly", () => {
    const elInput = getInputElement();

    expect(elInput).toBeTruthy();
    expect(elInput.text()).toBeFalsy();
  });

  it.each([
    [null, ""],
    [undefined, ""],
    [0, "0"],
    ["0", "0"],
    [33, "33"],
    ["42", "42"],
    ["Buy coffee", "Buy coffee"],
  ])("should pass prop.modelValue %p correctly", async (input, expected) => {
    await wrapper.setProps({ modelValue: input });
    expect(getInputElement()?.element.value).toBe(expected);
  });

  it("should emit update:modelValue properly", async () => {
    const mockString = "Drink coffee";
    const elInput = getInputElement();

    elInput.element.value = mockString;
    await elInput.trigger("input");

    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect((<string[]>wrapper.emitted("update:modelValue")?.[0])[0]).toBe(
      mockString
    );
  });
});
