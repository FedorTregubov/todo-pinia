import api from './api';

export const getTodosList = () =>
  api({
    method: 'get',
  });
