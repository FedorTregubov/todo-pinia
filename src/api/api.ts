import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// const apiBase = process.env.VUE_APP_BASE_URL_CANDIDATES;
const apiBase = 'https://jsonplaceholder.typicode.com/todos';

const api = axios.create({
  baseURL: apiBase,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default api;

export enum API_METHODS {
  'GET' = 'GET',
  'PATCH' = 'PATCH',
  'POST' = 'POST',
  'DELETE' = 'DELETE',
}
