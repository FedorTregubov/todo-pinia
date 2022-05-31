import { defineComponent, ref, } from 'vue';
import AppInput from '@/components/shared/app-input/app-input.vue';
import AppButton from '@/components/shared/app-button/app-button.vue';

export default defineComponent({
  name: 'TodoCreateForm',

  components: {
    AppInput,
    AppButton,
  },

  emit: ['create'],

  setup (_, { emit }) {
    const title = ref('');

    const onCreate = (): void => {
      emit('create', title.value);
    };

    return {
      title,
      onCreate,
    };
  },
})
