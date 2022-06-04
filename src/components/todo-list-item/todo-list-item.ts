import { defineComponent, ref } from "vue";
// import { IconCheck, IconTrash, IconLoading } from "@/components/shared/icons";
import IconCheck from "@/components/shared/icons/icon-check.vue";
import IconTrash from "@/components/shared/icons/icon-trash.vue";
import IconLoading from "@/components/shared/icons/icon-loading.vue";
import AppButton, { AppButtonTypes } from "@/components/shared/app-button";
import { type ITodo, LOAD_STATUSES } from "@/models";
import { useTodosStore } from "@/stores/todos.store";

export default defineComponent({
  name: "TodoListItem",

  components: {
    IconCheck,
    IconTrash,
    IconLoading,
    AppButton,
  },

  props: {
    item: {
      type: Object as () => ITodo,
      required: true,
    },
  },

  setup(props) {
    const todosStore = useTodosStore();

    const itemStatus = ref(LOAD_STATUSES.IS_IDLE);

    const onComplete = async (): Promise<void> => {
      if (itemStatus.value === LOAD_STATUSES.IS_LOADING) return;

      itemStatus.value = LOAD_STATUSES.IS_LOADING;
      await todosStore.complete(props.item);
      itemStatus.value = LOAD_STATUSES.IS_IDLE;
    };

    const onDelete = async (): Promise<void> => {
      if (itemStatus.value === LOAD_STATUSES.IS_LOADING) return;

      itemStatus.value = LOAD_STATUSES.IS_LOADING;
      await todosStore.delete(props.item.id);
      itemStatus.value = LOAD_STATUSES.IS_IDLE;
    };

    return {
      itemStatus,
      LOAD_STATUSES,
      onComplete,
      onDelete,
      AppButtonTypes,
    };
  },
});
