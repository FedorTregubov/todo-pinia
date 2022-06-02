import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import AppButton, { AppButtonTypes } from './index';

describe('Component AppButton', () => {
  const wrapper = shallowMount(AppButton);
  const getButtonElement = () => wrapper.find('button');

  it('should mount', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have proper name of the component', () => {
    expect(wrapper.vm.$options.name).toMatch('AppButton');
  });

  it('should render default slot properly', () => {
    const elButton = getButtonElement();

    expect(elButton).toBeTruthy();
    expect(elButton.text()).toBeFalsy();
  });

  it('should render proper slot message', () => {
    const buttonText = '<span>Click me</span>';
    const wrapper = shallowMount(AppButton, {
      slots: {
        default: buttonText,
      },
    });

    expect(wrapper.html()).toContain(buttonText);
  });

  describe('should pass all the props correctly', () => {
    it('should pass prop.isDisabled correctly', async () => {
      expect(getButtonElement()?.attributes('disabled')).toBeUndefined();

      await wrapper.setProps({ isDisabled: true });
      const buttonElement = getButtonElement();

      expect(buttonElement?.attributes('disabled')).toBe('');
      expect(buttonElement?.classes('opacity-50')).toBe(true);
    });

    it('should pass prop.buttonType correctly', async () => {
      expect(getButtonElement()?.classes('bg-emerald-500')).toBe(true);

      await wrapper.setProps({ buttonType: AppButtonTypes.DANGER });
      expect(getButtonElement()?.classes('bg-red-400')).toBe(true);

      await wrapper.setProps({ buttonType: AppButtonTypes.PRIMARY });
      expect(getButtonElement()?.classes('bg-emerald-500')).toBe(true);
    });
  });
});
