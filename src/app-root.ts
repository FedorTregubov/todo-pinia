import { defineComponent } from "vue";
import TodoList from "@/views/todo-list-view/todo-list-view.vue";
import AppHeader from "@/components/layout/app-header/app-header.vue";
import AppFooter from "@/components/layout/app-footer/app-footer.vue";

export default defineComponent({
  name: "AppRoot",

  components: {
    AppHeader,
    AppFooter,
    TodoList,
  },

  setup() {
    return {};
  },
});
