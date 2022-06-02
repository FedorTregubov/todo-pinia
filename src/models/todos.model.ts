export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoListRequestParams {
  _start?: number;
  _limit?: number;
}

export interface ITodoCreateRequest {
  title: string;
}

export interface ITodoCompleteRequest {
  completed: boolean;
}
