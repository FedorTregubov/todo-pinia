import { computed, defineComponent, ref } from "vue";
import AppInput from "@/components/shared/app-input/app-input.vue";
import AppButton from "@/components/shared/app-button/app-button.vue";
import { useTodosStore } from "@/stores/todos.store";
import { LOAD_STATUSES } from "@/models";

export default defineComponent({
  name: "TodoCreateForm",

  components: {
    AppInput,
    AppButton,
  },

  setup() {
    const todoStore = useTodosStore();

    const title = ref("");

    const isSubmitDisabled = computed(() => {
      return todoStore.listStatus === LOAD_STATUSES.IS_LOADING || !title.value;
    });

    const onSubmit = async (): Promise<void> => {
      if (isSubmitDisabled.value) return;
      await todoStore.create(title.value);
      title.value = "";
    };

    return {
      title,
      isSubmitDisabled,
      onSubmit,
    };
  },
});
