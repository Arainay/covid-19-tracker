import ApiService from './ApiService';

export default class CovidService extends ApiService {
  getInfo() {
    return this.get();
  }
}
