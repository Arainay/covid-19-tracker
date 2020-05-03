const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

export default class ApiService {
  constructor() {
    this.baseUrl = 'https://covid19.mathdro.id/api';
  }

  query(url = '', { headers = {}, ...options } = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      ...this.options,
      ...options,
      headers
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('error');
      });
  }

  get(url = '', options = {}) {
    return this.query(url, { ...options, method: GET });
  }

  post(url = '', body = {}, options = {}) {
    return this.query(url, { ...options, method: POST, body: JSON.stringify(body) });
  }

  put(url = '', body = {}, options = {}) {
    return this.query(url, { ...options, method: PUT, body: JSON.stringify(body) });
  }

  delete(url = '', options = {}) {
    return this.query(url, { ...options, method: DELETE });
  }
}
