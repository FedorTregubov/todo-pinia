import { defineComponent } from 'vue';
import TodoListItem from '@/components/todo-list-item/todo-list-item.vue';

export default defineComponent({
  name: 'TodoList',

  components: { TodoListItem },

  setup () {
    const todos = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
    ];

    const onComplete = (id: string): void => {
      console.log('onComplete', id);
    };

    const onDelete = (id: string): void => {
      console.log('onDelete', id);
    };

    return {
      todos,
      onComplete,
      onDelete,
    };
  },
});
