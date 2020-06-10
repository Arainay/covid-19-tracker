import ApiService from './ApiService';

export default class CovidService extends ApiService {
  getInfo() {
    return this.get();
  }

  getCountries() {
    return this.get('/countries');
  }

  getCountryByName(name) {
    return this.get(`/countries/${name}`);
  }

  getConfirmed() {
    return this.get('/confirmed');
  }

  getRecovered() {
    return this.get('/recovered');
  }

  getDaily() {
    return this.get('/daily');
  }
}
