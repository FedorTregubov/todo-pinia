import { defineComponent } from 'vue';
import TodoListItem from '@/components/todo-list-item/todo-list-item.vue';
import TodoCreateForm from '@/components/todo-create-form/todo-create-form.vue';
import { todos } from '@/data/mocks/todos.mock.data';

export default defineComponent({
  name: 'TodoList',

  components: {
    TodoListItem,
    TodoCreateForm,
  },

  setup () {
    const onCreate = (title: string): void => {
      console.log('onCreate', title);
    };

    const onComplete = (id: string): void => {
      console.log('onComplete', id);
    };

    const onDelete = (id: string): void => {
      console.log('onDelete', id);
    };

    return {
      todos,
      onComplete,
      onCreate,
      onDelete,
    };
  },
});
