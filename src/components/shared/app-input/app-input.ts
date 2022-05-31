import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',

  props: {
    modelValue: {
      type: [String, Number],
    },
  },

  emit: ['update:modelValue'],

  setup (props, { emit }) {
    const onInput = (event: Event): void => {
      emit('update:modelValue', (event.target as HTMLInputElement).value);
    };

    return {
      onInput,
    };
  },
});
