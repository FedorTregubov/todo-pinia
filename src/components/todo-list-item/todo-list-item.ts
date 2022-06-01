import { defineComponent } from 'vue';
import { IconCheck, IconTrash } from '@/components/shared/icons';
import AppButton, { AppButtonTypes } from '@/components/shared/app-button';

export default defineComponent({
  name: 'TodoListItem',

  components: {
    IconCheck,
    IconTrash,
    AppButton,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  emits: ['complete', 'delete'],

  setup (props, { emit }) {
    const onComplete = (): void => {
      emit('complete', props.item);
    };

    const onDelete = (): void => {
      emit('delete', props.item.id);
    };

    return {
      onComplete,
      onDelete,
      AppButtonTypes,
    };
  },
});
