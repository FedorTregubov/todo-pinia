import api from "./api";
import { API_METHODS } from "./api.models";
import { encodeQueryParams } from "./api-helpers";
import type {
  ITodoCompleteRequest,
  ITodoCreateRequest,
  ITodoListRequestParams,
} from "@/models";

export const getTodosList = (params: ITodoListRequestParams) =>
  api({
    url: encodeQueryParams(params),
    method: API_METHODS.GET,
  });

export const postTodoItem = (data: ITodoCreateRequest) =>
  api({
    method: API_METHODS.POST,
    data,
  });

export const completeTodoItem = (id: string, data: ITodoCompleteRequest) =>
  api({
    url: id,
    method: API_METHODS.PATCH,
    data,
  });

export const deleteTodoItem = (id: string) =>
  api({
    url: id,
    method: API_METHODS.DELETE,
  });
