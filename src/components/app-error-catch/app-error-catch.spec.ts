import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppErrorCatch from './app-error-catch.vue';

describe('Component AppErrorCatch', () => {
  const wrapper = mount(AppErrorCatch);

  it('should mount', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have proper name of the component', () => {
    expect(wrapper.vm.$options.name).toMatch('AppErrorCatch');
  });

  it('should render default message properly', () => {
    expect(wrapper.text()).toMatch('An error occurred.');
  });

  it('should render proper slot message', () => {
    const errorMessage = 'Ooops! En error!';
    const wrapper = mount(AppErrorCatch, {
      slots: {
        default: errorMessage,
      },
    });

    expect(wrapper.text()).toMatch(errorMessage);
  });
});
