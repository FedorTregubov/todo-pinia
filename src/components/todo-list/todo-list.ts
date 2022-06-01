import { computed, defineComponent, onMounted } from 'vue';
import AppErrorCatch from '@/components/app-error-catch/app-error-catch.vue';
import AppLoader from '@/components/app-loader/app-loader.vue';
import TodoListItem from '@/components/todo-list-item/todo-list-item.vue';
import TodoCreateForm from '@/components/todo-create-form/todo-create-form.vue';
import { useTodosStore, LOAD_STATUSES } from '@/stores/todos.store';
import type { ITodo } from '@/models';

export default defineComponent({
  name: 'TodoList',

  components: {
    AppErrorCatch,
    AppLoader,
    TodoListItem,
    TodoCreateForm,
  },

  setup () {
    const todosStore = useTodosStore();

    const todos = computed(() => todosStore.list);
    const todosStatus = computed(() => todosStore.listStatus);

    const onCreate = async (title: string): Promise<void> => {
      await todosStore.create(title);
    };

    const onComplete = async (todoItem: ITodo): Promise<void> => {
      await todosStore.complete(todoItem);
    };

    const onDelete = async (id: ITodo['id']): Promise<void> => {
      await todosStore.delete(id);
    };

    onMounted(async () => {
      await todosStore.fetch();
    });

    return {
      LOAD_STATUSES,
      todos,
      todosStatus,
      onComplete,
      onCreate,
      onDelete,
    };
  },
});
