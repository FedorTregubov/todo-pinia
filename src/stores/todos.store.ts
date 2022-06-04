import { defineStore } from "pinia";
import { logger } from "@/utils";
import {
  completeTodoItem,
  deleteTodoItem,
  getTodosList,
  postTodoItem,
} from "@/api";
import { type ITodo, LOAD_STATUSES } from "@/models";
import { APP_PAGINATION_DEFAULT } from "@/data/constants";

export const useTodosStore = defineStore({
  id: "todos",

  state: () => ({
    list: [] as ITodo[],
    listStatus: LOAD_STATUSES.IS_LOADING,
    listPagination: { ...APP_PAGINATION_DEFAULT },
  }),

  actions: {
    async fetch() {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        const { data } = await getTodosList({
          _start: this.listPagination.offset,
          _limit: this.listPagination.limit,
        });
        this.list = [...this.list, ...data];
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        logger("Error occurred while fetching todos", error);
      }
    },
    async create(title: ITodo["title"]) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        await postTodoItem({ title });
        this.list = [];
        this.listPagination = { ...APP_PAGINATION_DEFAULT };
        await this.fetch();
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        logger("Error occurred while creating todo", error);
      }
    },
    async complete(todoItem: ITodo) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        await completeTodoItem(String(todoItem.id), {
          completed: !todoItem.completed,
        });
        const candidate = this.list.find((item) => item.id === todoItem.id);
        if (candidate) {
          candidate.completed = !candidate.completed;
        }
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        logger(
          "Error occurred while toggling status completed for todo",
          error
        );
      }
    },
    async delete(id: ITodo["id"]) {
      try {
        this.listStatus = LOAD_STATUSES.IS_LOADING;
        await deleteTodoItem(String(id));
        this.list = this.list.filter((item) => item.id !== id);
        this.listStatus = LOAD_STATUSES.IS_IDLE;
      } catch (error) {
        this.listStatus = LOAD_STATUSES.IS_ERROR;
        logger("Error occurred while deleting todo", error);
      }
    },
  },
  getters: {},
});
