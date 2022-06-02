import { computed, defineComponent, onMounted } from 'vue';
import AppErrorCatch from '@/components/app-error-catch/app-error-catch.vue';
import AppLoader from '@/components/app-loader/app-loader.vue';
import TodoListItem from '@/components/todo-list-item/todo-list-item.vue';
import TodoCreateForm from '@/components/todo-create-form/todo-create-form.vue';
import { useTodosStore } from '@/stores/todos.store';
import type { IAppPagination, ITodo } from '@/models';
import { LOAD_STATUSES } from '@/models';
import { VueInfiniteScrolling } from 'vue-infinite-scrolling';

export default defineComponent({
  name: 'TodoList',

  components: {
    AppErrorCatch,
    AppLoader,
    TodoListItem,
    TodoCreateForm,
    VueInfiniteScrolling
  },

  setup () {
    const todosStore = useTodosStore();

    const todos = computed(() => todosStore.list);
    const todosStatus = computed(() => todosStore.listStatus);
    const todosPagination = computed(() => todosStore.listPagination);

    const onCreate = async (title: string): Promise<void> => {
      await todosStore.create(title);
    };

    const loadTodos = async (): Promise<void> => {
      await todosStore.fetch();
    };

    const onLoadMore = async (offset: IAppPagination['offset']): Promise<void> => {
      todosStore.listPagination.offset = offset;
      await loadTodos();
    };

    onMounted(async () => {
      await loadTodos();
    });

    return {
      LOAD_STATUSES,
      todos,
      todosStatus,
      todosPagination,
      onLoadMore,
      onCreate,
    };
  },
});
