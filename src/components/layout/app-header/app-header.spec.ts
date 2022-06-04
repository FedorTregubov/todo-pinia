import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppHeader from "./app-header.vue";
import { APP_TITLE } from "@/data/constants";

describe("Component AppHeader", () => {
  const wrapper = shallowMount(AppHeader);

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have proper name of the component", () => {
    expect(wrapper.vm.$options.name).toMatch("AppHeader");
  });

  it("should render app-title properly", () => {
    const appTitle = wrapper.find("[data-test=app-header__title]");

    expect(appTitle).toBeTruthy();
    expect(appTitle.text()).toContain(APP_TITLE);
  });

  it("should render app-nav properly", () => {
    const appNav = wrapper.find("[data-test=app-header__nav]");

    expect(appNav).toBeTruthy();
    expect(appNav.text()).toContain("About");
  });
});
