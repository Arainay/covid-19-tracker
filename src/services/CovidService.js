import ApiService from './ApiService';

export default class CovidService extends ApiService {
  getInfo() {
    return this.get();
  }

  getCountries() {
    return this.get('/countries');
  }

  getCountryByName(name) {
    return this.get(`/counties/${name}`);
  }

  getConfirmed() {
    return this.get('/confirmed');
  }

  getDaily() {
    return this.get('/daily');
  }

  getRecovered() {
    return this.get('/recovered');
  }
}
