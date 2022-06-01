import { computed, defineComponent, ref } from 'vue';
import AppInput from '@/components/shared/app-input/app-input.vue';
import AppButton from '@/components/shared/app-button/app-button.vue';
import { LOAD_STATUSES, useTodosStore } from '@/stores/todos.store';

export default defineComponent({
  name: 'TodoCreateForm',

  components: {
    AppInput,
    AppButton,
  },

  emit: ['create'],

  setup (_, { emit }) {
    const todoStore = useTodosStore();

    const title = ref('');

    const isSubmitDisabled = computed(() => {
      return todoStore.listStatus === LOAD_STATUSES.IS_LOADING
        || !title.value;
    });

    const onSubmit = (): void => {
      if (isSubmitDisabled.value) return;
      emit('create', title.value);
      title.value = '';
    };

    return {
      title,
      isSubmitDisabled,
      onSubmit,
    };
  },
})
