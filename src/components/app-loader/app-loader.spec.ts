import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppLoader from './app-loader.vue';
import { IconLoading } from '@/components/shared/icons';

describe('Component AppLoader', () => {
  const wrapper = mount(AppLoader);

  it('should mount', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have proper name of the component', () => {
    expect(wrapper.vm.$options.name).toMatch('AppLoader');
  });

  it('should render default slot properly', () => {
    expect(wrapper.getComponent(IconLoading)).toBeTruthy();
  });

  it('should render proper slot message', () => {
    const loadingMessage = '<div>Loading...</div>';
    const wrapper = mount(AppLoader, {
      slots: {
        default: loadingMessage,
      },
    });

    expect(wrapper.html()).toContain(loadingMessage);
  });
});
