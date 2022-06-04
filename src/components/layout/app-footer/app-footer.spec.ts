import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppFooter from "./app-footer.vue";
import { APP_GITHUB_LINK } from "@/data/constants";

describe("Component AppFooter", () => {
  const wrapper = shallowMount(AppFooter);

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("AppFooter");
  });

  it("should render content properly", () => {
    const link = wrapper.find("[data-test=app-footer__link]");

    expect(link).toBeTruthy();
    expect(link.text()).toContain("Github");
    expect(link.attributes("href")).toMatch(APP_GITHUB_LINK);
  });
});
