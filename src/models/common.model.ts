export interface IAppPagination {
  limit: number;
  offset: number;
}

export enum LOAD_STATUSES {
  "IS_LOADING" = "IS_LOADING",
  "IS_ERROR" = "IS_ERROR",
  "IS_IDLE" = "IS_IDLE",
}
